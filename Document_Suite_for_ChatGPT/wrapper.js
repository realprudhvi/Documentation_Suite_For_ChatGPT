// wrapper.js
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('sandbox-frame');

    // 1. Get the data saved by content.js
    chrome.storage.local.get(['previewData'], (result) => {
        if (result.previewData) {
            // 2. Wait for iframe to load, then send data
            iframe.onload = () => {
                iframe.contentWindow.postMessage(result.previewData, '*');
            };
        }
    });
});