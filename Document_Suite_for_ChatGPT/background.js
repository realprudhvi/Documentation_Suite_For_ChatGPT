chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "export") {
        
        if (sender.tab && sender.tab.id) {
            chrome.tabs.sendMessage(sender.tab.id, { action: "status_update", step: "processing" });
        }

        const SERVER_URL = "https://realprudhvi-chatgpt-exporter-server.hf.space/export";
        const HF_TOKEN = ""; 

        const headers = { 'Content-Type': 'application/json' };
        if (HF_TOKEN) headers['Authorization'] = `Bearer ${HF_TOKEN}`;

        fetch(SERVER_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                html: request.html,
                format: request.format
            })
        })
        .then(response => {
            if (!response.ok) throw new Error(`Server error: ${response.status}`);
            return response.blob();
        })
        .then(originalBlob => {
            const reader = new FileReader();
            
            let finalBlob;
            if (request.format === 'word') {
                finalBlob = new Blob([originalBlob], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
            } else {
                finalBlob = new Blob([originalBlob], {type: 'application/pdf'});
            }

            reader.readAsDataURL(finalBlob);
            reader.onloadend = function() {
                const base64data = reader.result;
                const now = new Date();
                const timeStr = now.toISOString().slice(0,19).replace(/:/g,"-").replace("T", "_");
                const ext = request.format === 'word' ? 'docx' : 'pdf';
                const finalFilename = `ChatGPT_Exporter_${timeStr}.${ext}`;

                chrome.downloads.download({
                    url: base64data,
                    filename: finalFilename,
                    saveAs: true,
                    conflictAction: 'overwrite'
                }, () => {
                    if (sender.tab && sender.tab.id) {
                        chrome.tabs.sendMessage(sender.tab.id, { action: "status_update", step: "success" });
                    }
                });
            }
        })
        .catch(error => {
            console.error("Export failed:", error);
            if (sender.tab && sender.tab.id) {
                chrome.tabs.sendMessage(sender.tab.id, { action: "status_update", step: "error", message: error.message });
            }
        });
    }
    return true; 
});