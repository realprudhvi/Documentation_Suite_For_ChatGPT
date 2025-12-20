const PATH_DL_DARK     = "animated_svgs/animated_download_dark.svg";
const PATH_DL_LIGHT    = "animated_svgs/animated_download_light.svg";
const PATH_CHECK_DARK  = "animated_svgs/animated_check_dark.svg";
const PATH_CHECK_LIGHT = "animated_svgs/animated_check_light.svg";

const PATH_DELETE_ICON  = "static_svgs/delete.svg";
const PATH_NEW_FOLDER_ICON = "static_svgs/new_folder.svg";
const PATH_ADD_ALL_ICON = "static_svgs/checkbox_chat.svg"; 
const PATH_SWAP_ICON = "static_svgs/swap.svg";          
const PATH_ADD_LIST_ICON = "static_svgs/add_list.svg";
const PATH_EDIT_ICON     = "static_svgs/edit.svg";
const PATH_RENAME_ICON = "static_svgs/edit.svg";
const PATH_EXPAND_ICON = "static_svgs/expand.svg";
const PATH_CONTRACT_ICON = "static_svgs/contract.svg";
const PATH_PREVIEW_ON  = "static_svgs/preview_on.svg";
const PATH_PREVIEW_OFF = "static_svgs/preview_off.svg";

const PDF_ICON_SVG = `
<svg width="24" height="24" viewBox="0 0 512 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 0H350L512 162V590C512 612.091 494.091 630 472 630H40C17.9086 630 0 612.091 0 590V40C0 17.9086 17.9086 0 40 0Z" fill="#FF0000"/>
  <text x="50%" y="270" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="180" fill="white">PDF</text>
  <rect x="70" y="350" width="372" height="46" rx="23" fill="white"/>
  <rect x="70" y="435" width="372" height="46" rx="23" fill="white"/>
  <rect x="70" y="520" width="230" height="46" rx="23" fill="white"/>
</svg>
`;

const WORD_ICON_SVG = `
<svg width="24" height="24" viewBox="0 0 512 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M40 0H350L512 162V590C512 612.091 494.091 630 472 630H40C17.9086 630 0 612.091 0 590V40C0 17.9086 17.9086 0 40 0Z" fill="#0050C8"/>
  <text x="50%" y="270" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="145" fill="white">DOCX</text>
  <rect x="70" y="350" width="372" height="46" rx="23" fill="white"/>
  <rect x="70" y="435" width="372" height="46" rx="23" fill="white"/>
  <rect x="70" y="520" width="230" height="46" rx="23" fill="white"/>
</svg>
`;

const SETTINGS_ICON_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;

const SVG_CHECK_BLANK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
const SVG_CHECK_TICK  = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
const SVG_CLOSE       = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>`;

const expandedGroups = new Set(); 
let isExportInProgress = false; 
let activeExportBtn = null; 
let activeExportFormat = null;
let hasShownShortcutTip = false;
let isSelectionMode = false;
let isSectionSelectionEnabled = false; 
let stateLoop = null; 

const DEFAULT_STATE = {
    lists: [{ 
        id: 'default', 
        name: 'Default List', 
        items: [], 
        folders: [{ id: "folder_" + Date.now(), name: "Default Folder" }] 
    }],
    activeListId: 'default',
    isSelectionMode: false,
    isSectionSelectionEnabled: false,
    exportScopeId: 'all',
    
    settings: {
        shortcuts: {
            word: 'KeyW',
            pdf: 'KeyP',
            select: 'KeyS'
        },
        showTooltip: true,
        enablePreview: false,
        previewInTab: false // <--- NEW SETTING
    }
};

const SecurityManager = {
    
    getKey: async () => {
        
        return new Promise((resolve) => {
            chrome.storage.local.get(['encryption_key_jwk'], async (result) => {
                let key;
                if (result.encryption_key_jwk) {
                    
                    key = await window.crypto.subtle.importKey(
                        "jwk",
                        result.encryption_key_jwk,
                        { name: "AES-GCM" },
                        true,
                        ["encrypt", "decrypt"]
                    );
                } else {
                    
                    key = await window.crypto.subtle.generateKey(
                        { name: "AES-GCM", length: 256 },
                        true,
                        ["encrypt", "decrypt"]
                    );
                    
                    const jwk = await window.crypto.subtle.exportKey("jwk", key);
                    chrome.storage.local.set({ encryption_key_jwk: jwk });
                }
                resolve(key);
            });
        });
    },

    
    encrypt: async (dataObject) => {
        try {
            const key = await SecurityManager.getKey();
            const encodedData = new TextEncoder().encode(JSON.stringify(dataObject));
            
            
            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            
            const encryptedBuffer = await window.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: iv },
                key,
                encodedData
            );
            const combined = new Uint8Array(iv.length + encryptedBuffer.byteLength);
            combined.set(iv);
            combined.set(new Uint8Array(encryptedBuffer), iv.length);

            return SecurityManager.bufferToBase64(combined);
        } catch (e) {
            console.error("Encryption failed:", e);
            return null;
        }
    },

    decrypt: async (base64String) => {
        try {
            if (!base64String) return null;
            const key = await SecurityManager.getKey();
            const combined = SecurityManager.base64ToBuffer(base64String);

            
            const iv = combined.slice(0, 12);
            const data = combined.slice(12);

            const decryptedBuffer = await window.crypto.subtle.decrypt(
                { name: "AES-GCM", iv: iv },
                key,
                data
            );

            const decodedString = new TextDecoder().decode(decryptedBuffer);
            return JSON.parse(decodedString);
        } catch (e) {
            console.error("Decryption failed (Passphrase wrong or data corrupted):", e);
            return null;
        }
    },

    bufferToBase64: (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    },
    base64ToBuffer: (base64) => {
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    }
};


let lists = [];
let activeListId = '';
let exportScopeId = 'all';
let globalSettings = JSON.parse(JSON.stringify(DEFAULT_STATE.settings)); 
let isRecordingShortcut = false; 
let isPreviewMode = false;

const AsyncStorage = {
    save: async () => {
        const payload = {
            lists: lists, 
            activeListId: activeListId,
            isSelectionMode: isSelectionMode,
            isSectionSelectionEnabled: isSectionSelectionEnabled,
            exportScopeId: exportScopeId,
            settings: globalSettings
        };

        const encryptedData = await SecurityManager.encrypt(payload);

        return new Promise((resolve) => {
            chrome.storage.local.set({ 
                encrypted_vault: encryptedData,
                visible_settings: globalSettings 
            }, () => {
                if (chrome.runtime.lastError) console.error("Save Error:", chrome.runtime.lastError);
                resolve();
            });
        });
    },

    load: async () => {
        return new Promise((resolve) => {
            chrome.storage.local.get(null, async (result) => {
                const data = result || {};
                
                if (data.visible_settings) {
                    globalSettings = { ...DEFAULT_STATE.settings, ...data.visible_settings };
                }

                let decryptedPayload = null;
                if (data.encrypted_vault) {
                    decryptedPayload = await SecurityManager.decrypt(data.encrypted_vault);
                } 
                else if (data.lists) {
                    console.log("Migrating unencrypted data to encrypted vault...");
                    decryptedPayload = data; 
                }

                const finalData = decryptedPayload || DEFAULT_STATE;

                lists = (finalData.lists && finalData.lists.length > 0) ? finalData.lists : DEFAULT_STATE.lists;
                activeListId = finalData.activeListId || DEFAULT_STATE.activeListId;
                isSelectionMode = finalData.isSelectionMode || DEFAULT_STATE.isSelectionMode;
                isSectionSelectionEnabled = finalData.isSectionSelectionEnabled || DEFAULT_STATE.isSectionSelectionEnabled;
                exportScopeId = finalData.exportScopeId || 'all'; 

                const activeList = lists.find(l => l.id === activeListId) || lists[0];
                if (activeList && activeList.folders && activeList.folders.length > 0) {
                    selectedFolderId = activeList.folders[0].id;
                }
                resolve();
            });
        });
    }
};

let saveTimeout;
function saveState() {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        AsyncStorage.save();
    }, 1000); 
}

function getActiveItems() {
    const list = lists.find(l => l.id === activeListId);
    return list ? list.items : [];
}

function setActiveItems(newItems) {
    const listIndex = lists.findIndex(l => l.id === activeListId);
    if (listIndex > -1) {
        
        const seen = new Set();
        lists[listIndex].items = newItems.filter(item => {
            if (seen.has(item.uniqueId)) return false;
            seen.add(item.uniqueId);
            return true;
        });
        saveState();
    }
}

function getPreviewText(htmlContent) {
    if (!htmlContent) return "(No text content)";
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    tempDiv.querySelectorAll('button').forEach(b => b.remove());
    let clean = tempDiv.textContent || tempDiv.innerText || "";
    clean = clean.replace(/[\n\r\s]+/g, ' ').trim();
    if (!clean) return "(Visual Content / Code)"; 
    return clean.length > 120 ? clean.substring(0, 120) + "..." : clean;
}

function getStableMessageId(msgElement) {
    if (msgElement.dataset.exStableId) {
        return msgElement.dataset.exStableId;
    }

    const contentNode = msgElement.querySelector('.markdown') || msgElement;
    const clone = contentNode.cloneNode(true);
    
    
    clone.querySelectorAll('.msg-checkbox, .custom-share-page-toolbar, button, .section-number-badge').forEach(el => el.remove());

    const allElements = clone.querySelectorAll('*');
    allElements.forEach(el => {
        el.removeAttribute('class');
        el.removeAttribute('style');
        el.removeAttribute('data-id'); 
    });
    clone.removeAttribute('class');
    clone.removeAttribute('style');

    const cleanHtml = clone.outerHTML;
    let hash = 0;
    const str = cleanHtml; 
    
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    
    const finalId = "msg_" + Math.abs(hash);
    msgElement.dataset.exStableId = finalId;
    return finalId;
}
const SECTION_SELECTORS = 'p, pre, ul, ol, table, h1, h2, h3, h4, h5, h6, blockquote, .katex-display, .math-display, div.overflow-x-auto, .group\\/imagegen-image, img';

function cleanHtmlForPreview(rawHtml) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rawHtml;

    // 1. Remove specific selection classes from ALL elements (descendants)
    const classesToRemove = ['section-selected-active', 'section-hover-active', 'generated-image-wrapper-active'];
    classesToRemove.forEach(cls => {
        // Remove from descendants
        tempDiv.querySelectorAll(`.${cls}`).forEach(el => el.classList.remove(cls));
        // Remove from the root children (in case the wrapper itself is selected)
        Array.from(tempDiv.children).forEach(el => el.classList.remove(cls));
    });

    // 2. Remove UI artifacts (badges, checkboxes, buttons)
    tempDiv.querySelectorAll('.section-number-badge, .msg-checkbox, .custom-export-buttons, .sr-only').forEach(el => el.remove());

    // 3. Force 100% width on tables and images for preview
    tempDiv.querySelectorAll('table, img, .math-block').forEach(el => {
        el.style.maxWidth = "100%";
        el.style.width = "100%"; 
        el.style.boxSizing = "border-box";
        el.style.margin = "10px 0";
    });

    // 4. Handle Table Wrappers
    tempDiv.querySelectorAll('.table-export-wrapper').forEach(el => {
        el.style.width = "100%";
        el.style.overflowX = "auto";
        el.style.display = "block";
    });

    return tempDiv.innerHTML;
}

function createSidebar() {
    let sidebar = document.getElementById('export-sidebar');
    
    if (!sidebar) {
        if (!chrome.runtime?.id) return;
        sidebar = document.createElement('div');
        sidebar.id = 'export-sidebar';
        sidebar.innerHTML = `
            <div class="list-manager-header">
                <div class="lm-title">Active Response List</div>
                <div class="lm-controls">
                    <div class="custom-select-wrapper" id="list-wrapper">
                        <input type="text" id="active-list-input" value="Default List" readonly autocomplete="off">
                        <span class="chevron">▼</span>
                        <div class="dropdown-menu" id="list-options"></div>
                    </div>
                    <button id="btn-toggle-preview" class="lm-btn" title="Toggle Preview" style="display: none;"><img src="${chrome.runtime.getURL(PATH_PREVIEW_ON)}" /></button>
                    <button id="btn-create-list" class="lm-btn add" title="Create New List"><img src="${chrome.runtime.getURL(PATH_ADD_LIST_ICON)}" /></button>
                    <button id="btn-rename-list" class="lm-btn" title="Rename List"><img src="${chrome.runtime.getURL(PATH_EDIT_ICON)}" /></button>
                    <button id="btn-delete-list" class="lm-btn del" title="Delete Current List"><img src="${chrome.runtime.getURL(PATH_DELETE_ICON)}" /></button>
                </div>
            </div>
            <div class="queue-header">
                <div id="queue-label" class="qh-label">Items</div>
                <div class="qh-actions">
                    <button id="btn-create-folder" class="clear-btn" title="Add New Folder to current list" style="padding:4px;"><img src="${chrome.runtime.getURL(PATH_NEW_FOLDER_ICON)}" style="width:16px; height:16px; opacity: 0.7;" /></button>
                    <button id="sb-btn-reverse" class="clear-btn" title="Reverse Order" style="padding:4px;"><img src="${chrome.runtime.getURL(PATH_SWAP_ICON)}" style="width:16px; height:16px; opacity: 0.7;" /></button>
                    <button id="sb-btn-add-all" class="clear-btn" title="Toggle: Add/Remove all visible responses" style="padding:4px;"><img src="${chrome.runtime.getURL(PATH_ADD_ALL_ICON)}" style="width:16px; height:16px; opacity: 0.7;" /></button>
                    <button id="sb-btn-clear" class="clear-btn" title="Clear All Items in List" style="padding:4px;"><img src="${chrome.runtime.getURL(PATH_DELETE_ICON)}" style="width:16px; height:16px; opacity: 0.7;" /></button>
                </div>
            </div>
            <div class="sidebar-content" id="sidebar-queue"><div style="text-align:center; padding:20px; opacity:0.5; font-style:italic;">Select responses from the chat</div></div>
            
            <div class="sidebar-footer">
                <div class="export-controls">
                    <span class="footer-text">Export</span>
                    <div class="custom-select-wrapper" id="export-wrapper">
                        <input type="text" id="export-scope-input" readonly autocomplete="off" data-value="all">
                        <span class="chevron">▼</span>
                        <div class="dropdown-menu" id="export-options"></div>
                    </div>
                    <span class="footer-text">to:</span>
                </div>
                <div class="footer-actions">
                    <button id="sb-btn-word" class="export-btn-word" title="Export Selected to Docx"><div class="anim-target" style="width:24px; height:24px;">${WORD_ICON_SVG}</div></button>
                    <button id="sb-btn-pdf" class="export-btn-pdf" title="Export Selected to PDF"><div class="anim-target" style="width:24px; height:24px;">${PDF_ICON_SVG}</div></button>
                </div>
            </div>
        `;
        document.body.appendChild(sidebar);
        
        document.getElementById('btn-create-folder').addEventListener('click', () => {
            if(isPreviewMode) return;
            const activeList = lists.find(l => l.id === activeListId);
            ensureListStructure(activeList);
            const newFolderId = "folder_" + Date.now();
            activeList.folders.push({ id: newFolderId, name: "New Folder" });
            expandedGroups.add(newFolderId);
            selectedFolderId = newFolderId; 
            saveState(); updateQueueUI();
            setTimeout(() => { const fr = document.querySelector(`[data-folder-id="${newFolderId}"]`); if(fr) fr.querySelector('.edit-group-btn')?.click(); }, 50);
        });

        document.getElementById('btn-create-list').addEventListener('click', () => {
            const newId = Date.now().toString();
            const defaultFolderId = "folder_" + Date.now();
            lists.push({ id: newId, name: 'New List', items: [], folders: [{ id: defaultFolderId, name: "Default Folder" }] });
            activeListId = newId; selectedFolderId = defaultFolderId; expandedGroups.add(defaultFolderId);
            if(isPreviewMode) isPreviewMode = false; 
            saveState(); updateQueueUI(); startEditingList();
        });

        document.getElementById('btn-rename-list').addEventListener('click', startEditingList);
        
        document.getElementById('btn-delete-list').addEventListener('click', () => {
            const activeList = lists.find(l => l.id === activeListId);
            if (lists.length <= 1) { 
                if (confirm(`Reset '${activeList.name}' to empty?`)) { 
                    const defId = "folder_" + Date.now(); 
                    lists = [{ id: 'default', name: 'Default List', items: [], folders: [{id: defId, name: "Default Folder"}] }]; 
                    activeListId = 'default'; expandedGroups.add(defId); 
                    saveState(); updateQueueUI(); scanMessagesForCheckboxes(); 
                } return; 
            }
            if (confirm(`Delete list '${activeList.name}'?`)) { 
                const idx = lists.findIndex(l => l.id === activeListId); 
                lists.splice(idx, 1); activeListId = lists[0].id; 
                saveState(); updateQueueUI(); scanMessagesForCheckboxes(); 
            }
        });
        
        document.getElementById('sb-btn-word').addEventListener('click', (e) => handleSidebarExport(e.currentTarget, 'word'));
        document.getElementById('sb-btn-pdf').addEventListener('click', (e) => handleSidebarExport(e.currentTarget, 'pdf'));
        
        // --- FIX: Correctly clear the Set instead of reassigning it ---
        document.getElementById('sb-btn-clear').addEventListener('click', () => { 
            if(isPreviewMode) return;
            if(confirm('Are you sure you want to clear all items and folders in this list?')) {
                const activeList = lists.find(l => l.id === activeListId);
                const defId = "folder_" + Date.now();
                activeList.items = [];
                activeList.folders = [{ id: defId, name: "Default Folder" }];
                
                selectedFolderId = defId;
                
                // ERROR FIX: Use .clear() and .add() because expandedGroups is const
                expandedGroups.clear();
                expandedGroups.add(defId);
                
                saveState();
                updateQueueUI();
                scanMessagesForCheckboxes();
            }
        });

        document.getElementById('sb-btn-add-all').addEventListener('click', handleSelectAllToggle);
        
        document.getElementById('sb-btn-reverse').addEventListener('click', () => {
            if(isPreviewMode) return;
            const activeList = lists.find(l => l.id === activeListId);
            if (!activeList || !activeList.items.length) return;
            let targetFolderId = selectedFolderId || (activeList.folders.length > 0 ? activeList.folders[0].id : null);
            if (!targetFolderId) return;
            const indices = []; const folderItems = [];
            activeList.items.forEach((item, index) => { if (item.folderId === targetFolderId) { indices.push(index); folderItems.push(item); } });
            if (folderItems.length > 1) { folderItems.reverse(); indices.forEach((originalIndex, i) => { activeList.items[originalIndex] = folderItems[i]; }); setActiveItems(activeList.items); updateQueueUI(); }
        });

        const inputEl = document.getElementById('active-list-input');
        const optionsEl = document.getElementById('list-options');
        inputEl.addEventListener('click', () => { if (inputEl.hasAttribute('readonly')) optionsEl.classList.toggle('show'); });
        inputEl.addEventListener('blur', () => { inputEl.setAttribute('readonly', 'true'); const activeList = lists.find(l => l.id === activeListId); if (inputEl.value.trim() !== "") { activeList.name = inputEl.value.trim(); } else { inputEl.value = activeList.name; } saveState(); updateQueueUI(); });
        inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); inputEl.blur(); } });
        
        const exInput = document.getElementById('export-scope-input');
        const exOptions = document.getElementById('export-options');
        exInput.addEventListener('click', (e) => { e.stopPropagation(); exOptions.classList.toggle('show'); });
        
        document.addEventListener('click', (e) => { 
            if (!e.target.closest('#list-wrapper')) optionsEl.classList.remove('show'); 
            if (!e.target.closest('#export-wrapper')) exOptions.classList.remove('show'); 
        });

        initDragAndDrop();
    }

    const previewBtn = document.getElementById('btn-toggle-preview');
    if (globalSettings.enablePreview) {
        previewBtn.style.display = 'flex';
    } else {
        previewBtn.style.display = 'none';
    }

    previewBtn.onclick = (e) => {
        e.stopPropagation();
        if (globalSettings.previewInTab) {
            openPreviewInNewTab();
        } else {
            isPreviewMode = !isPreviewMode;
            const icon = previewBtn.querySelector('img');
            if (icon) {
                icon.src = chrome.runtime.getURL(isPreviewMode ? PATH_PREVIEW_OFF : PATH_PREVIEW_ON);
            }
            updateQueueUI();
        }
    };

    updateQueueUI(); 
}

let lastHoveredTarget = null;
let hoverThrottle = null; 

function initDelegatedEvents() {
    if (document.body.dataset.delegatedEventsAttached) return;
    document.body.dataset.delegatedEventsAttached = "true";

    
    document.addEventListener('click', async (e) => {
        if (!isSectionSelectionEnabled || !isSelectionMode) return;
        if (e.target.closest('button, a, .msg-checkbox, .custom-select-wrapper, #export-sidebar, #global-export-bar')) return;

        const target = getValidSectionTarget(e.target);
        if (!target) return;

        e.preventDefault(); 
        e.stopPropagation();

        const msgBlock = target.closest('div[data-message-author-role="assistant"]');
        if (!msgBlock) return;
        
        
        const isSelected = target.classList.contains('section-selected-active');
        if(isSelected) target.classList.remove('section-selected-active');
        else target.classList.add('section-selected-active');

        const msgId = getStableMessageId(msgBlock);
        await toggleSectionSelection(msgId, target);
        
        updateSectionVisuals(); 
    }, true);
    document.addEventListener('mouseover', (e) => {
        if (!isSectionSelectionEnabled || !isSelectionMode) return;
        if (hoverThrottle) return; 

        hoverThrottle = requestAnimationFrame(() => {
            handleHover(e);
            hoverThrottle = null;
        });
    });

    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget && lastHoveredTarget) {
            removeHoverStyles(lastHoveredTarget);
            lastHoveredTarget = null;
        }
    });
}

function handleHover(e) {
    
    if (e.target.id === 'export-sidebar' || e.target.closest('#export-sidebar, #global-export-bar')) return;

    const target = getValidSectionTarget(e.target);

    if (target && target !== lastHoveredTarget) {
        if (lastHoveredTarget) removeHoverStyles(lastHoveredTarget);
        addHoverStyles(target);
        lastHoveredTarget = target;
    } 
    else if (!target && lastHoveredTarget) {
        removeHoverStyles(lastHoveredTarget);
        lastHoveredTarget = null;
    }
}

function getValidSectionTarget(node) {
    
    let target = node.closest(SECTION_SELECTORS);
    if (!target) return null;

    
    const msgBlock = target.closest('div[data-message-author-role="assistant"]');
    if (!msgBlock) return null;

    
    let parent = target.parentElement;
    while (parent && msgBlock.contains(parent)) {
        if (parent.matches(SECTION_SELECTORS)) {
            target = parent;
        }
        parent = parent.parentElement;
    }
    return target;
}

function addHoverStyles(el) {
    if (el.classList.contains('group/imagegen-image')) el.classList.add('generated-image-wrapper-active');
    else el.classList.add('section-hover-active');
}

function removeHoverStyles(el) {
    if(!el) return;
    el.classList.remove('section-hover-active', 'generated-image-wrapper-active');
}

function handleHover(e) {
    
    if (e.target.id === 'export-sidebar' || e.target.closest('#export-sidebar, #global-export-bar')) return;

    const target = getValidSectionTarget(e.target);

    if (target && target !== lastHoveredTarget) {
        if (lastHoveredTarget) removeHoverStyles(lastHoveredTarget);
        addHoverStyles(target);
        lastHoveredTarget = target;
    } 
    else if (!target && lastHoveredTarget) {
        removeHoverStyles(lastHoveredTarget);
        lastHoveredTarget = null;
    }
}

function getValidSectionTarget(node) {
    
    let target = node.closest(SECTION_SELECTORS);
    if (!target) return null;

    
    const msgBlock = target.closest('div[data-message-author-role="assistant"]');
    if (!msgBlock) return null;

    
    let parent = target.parentElement;
    while (parent && msgBlock.contains(parent)) {
        if (parent.matches(SECTION_SELECTORS)) {
            target = parent;
        }
        parent = parent.parentElement;
    }
    return target;
}

function addHoverStyles(el) {
    if (el.classList.contains('group/imagegen-image')) el.classList.add('generated-image-wrapper-active');
    else el.classList.add('section-hover-active');
}

function removeHoverStyles(el) {
    if(!el) return;
    el.classList.remove('section-hover-active', 'generated-image-wrapper-active');
}

function updateQueueUI() {
    const queueContainer = document.getElementById('sidebar-queue');
    if (!queueContainer || !chrome.runtime?.id) return;

    let activeList = lists.find(l => l.id === activeListId);
    
    // Ensure active list exists
    if (!activeList) {
        if (lists.length > 0) {
            activeList = lists[0];
            activeListId = activeList.id;
        } else {
             const defFolderId = "folder_" + Date.now();
             activeList = { 
                id: 'default', 
                name: 'Default List', 
                items: [], 
                folders: [{ id: defFolderId, name: "Default Folder" }] 
            };
            lists = [activeList];
            activeListId = 'default';
        }
        saveState();
    }

    ensureListStructure(activeList);
    
    const optionsEl = document.getElementById('list-options');
    const queueLabel = document.getElementById('queue-label');
    const inputEl = document.getElementById('active-list-input');
    const exInput = document.getElementById('export-scope-input');
    const exOptions = document.getElementById('export-options');
    const previewBtn = document.getElementById('btn-toggle-preview');

    // Update List Dropdown
    if(optionsEl) {
        optionsEl.innerHTML = '';
        lists.forEach(list => {
            const item = document.createElement('div');
            item.className = 'dropdown-item';
            item.textContent = list.name;
            if(list.id === activeListId) { item.style.fontWeight='bold'; item.style.backgroundColor='var(--ex-item-bg)'; }
            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                if(list.id !== activeListId) { 
                    activeListId = list.id; 
                    selectedFolderId = null; 
                    exportScopeId = 'all';
                    isPreviewMode = false;
                    if(previewBtn) previewBtn.querySelector('img').src = chrome.runtime.getURL(PATH_PREVIEW_ON);
                    saveState(); 
                    updateQueueUI(); 
                    scanMessagesForCheckboxes(); 
                }
                optionsEl.classList.remove('show');
            });
            optionsEl.appendChild(item);
        });
    }

    const allItems = activeList.items || [];
    if(queueLabel) queueLabel.innerText = `${allItems.length} Selections`;
    if (inputEl && inputEl.hasAttribute('readonly')) inputEl.value = activeList.name;

    queueContainer.innerHTML = '';

    if (isPreviewMode) {
        queueContainer.style.padding = "10px";
        queueContainer.style.background = "var(--ex-sidebar-bg)";
        
        if (allItems.length === 0) {
            queueContainer.innerHTML = `<div style="text-align:center; padding:20px; opacity:0.5; font-style:italic;">No items to preview</div>`;
        } else {
            let previewHtml = "";
            activeList.folders.forEach((folder, folderIndex) => {
                const folderItems = allItems.filter(i => i.folderId === folder.id);
                if (folderItems.length > 0) {
                    previewHtml += `<div style="font-weight:700; font-size:14px; margin: 15px 0 8px 0; border-bottom:1px solid var(--ex-border-color); padding-bottom:4px; width:100%; box-sizing:border-box;">${folder.name}</div>`;
                    
                    folderItems.forEach((item, itemIndex) => {
                        const cleanHtml = cleanHtmlForPreview(item.html);
                        const numberLabel = `${folderIndex + 1}.${itemIndex + 1}`;
                        
                        previewHtml += `
                            <div style="display:flex; gap:8px; margin-bottom:15px; width:100%;">
                                <div style="font-size:11px; font-weight:bold; opacity:0.6; min-width:20px; text-align:right;">${numberLabel}</div>
                                <div style="flex:1; width:100%; min-width:0; box-sizing:border-box; font-size:12px;">${cleanHtml}</div>
                            </div>`;
                    });
                }
            });
            queueContainer.innerHTML = previewHtml;
            
            // Inject CSS to force full width and handle overflow in sidebar
            const styleFix = document.createElement('style');
            styleFix.textContent = `
                #sidebar-queue table, #sidebar-queue img, #sidebar-queue .math-block { 
                    max-width: 100% !important; 
                    width: 100% !important; 
                    box-sizing: border-box !important;
                    margin: 5px 0 !important;
                }
                #sidebar-queue .table-export-wrapper {
                    overflow-x: auto !important;
                    width: 100% !important;
                    display: block !important;
                }
                #sidebar-queue .section-selected-active { outline: none !important; }
                #sidebar-queue p { margin-bottom: 8px !important; }
            `;
            queueContainer.appendChild(styleFix);
        }
        return; 
    }
    // Standard List Mode Styles
    queueContainer.style.padding = "15px";

    const folders = activeList.folders || [];

    if (folders.length === 0 && allItems.length === 0) {
        queueContainer.innerHTML = `<div style="text-align:center; padding:20px; opacity:0.5; font-style:italic;">Select responses from the chat</div>`;
    } else {
        folders.forEach((folder, folderIndex) => {
            const folderItems = allItems.filter(i => i.folderId === folder.id);
            const isExpanded = expandedGroups.has(folder.id);
            const isActive = (selectedFolderId === folder.id);
            
            const row = document.createElement('div');
            row.className = `q-group-row ${isActive ? 'active-folder' : ''}`;
            row.dataset.folderId = folder.id; 

            row.innerHTML = `
                <div class="q-group-header" title="Click to select, Dbl-Click to toggle">
                    <div class="handle">${folderIndex + 1}</div>
                    <div class="group-info">
                        <div class="group-name-wrapper" onmousedown="event.stopPropagation()">
                            <input type="text" class="group-name-input" value="${folder.name}" readonly spellcheck="false">
                        </div>
                        <span class="group-subtitle">${folderItems.length} items</span>
                    </div>
                    <div class="action-cluster">
                        <div class="sidebar-action-btn edit-group-btn" title="Rename"><img src="${chrome.runtime.getURL(PATH_EDIT_ICON)}" /></div>
                        <div class="sidebar-action-btn toggle-btn chev-toggle" title="Toggle"><img src="${chrome.runtime.getURL(isExpanded ? PATH_CONTRACT_ICON : PATH_EXPAND_ICON)}" /></div>
                        <div class="sidebar-action-btn del-btn" title="Remove Folder"><img src="${chrome.runtime.getURL(PATH_DELETE_ICON)}" /></div>
                    </div>
                </div>
                <div class="q-group-children ${isExpanded ? 'expanded' : ''}"></div>
            `;

            row.querySelector('.q-group-header').addEventListener('click', () => { selectedFolderId = folder.id; updateQueueUI(); });
            
            const toggleExpand = (e) => { 
                e.stopPropagation(); 
                if (expandedGroups.has(folder.id)) expandedGroups.delete(folder.id); else expandedGroups.add(folder.id); 
                updateQueueUI(); 
            };
            row.querySelector('.chev-toggle').addEventListener('click', toggleExpand);
            row.querySelector('.q-group-header').addEventListener('dblclick', toggleExpand);
            
            const nameInput = row.querySelector('.group-name-input');
            row.querySelector('.edit-group-btn').addEventListener('click', (e) => { e.stopPropagation(); nameInput.removeAttribute('readonly'); nameInput.focus(); nameInput.select(); });
            nameInput.addEventListener('blur', () => { nameInput.setAttribute('readonly', 'true'); if (nameInput.value.trim()) { folder.name = nameInput.value.trim(); saveState(); } else { nameInput.value = folder.name; } });
            nameInput.addEventListener('keydown', (e) => { if(e.key==='Enter') nameInput.blur(); });

            row.querySelector('.del-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                if(!confirm('Delete folder and all contents?')) return;
                activeList.items = activeList.items.filter(i => i.folderId !== folder.id);
                activeList.folders = activeList.folders.filter(f => f.id !== folder.id);
                saveState(); updateQueueUI(); scanMessagesForCheckboxes();
            });

            const childrenContainer = row.querySelector('.q-group-children');
            if (childrenContainer) {
                folderItems.forEach((item, itemIndex) => {
                    const childRow = document.createElement('div');
                    childRow.className = 'q-child-row';
                    childRow.setAttribute('draggable', 'true');
                    childRow.dataset.id = item.uniqueId;
                    
                    childRow.innerHTML = `
                        <div class="child-handle">${folderIndex + 1}.${itemIndex + 1}</div>
                        <div class="child-box">${item.previewText}</div>
                        <div class="sidebar-action-btn del-btn del-btn-small" title="Remove Section">${SVG_CLOSE}</div>
                    `;
                    
                    childRow.querySelector('.del-btn').addEventListener('click', (e) => {
                        e.stopPropagation();
                        removeItemById(item.uniqueId);
                    });
                    
                    childrenContainer.appendChild(childRow);
                });
            }
            queueContainer.appendChild(row);
        });
    }

    // Export Options Dropdown
    if(exOptions && exInput) {
        let currentScope = exportScopeId; 
        const isValidScope = (currentScope === 'all') || activeList.folders.some(f => f.id === currentScope);
        
        if (!isValidScope) {
            currentScope = 'all';
            exportScopeId = 'all';
            saveState();
        }

        exOptions.innerHTML = '';
        const addOpt = (val, text) => {
            const opt = document.createElement('div');
            opt.className = 'dropdown-item';
            opt.textContent = text;
            if(val === currentScope) { opt.style.fontWeight='bold'; opt.style.backgroundColor='var(--ex-item-bg)'; }
            
            opt.addEventListener('mousedown', (e) => {
                e.preventDefault(); 
                exInput.dataset.value = val; 
                exInput.value = text;
                exOptions.classList.remove('show'); 
                
                exportScopeId = val;
                saveState();
            });
            exOptions.appendChild(opt);
        };
        
        addOpt('all', `${activeList.name} (All)`);
        activeList.folders.forEach(f => {
            const c = activeList.items.filter(i => i.folderId === f.id).length;
            addOpt(f.id, `${f.name} (${c})`);
        });

        const activeOptText = (currentScope === 'all') ? 
                              `${activeList.name} (All)` : 
                              `${activeList.folders.find(f=>f.id===currentScope)?.name||'Folder'} (${activeList.items.filter(i=>i.folderId===currentScope).length})`;
        
        exInput.value = activeOptText;
        exInput.dataset.value = currentScope;
    }
    
    bindDragEvents();
}

let selectedFolderId = null; 

function ensureListStructure(list) {
    if (!list.folders) list.folders = [];
    if (!list.items) list.items = [];

    if (list.folders.length === 0) {
        const defId = "folder_" + Date.now();
        list.folders.push({ id: defId, name: "Default Folder" });
        selectedFolderId = defId; 
    }

    let targetId = selectedFolderId;
    if (!targetId || !list.folders.find(f => f.id === targetId)) {
        targetId = list.folders[list.folders.length - 1].id;
        selectedFolderId = targetId;
    }

    list.items.forEach(item => {
        if (!item.folderId || !list.folders.find(f => f.id === item.folderId)) {
            item.folderId = targetId;
        }
    });

    return list;
}

function initDragAndDrop() {
    const queue = document.getElementById('sidebar-queue');
    if(!queue) return;

    // Clone to reset listeners
    const newQueue = queue.cloneNode(true);
    queue.parentNode.replaceChild(newQueue, queue);
    const safeQueue = document.getElementById('sidebar-queue');

    let isDragging = false;
    let dragFrame = null;

    safeQueue.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        
        // Performance Fix: Throttle drag calculations with requestAnimationFrame
        if (dragFrame) return;

        dragFrame = requestAnimationFrame(() => {
            const draggingGroup = document.querySelector('.q-group-row.dragging');
            const draggingChild = document.querySelector('.q-child-row.dragging');

            if (draggingGroup) {
                const afterElement = getDragAfterElement(safeQueue, e.clientY, '.q-group-row');
                if (afterElement) {
                    if (afterElement !== draggingGroup.nextSibling) safeQueue.insertBefore(draggingGroup, afterElement);
                } else {
                    if (draggingGroup !== safeQueue.lastChild) safeQueue.appendChild(draggingGroup);
                }
            }

            else if (draggingChild) {
                const folderRow = e.target.closest('.q-group-row');
                if (folderRow) {
                    const childrenContainer = folderRow.querySelector('.q-group-children');
                    if (childrenContainer) {
                        if (!childrenContainer.classList.contains('expanded')) {
                            childrenContainer.classList.add('expanded');
                            const toggleBtn = folderRow.querySelector('.chev-toggle img');
                            if(toggleBtn) toggleBtn.src = chrome.runtime.getURL(PATH_CONTRACT_ICON); 
                        }

                        const afterElement = getDragAfterElement(childrenContainer, e.clientY, '.q-child-row');
                        if (afterElement) {
                            if (afterElement !== draggingChild.nextSibling) childrenContainer.insertBefore(draggingChild, afterElement);
                        } else {
                            if (draggingChild !== childrenContainer.lastChild) childrenContainer.appendChild(draggingChild);
                        }
                    }
                }
            }
            dragFrame = null;
        });
    });
}

function syncOrderFromDOM() {
    const container = document.getElementById('sidebar-queue');
    if (!container) return;

    const activeList = lists.find(l => l.id === activeListId);
    if (!activeList) return;

    const newFolders = [];
    let newItems = [];
    let visibleFolderIndex = 0; 

    Array.from(container.children).forEach(child => {
        if (child.classList.contains('q-group-row')) {
            visibleFolderIndex++; 
            
            const folderHandle = child.querySelector('.handle');
            if (folderHandle) folderHandle.innerText = visibleFolderIndex;

            const folderId = child.dataset.folderId;
            let folderObj = activeList.folders.find(f => f.id === folderId);
            
            if (!folderObj) {
                const nameInput = child.querySelector('.group-name-input');
                folderObj = { id: folderId, name: nameInput ? nameInput.value : "Unknown Folder" };
            }
            newFolders.push(folderObj);

            const childrenContainer = child.querySelector('.q-group-children');
            if (childrenContainer) {
                const childRows = Array.from(childrenContainer.querySelectorAll('.q-child-row'));
                
                const countLabel = child.querySelector('.group-subtitle');
                if (countLabel) countLabel.innerText = `${childRows.length} items`;
                
                childRows.forEach((row, childIndex) => {
                    const itemHandle = row.querySelector('.child-handle');
                    if (itemHandle) itemHandle.innerText = `${visibleFolderIndex}.${childIndex + 1}`;
                    
                    const itemId = row.dataset.id;
                    const item = activeList.items.find(i => i.uniqueId === itemId);
                    if (item) {
                        item.folderId = folderId; 
                        newItems.push(item);     
                    }
                });
            }
        }
    });

    // Reattach any orphaned items that weren't in the DOM (safeguard)
    const trackedIds = new Set(newItems.map(i => i.uniqueId));
    const orphans = activeList.items.filter(i => !trackedIds.has(i.uniqueId));
    
    activeList.folders = newFolders;
    activeList.items = [...newItems, ...orphans];
    
    saveState();
    
    const queueLabel = document.getElementById('queue-label');
    if(queueLabel) queueLabel.innerText = `${activeList.items.length} Selections`;

    scanMessagesForCheckboxes();

    // --- FIX: IMMEDIATELY UPDATE EXPORT DROPDOWN UI ---
    // This ensures the dropdown options match the new folder order instantly
    const exInput = document.getElementById('export-scope-input');
    const exOptions = document.getElementById('export-options');
    
    if(exOptions && exInput && activeList.folders.length > 0) {
        let currentScope = exInput.dataset.value;
        const isValidScope = (currentScope === 'all') || activeList.folders.some(f => f.id === currentScope);
        
        if (!isValidScope) {
            currentScope = 'all';
            exportScopeId = 'all';
            exInput.dataset.value = 'all';
        }

        exOptions.innerHTML = '';
        const addOpt = (val, text) => {
            const opt = document.createElement('div');
            opt.className = 'dropdown-item';
            opt.textContent = text;
            if(val === currentScope) { opt.style.fontWeight='bold'; opt.style.backgroundColor='var(--ex-item-bg)'; }
            opt.addEventListener('mousedown', (e) => {
                e.preventDefault(); 
                exInput.dataset.value = val; 
                exInput.value = text;
                exOptions.classList.remove('show'); 
                exportScopeId = val;
                saveState();
            });
            exOptions.appendChild(opt);
        };
        
        addOpt('all', `${activeList.name} (All)`);
        activeList.folders.forEach(f => {
            const c = activeList.items.filter(i => i.folderId === f.id).length;
            addOpt(f.id, `${f.name} (${c})`);
        });

        const activeOptText = (currentScope === 'all') ? 
                              `${activeList.name} (All)` : 
                              `${activeList.folders.find(f=>f.id===currentScope)?.name||'Folder'} (${activeList.items.filter(i=>i.folderId===currentScope).length})`;
        
        exInput.value = activeOptText;
    }
}

function bindDragEvents() {
    const queue = document.getElementById('sidebar-queue');
    if(!queue) return;

    queue.querySelectorAll('.q-group-row').forEach(el => {
        const header = el.querySelector('.q-group-header');
        header.addEventListener('mousedown', () => { el.setAttribute('draggable', 'true'); });
        el.addEventListener('mouseup', () => { el.setAttribute('draggable', 'false'); });
        el.addEventListener('dragstart', (e) => { 
            e.stopPropagation(); 
            e.dataTransfer.effectAllowed = 'move'; 
            el.classList.add('dragging'); 
        });
        el.addEventListener('dragend', () => { 
            el.classList.remove('dragging'); 
            el.setAttribute('draggable', 'false'); 
            syncOrderFromDOM(); 
        });
    });

    queue.querySelectorAll('.q-child-row').forEach(el => {
        el.addEventListener('dragstart', (e) => { 
            e.stopPropagation(); 
            e.dataTransfer.effectAllowed = 'move'; 
            el.classList.add('dragging'); 
        });
        el.addEventListener('dragend', () => { 
            el.classList.remove('dragging'); 
            syncOrderFromDOM(); 
        });
    });
}

function startEditingList() {
    const inputEl = document.getElementById('active-list-input');
    const optionsEl = document.getElementById('list-options');
    optionsEl.classList.remove('show');
    inputEl.removeAttribute('readonly');
    inputEl.focus();
    inputEl.select();
}

function getDragAfterElement(container, y, selector) {
    const draggableElements = [...container.querySelectorAll(`${selector}:not(.dragging)`)];
    
    let closest = { offset: Number.NEGATIVE_INFINITY, element: null };
    
    for (let i = 0; i < draggableElements.length; i++) {
        const child = draggableElements[i];
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            closest = { offset: offset, element: child };
        }
    }
    
    return closest.element;
}

function isNestedInList(node, nodeList) {
    const nodes = Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
    let parent = node.parentElement;
    while (parent) {
        if (nodes.includes(parent)) return true;
        parent = parent.parentElement;
    }
    return false;
}

async function toggleSectionSelection(parentMsgId, sectionElement) {
    const sectionId = getSectionId(parentMsgId, sectionElement);
    if (!sectionId) return;

    let currentItems = getActiveItems();
    const activeList = lists.find(l => l.id === activeListId);
    let targetFolderId = selectedFolderId || (activeList.folders[0] ? activeList.folders[0].id : null);

    const parentIndex = currentItems.findIndex(m => m.uniqueId === parentMsgId);
    const isParentSelected = parentIndex > -1;
    
    const existingIndex = currentItems.findIndex(m => m.uniqueId === sectionId);

    
    if (isParentSelected) {
        
        
        
        const turnContainer = sectionElement.closest('article') || sectionElement.closest('.agent-turn');
        const allSelectables = Array.from(turnContainer.querySelectorAll(SECTION_SELECTORS));
        
        const validSelectables = allSelectables.filter(el => 
            !isNestedInList(el, allSelectables) && 
            !el.classList.contains('sr-only') && 
            el.innerText.trim() !== "ChatGPT said:"
        );

        const newParts = [];

        
        for (const el of validSelectables) {
            const sid = getSectionId(parentMsgId, el);
            if (sid === sectionId) continue; 

            const contentData = await captureSectionContent(el);
            if (contentData) {
                newParts.push({ 
                    uniqueId: sid, 
                    previewText: contentData.preview, 
                    html: contentData.html, 
                    folderId: targetFolderId 
                });
            }
        }

        
        
        currentItems.splice(parentIndex, 1, ...newParts);

    } 
    
    else {
        if (existingIndex > -1) {
            currentItems.splice(existingIndex, 1);
        } else {
            const contentData = await captureSectionContent(sectionElement);
            if (contentData) {
                
                
                
                currentItems.push({ 
                    uniqueId: sectionId, 
                    previewText: contentData.preview, 
                    html: contentData.html,
                    folderId: targetFolderId 
                });
            }
        }
    }

    setActiveItems(currentItems);
    updateQueueUI(); 
    scanMessagesForCheckboxes(); 
}

async function captureSectionContent(element) {
    let htmlContent = "";
    let previewText = "";

    if (element.classList.contains('group/imagegen-image')) {
        const rawImg = element.querySelector('img[alt="Generated image"]') || element.querySelector('img');
        if (rawImg && rawImg.src) {
            const base64 = await urlToBase64(rawImg.src);
            if (base64) {
                htmlContent = `<img src="${base64}" style="display: block; width: 100%; max-width: 600px; height: auto; margin: 10px 0; border-radius: 8px;">`;
                previewText = "[Generated Image]";
            }
        }
    }
    else if (element.tagName.toLowerCase() === 'img') {
        const base64 = await urlToBase64(element.src);
        if (base64) {
            htmlContent = `<img src="${base64}" style="display: block; width: 100%; max-width: 600px; height: auto; margin: 10px 0;">`;
            previewText = "[Image]";
        }
    }
    else if (element.tagName.toLowerCase() === 'table' || element.classList.contains('overflow-x-auto')) {
        const clone = element.cloneNode(true);
        clone.querySelectorAll('.section-number-badge, .msg-checkbox').forEach(el => el.remove());
        
        let headerText = "";
        const headers = element.querySelectorAll('th');
        if (headers.length > 0) {
            headerText = Array.from(headers).map(h => h.innerText).join(' | ');
        } else {
            const firstRow = element.querySelector('tr');
            if (firstRow) headerText = firstRow.innerText;
        }

        headerText = headerText.replace(/[\n\r\s]+/g, ' ').trim();
        if (headerText.length > 50) headerText = headerText.substring(0, 50) + "...";
        
        previewText = headerText ? `Table: ${headerText}` : "[Table]";
        htmlContent = `<div class="table-export-wrapper" style="margin: 15px 0; width: 100%; overflow: visible; border-collapse: collapse;">${clone.outerHTML}</div>`;
    }
    else {
        const clone = element.cloneNode(true);
        clone.querySelectorAll('.section-number-badge, .msg-checkbox, button').forEach(el => el.remove());
        
        if (clone.tagName === 'UL') {
            clone.style.listStyleType = 'disc';
            clone.style.paddingLeft = '20px';
            clone.style.marginLeft = '10px';
        }
        if (clone.tagName === 'OL') {
            clone.style.listStyleType = 'decimal';
            clone.style.paddingLeft = '20px';
            clone.style.marginLeft = '10px';
        }

        if (element.classList.contains('katex-display') || element.classList.contains('math-display')) {
             htmlContent = `<div class="math-block" style="margin: 1em 0; padding: 0.5em; overflow-x: auto;">${clone.outerHTML}</div>`;
             
             let mathText = element.textContent || element.innerText || "";
             mathText = mathText.replace(/[\n\r\s]+/g, ' ').trim();
             if (mathText.length > 50) mathText = mathText.substring(0, 50) + "...";
             
             previewText = mathText ? `Math: ${mathText}` : "[Math Formula]";
        } else {
             htmlContent = clone.outerHTML;
             previewText = getPreviewText(htmlContent);
        }
    }

    if (!htmlContent) return null;
    return { html: htmlContent, preview: previewText };
}

function removeItemById(id) {
    let currentItems = getActiveItems();
    currentItems = currentItems.filter(m => m.uniqueId !== id);
    removeContentFromStore(id);
    setActiveItems(currentItems);
    updateQueueUI();
    scanMessagesForCheckboxes(); 
    if(window.visualUpdateTimeout) clearTimeout(window.visualUpdateTimeout);
    window.visualUpdateTimeout = setTimeout(scanMessagesForCheckboxes, 50);
}

function getItemNumberMap(items, folders) {
    const map = new Map();
    if (!folders || !items) return map;
    folders.forEach((folder, fIndex) => {
        const folderItems = items.filter(i => i.folderId === folder.id);
        folderItems.forEach((item, iIndex) => {
            map.set(item.uniqueId, `${fIndex + 1}.${iIndex + 1}`);
        });
    });
    return map;
}

function clearAllFromMessage(msgId) {
    let currentItems = getActiveItems();
    currentItems = currentItems.filter(m => 
        m.uniqueId !== msgId && !m.uniqueId.startsWith(msgId + '_')
    );
    removeContentFromStore(msgId);
    setActiveItems(currentItems);
    updateQueueUI();
    scanMessagesForCheckboxes();
}

function addCustomStyles() {
    if (document.getElementById('export-chat-styles')) return;
    const style = document.createElement('style');
    style.id = 'export-chat-styles';
    style.textContent = `
        main#main { transition: padding-right 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); }
        body.selection-active main#main { padding-right: 240px !important; }
        #global-export-bar { transition: left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); }
        body.selection-active #global-export-bar { left: calc(50% - 120px) !important; }
        body.selection-active .composer-parent { padding-right: 0 !important; max-width: 100% !important; }

        :root {
            --ex-sidebar-bg: #ffffff; --ex-border-color: #e5e5e5; --ex-text-color: #333333; --ex-item-bg: #f7f7f8;
            --ex-handle-bg: #000000; --ex-handle-text: #ffffff; --ex-icon-color: #000000; --ex-del-bg: #ffffff;
            --ex-del-border: #e5e5e5; --ex-bar-bg: #ffffff; --ex-bar-text: #333333; --ex-clear-bg: #f0f0f0;
            --ex-clear-hover: #e0e0e0; --ex-accent: #10a37f; --ex-active-border: #000000; 
            --ex-section-hover: rgba(0, 0, 0, 0.05); --ex-section-border: #000000; 
            --ex-scroll-thumb: rgba(0, 0, 0, 0.2); --ex-scroll-thumb-hover: rgba(0, 0, 0, 0.4);
        }
        :root.dark {
            --ex-sidebar-bg: #171717; --ex-border-color: #333333; --ex-text-color: #ececf1; --ex-item-bg: #212121;
            --ex-handle-bg: #ffffff; --ex-handle-text: #000000; --ex-icon-color: #ffffff; --ex-del-bg: #2d2d2d;
            --ex-del-border: #ffffff; --ex-bar-bg: #202123; --ex-bar-text: #ececf1; --ex-clear-bg: #2d2d2f;
            --ex-clear-hover: #3d3d3f; --ex-active-border: #ffffff; --ex-section-hover: rgba(255, 255, 255, 0.1);
            --ex-section-border: #ffffff; --ex-scroll-thumb: rgba(255, 255, 255, 0.2); --ex-scroll-thumb-hover: rgba(255, 255, 255, 0.4);
        }

        /* --- ICON FIX: Force white icons in Dark Mode --- */
        :root.dark .clear-btn img, 
        :root.dark .lm-btn img,
        html.dark .clear-btn img, 
        html.dark .lm-btn img,
        body.dark .clear-btn img, 
        body.dark .lm-btn img { 
            filter: invert(1) !important; 
            opacity: 0.9 !important; 
        }

        #export-sidebar { position: fixed; top: 70px; right: -360px; width: 340px; height: calc(100vh - 90px); background: var(--ex-sidebar-bg); border: 1px solid var(--ex-border-color); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); z-index: 100; transition: right 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); display: flex; flex-direction: column; color: var(--ex-text-color); overflow: visible; }
        #export-sidebar.visible { right: 15px; } 
        .sidebar-content { flex: 1; overflow-y: auto; padding: 15px; display: flex; flex-direction: column; gap: 10px; scrollbar-width: thin; scrollbar-color: var(--ex-scroll-thumb) transparent; overflow-x: hidden; }
        .q-group-children { display: none; flex-direction: column; gap: 4px; background: var(--ex-sidebar-bg); border-top: 1px solid var(--ex-border-color); padding: 8px; min-height: 10px; max-height: 40vh; overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--ex-scroll-thumb) transparent; }
        .q-group-children.expanded { display: flex; }
        .sidebar-content::-webkit-scrollbar, .q-group-children::-webkit-scrollbar { width: 6px; }
        .sidebar-content::-webkit-scrollbar-track, .q-group-children::-webkit-scrollbar-track { background: transparent; }
        .sidebar-content::-webkit-scrollbar-thumb, .q-group-children::-webkit-scrollbar-thumb { background-color: var(--ex-scroll-thumb); border-radius: 4px; }
        .sidebar-content::-webkit-scrollbar-thumb:hover, .q-group-children::-webkit-scrollbar-thumb:hover { background-color: var(--ex-scroll-thumb-hover); }
        .list-manager-header { padding: 15px; background-color: var(--ex-item-bg); border-bottom: 1px solid var(--ex-border-color); display: flex; flex-direction: column; gap: 10px; z-index: 20; border-radius: 12px 12px 0 0; }
        .lm-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; opacity: 0.6; }
        .lm-controls { display: flex; gap: 8px; align-items: center; }
        .custom-select-wrapper { flex: 1; position: relative; }
        #active-list-input, #export-scope-input { width: 100%; padding: 6px 25px 6px 10px; border-radius: 6px; border: 1px solid var(--ex-border-color); background: var(--ex-sidebar-bg); color: var(--ex-text-color); font-size: 14px; font-weight: 500; outline: none; cursor: pointer; transition: border-color 0.2s; text-overflow: ellipsis; }
        #active-list-input:focus, #export-scope-input:focus, #active-list-input:active, #export-scope-input:active { border-color: var(--ex-active-border); outline: none; box-shadow: none; }
        #active-list-input:not([readonly]) { cursor: text; border-color: var(--ex-active-border); box-shadow: 0 0 0 1px var(--ex-active-border); }
        .chevron { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); font-size: 10px; opacity: 0.6; pointer-events: none; }
        .dropdown-menu { position: absolute; bottom: 100%; left: 0; right: 0; background: var(--ex-sidebar-bg); border: 1px solid var(--ex-border-color); border-radius: 6px; margin-bottom: 4px; box-shadow: 0 -4px 12px rgba(0,0,0,0.15); display: none; flex-direction: column; max-height: 200px; overflow-y: auto; z-index: 999; }
        #list-options { top: 100%; bottom: auto; margin-top: 4px; margin-bottom: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .dropdown-menu.show { display: flex; }
        .dropdown-item { padding: 8px 12px; font-size: 14px; cursor: pointer; border-bottom: 1px solid var(--ex-item-bg); }
        .dropdown-item:last-child { border-bottom: none; }
        .dropdown-item:hover { background-color: var(--ex-item-bg); }
        .lm-btn { width: 32px; height: 32px; border-radius: 6px; border: 1px solid var(--ex-border-color); background: var(--ex-sidebar-bg); color: var(--ex-icon-color); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 0.2s, border-color 0.2s; }
        .lm-btn:hover { background: var(--ex-clear-hover); border-color: #bbb; }
        .lm-btn img { width: 16px; height: 16px; display: block; opacity: 0.8; }
        .queue-header { padding: 10px 15px; border-bottom: 1px solid var(--ex-border-color); display: flex; justify-content: space-between; align-items: center; background: var(--ex-sidebar-bg); }
        .qh-label { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 150px; }
        .qh-actions { display: flex; gap: 4px; }
        .sidebar-footer { padding: 20px; border-top: 1px solid var(--ex-border-color); border-radius:0 0 12px 12px;display: flex; flex-direction: row; gap: 8px; align-items: center; justify-content: space-between; background: var(--ex-sidebar-bg); }
        .export-controls { display: flex; align-items: center; gap: 8px; flex: 1; min-width: 0; }
        .footer-text { font-size: 13px; font-weight: 500; opacity: 0.9; }
        .footer-actions { display: flex; gap: 10px; flex-shrink: 0; }
        .export-btn-word, .export-btn-pdf { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 6px; border: 1px solid var(--ex-border-color); background: var(--ex-clear-bg); cursor: pointer; transition: background-color 0.2s; }
        .export-btn-word:hover, .export-btn-pdf:hover { background: var(--ex-clear-hover); }
        
        .q-group-row { display: flex; flex-direction: column; background: var(--ex-item-bg); border: 1px solid transparent; border-radius: 8px; user-select: none; overflow: hidden; flex-shrink: 0; transition: border-color 0.2s, background-color 0.2s; }
        
        .q-group-row.active-folder { border: 2px solid var(--ex-active-border); background-color: var(--ex-sidebar-bg); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .q-group-row:hover { border-color: #bbb; }
        .q-group-header { display: flex; align-items: center; gap: 10px; padding: 10px; cursor: grab; position: relative; }
        .q-group-row.dragging .q-group-header { opacity: 0.5; background: var(--ex-sidebar-bg); }
        
        .q-child-row { display: flex; align-items: center; gap: 8px; padding: 6px 8px; background: var(--ex-sidebar-bg); border: 1px solid var(--ex-border-color); border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.03); cursor: grab; flex-shrink: 0; min-height: 30px; transition: transform 0.1s, box-shadow 0.1s; }
        
        .q-child-row:hover { border-color: var(--ex-active-border); box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .q-child-row.dragging { opacity: 0.5; background: var(--ex-item-bg); border-style: dashed; }
        .handle { width: 28px; height: 28px; background: var(--ex-handle-bg); color: var(--ex-handle-text); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0; pointer-events: none; }
        .group-info { flex: 1; display: flex; flex-direction: column; pointer-events: auto; min-width: 0; }
        .group-name-wrapper { display: flex; align-items: center; gap: 6px; width: 100%; }
        .group-name-input { font-size: 13px; font-weight: 600; color: var(--ex-text-color); background: transparent; border: 1px solid transparent; padding: 2px 4px; border-radius: 4px; width: 100%; cursor: default; text-overflow: ellipsis; }
        .group-name-input:not([readonly]) { background: var(--ex-sidebar-bg); border-color: var(--ex-active-border); outline: none; cursor: text; box-shadow: 0 0 0 1px var(--ex-active-border); }
        .group-name-input[readonly] { pointer-events: none; user-select: none; }
        .action-cluster { display: flex; gap: 6px; align-items: center; margin-left: auto; }
        .sidebar-action-btn { width: 28px; height: 28px; min-width: 28px; min-height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background-color 0.2s; box-sizing: border-box; padding: 0; opacity: 1 !important; color: var(--ex-icon-color) !important; background: var(--ex-del-bg); border: 1px solid var(--ex-del-border); }
        .sidebar-action-btn:hover { background: var(--ex-clear-hover); border-color: #bbb; }
        .del-btn:hover { background: rgba(239, 68, 70, 0.1); border-color: #ef4146; color: #ef4146 !important; }
        .del-btn:hover svg { stroke: #ef4146; filter: none !important; }
        .sidebar-action-btn > * { width: 16px !important; height: 16px !important; display: block; pointer-events: none; }
        :root:not(.dark) .sidebar-action-btn > * { filter: none; } :root.dark .sidebar-action-btn > * { filter: invert(1); } :root.dark .sidebar-action-btn svg { filter: none; } 
        .group-subtitle { font-size: 11px; opacity: 0.7; margin-top: 2px; padding-left: 4px; pointer-events: none; }
        .child-box { flex: 1; font-size: 11px; white-space: nowrap !important; overflow: hidden; text-overflow: ellipsis; line-height: 1.2; }
        .child-handle { font-size: 10px; font-weight: bold; opacity: 0.5; min-width: 24px; text-align: center; }
        .del-btn-small { width: 20px; height: 20px; min-width: 20px; min-height: 20px; border: none; background: transparent; opacity: 0.6; }
        .del-btn-small:hover { background: rgba(239, 68, 70, 0.1); color: #ef4146; opacity: 1; }
        .clear-btn { background-color: var(--ex-clear-bg); border: 1px solid var(--ex-border-color); transition: background-color 0.2s; border-radius: 6px; cursor: pointer; }
        .clear-btn:hover { background-color: var(--ex-clear-hover); }
        .msg-checkbox { position: absolute; left: -60px; top: 10px; z-index: 50; cursor: pointer; width: 24px; height: 24px; display: none; color: var(--ex-icon-color); transition: transform 0.1s; }
        body.selection-active .msg-checkbox { display: block; }
        .msg-checkbox:hover { transform: scale(1.1); }
        .msg-checkbox svg { width: 100%; height: 100%; pointer-events: none; }
        body.selection-active .msg-checkbox.selected-number { background: var(--ex-handle-bg); color: var(--ex-handle-text); border-radius: 50%; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 12px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); line-height: 1; padding: 0; }
        .msg-checkbox.selected-number { display: none; }
        body.selection-active div[data-message-author-role="assistant"] { cursor: pointer; transition: background 0.2s; border-radius: 8px; padding: 4px; }
        body.selection-active div[data-message-author-role="assistant"]:hover { background-color: rgba(0,0,0,0.04); }
        :root.dark body.selection-active div[data-message-author-role="assistant"]:hover { background-color: rgba(255,255,255,0.05); }
        body.selection-active .section-hover-active, body.selection-active .section-selected-active { position: relative !important; box-sizing: border-box !important; }
        body.selection-active :is(p, pre, ul, ol, li, h1, h2, h3, h4, h5, h6, blockquote, .katex-display, .katex-block, .math-display, div.overflow-x-auto).section-hover-active,
        body.selection-active :is(p, pre, ul, ol, li, h1, h2, h3, h4, h5, h6, blockquote, .katex-display, .katex-block, .math-display, div.overflow-x-auto).section-selected-active { display: block !important; width: 100% !important; }
        body.selection-active table.section-hover-active, body.selection-active table.section-selected-active { display: table !important; width: 100% !important; border-collapse: separate !important; margin-left: 0 !important; }
        body.selection-active .generated-image-wrapper-active { display: block !important; width: fit-content !important; outline: 3px dashed var(--ex-section-border) !important; outline-offset: 4px; border-radius: 16px; z-index: 10; cursor: pointer; }
        body.selection-active .section-hover-active::before { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--ex-section-hover); box-shadow: inset 2px 0 0 var(--ex-section-border); pointer-events: none; z-index: 5; border-radius: 4px; }
        body.selection-active .section-selected-active::after { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 2px dashed var(--ex-section-border); border-radius: 4px; pointer-events: none; z-index: 10; }
        body.selection-active .generated-image-wrapper-active::after { display: none !important; }
        body.selection-active .generated-image-wrapper-active::before { display: none !important; }
        .section-number-badge { display: none; }
        body.selection-active .section-number-badge { display: flex; position: absolute; top: 0; left: -34px; background: var(--ex-handle-bg); color: var(--ex-handle-text); width: 22px; height: 22px; border-radius: 50%; padding: 0; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); z-index: 15; pointer-events: auto; cursor: pointer; transform: none; }
        .generated-image-badge { top: -15px !important; left: -15px !important; z-index: 99999 !important; }
        .switch { position: relative; display: inline-block; width: 36px; height: 20px; margin-left: 8px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #fff; border: 1px solid #ccc; transition: .3s; border-radius: 34px; }
        .slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 2px; bottom: 2px; background-color: #000; transition: .3s; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
        input:checked + .slider { background-color: #10a37f; border-color: #10a37f; }
        input:checked + .slider:before { transform: translateX(16px); background-color: #fff; }
        #global-export-bar { background-color: var(--ex-bar-bg); border: 1px solid var(--ex-border-color); color: var(--ex-bar-text); }
        #global-export-bar span, #global-export-bar button { color: var(--ex-bar-text); }
        .anim-target { transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease; }
        .settings-popup { position: absolute; top: 110%; right: 0; background: var(--ex-sidebar-bg); border: 1px solid var(--ex-border-color); border-radius: 8px; padding: 12px; width: 240px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); display: none; z-index: 1000; }
        .settings-popup.show { display: block; }
        .settings-row { display: flex; align-items: center; justify-content: space-between; font-size: 13px; font-weight: 500; }
        .settings-hint { font-size: 11px; opacity: 0.7; margin-top: 4px; line-height: 1.3; }
    `;
    document.head.appendChild(style);
}

function getSectionId(parentMsgId, sectionElement) {
    const turnContainer = sectionElement.closest('article') || 
                          sectionElement.closest('.agent-turn') || 
                          sectionElement.closest('div[data-message-author-role="assistant"]');
    if (!turnContainer) return null;

    let tag = sectionElement.tagName.toLowerCase();
    
    
    if (sectionElement.classList.contains('katex-display')) tag = 'katex';
    if (sectionElement.tagName.toLowerCase() === 'table') tag = 'table';
    if (sectionElement.classList.contains('group/imagegen-image')) tag = "gen-img";

    let uniqueSuffix = "";
    let globalIndex = -1;

    
    if (tag === 'gen-img') {
        const allGen = Array.from(turnContainer.querySelectorAll('.group\\/imagegen-image'));
        globalIndex = allGen.indexOf(sectionElement);
        uniqueSuffix = `gen_${globalIndex}`;
    } 
    
    else {
        
        let selector = tag;
        if(tag === 'katex') selector = '.katex-display';
        if(tag === 'table') selector = 'table';
        
        const allOfTag = Array.from(turnContainer.querySelectorAll(selector));
        globalIndex = allOfTag.indexOf(sectionElement);
        
        if (tag === 'img') {
            const src = sectionElement.getAttribute('src') || "";            
            let hash = 0;
            for (let i = 0; i < src.length; i++) {
                hash = ((hash << 5) - hash) + src.charCodeAt(i);
                hash |= 0;
            }
            uniqueSuffix = "img_" + Math.abs(hash);
        } else {
            
            const clone = sectionElement.cloneNode(true);
            clone.querySelectorAll('.section-number-badge, .msg-checkbox').forEach(el => el.remove());
            uniqueSuffix = (clone.textContent || "").replace(/\s+/g, '').replace(/\W/g, '').substring(0, 10);
        }
    }

    if (globalIndex === -1) return null;
    
    return `${parentMsgId}_${tag}_${globalIndex}_${uniqueSuffix}`;
}

function updateSectionVisuals() {
    
    if (!isSectionSelectionEnabled) {
        document.querySelectorAll('.section-selected-active').forEach(el => el.classList.remove('section-selected-active'));
        document.querySelectorAll('.section-number-badge').forEach(el => el.remove());
        return;
    }

    const activeList = lists.find(l => l.id === activeListId);
    if (!activeList) return;

    const currentItems = activeList.items;
    const folders = activeList.folders;
    const itemNumberMap = getItemNumberMap(currentItems, folders); 
    const selectedIds = new Set(currentItems.map(i => i.uniqueId));

    
    const turns = document.querySelectorAll('div[data-message-author-role="assistant"]');

    turns.forEach(msgBlock => {
        const msgId = getStableMessageId(msgBlock);
        
        
        const isParentSelected = selectedIds.has(msgId);

        
        const allSelectables = Array.from(msgBlock.querySelectorAll(SECTION_SELECTORS));
        
        
        const validSelectables = allSelectables.filter(el => !isNestedInList(el, allSelectables));

        validSelectables.forEach(block => {
            
            const secId = getSectionId(msgId, block);
            if (!secId) return;

            const badgeText = itemNumberMap.get(secId);
            const isSelected = !!badgeText || isParentSelected;

            
            if (isSelected) {
                if (block.classList.contains('group/imagegen-image')) block.classList.add('generated-image-wrapper-active');
                else block.classList.add('section-selected-active');
            } else {
                if (block.classList.contains('group/imagegen-image')) block.classList.remove('generated-image-wrapper-active');
                else block.classList.remove('section-selected-active');
            }

            
            let badge = block.querySelector(':scope > .section-number-badge');
            if (badgeText && !isParentSelected) {
                if (!badge) {
                    badge = document.createElement('div');
                    badge.className = 'section-number-badge' + (block.classList.contains('group/imagegen-image') ? ' generated-image-badge' : '');
                    if (block.classList.contains('group/imagegen-image')) block.appendChild(badge);
                    else block.insertBefore(badge, block.firstChild);
                }
                if (badge.innerText !== badgeText) badge.innerText = badgeText;
            } else {
                if (badge) badge.remove();
            }
        });
    });
}

function scanMessagesForCheckboxes() {
    
    let activeList = lists.find(l => l.id === activeListId);
    if (!activeList && lists.length > 0) activeList = lists[0];

    const messageBlocks = document.querySelectorAll('div[data-message-author-role="assistant"]');
    const currentItems = activeList ? activeList.items : [];
    
    
    const selectedSet = new Set(currentItems.map(i => i.uniqueId));
    const itemNumberMap = getItemNumberMap(currentItems, activeList ? activeList.folders : []);

    messageBlocks.forEach((msg) => {
        const msgId = getStableMessageId(msg);
        
        
        let cb = msg.querySelector('.msg-checkbox');
        if (!cb) {
            cb = createCheckboxForMsg(msg);
        }

        
        if (selectedSet.has(msgId)) {
            const num = itemNumberMap.get(msgId) || "✓";
            if(cb.innerText !== num || !cb.classList.contains('selected-number')) {
                cb.className = 'msg-checkbox selected-number';
                cb.innerHTML = num;
                cb.style.display = 'flex';
            }
        } else {
            
            if(cb.classList.contains('selected-number') || cb.innerHTML.trim() === "") {
                cb.className = 'msg-checkbox';
                cb.innerHTML = SVG_CHECK_BLANK; 
                cb.style.display = ''; 
            }
        }

        
        if (!msg.dataset.dblClickAttached) {
            msg.dataset.dblClickAttached = "true";
            
            msg.addEventListener('dblclick', (e) => {
                
                if (!isSelectionMode) return;
                e.preventDefault(); 
                e.stopPropagation();
                window.getSelection()?.removeAllRanges();
                toggleSelection(msg, cb);
            });
        }
    });

    if (isSectionSelectionEnabled) {
        updateSectionVisuals();
    }
}

function createCheckboxForMsg(msg) {
    const cb = document.createElement('div');
    cb.className = 'msg-checkbox';
    cb.innerHTML = SVG_CHECK_BLANK; 
    if(getComputedStyle(msg).position === 'static') msg.style.position = 'relative';
    
    msg.appendChild(cb);
    cb.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        toggleSelection(msg, cb); 
    });
    return cb;
}

function addGlobalButtons() {
    if (document.getElementById('global-export-bar')) return;

    const globalContainer = document.createElement("div");
    globalContainer.id = 'global-export-bar';
    globalContainer.style.cssText = `
        position: fixed; top: 7px; left: 50%; transform: translateX(-50%); z-index: 9999;
        display: flex; gap: 15px; padding: 2px 10px; border-radius: 8px; 
        box-shadow: 0 4px 10px rgba(0,0,0,0.5); align-items: center;
    `;

    // --- UPDATED LOGIC HERE ---
    const isMac = typeof navigator !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const modPrefix = isMac ? "Opt + " : "Alt + ";
    
    // Updated fmtKey to include the modifier prefix
    const fmtKey = (code) => code ? modPrefix + code.replace('Key', '').replace('Digit', '') : '?';
    // --------------------------

    globalContainer.innerHTML = `
        <span style="font-size: 14px; font-weight: 600;">Export Chat:</span>
        <button class="global-btn-word flex items-center gap-2 transition-colors" title="Export Full Chat to Docx" style="padding: 4px 8px; border-radius: 4px;">
            <div class="anim-target" style="width:24px; height:24px; display:flex; align-items:center; justify-content:center;">${WORD_ICON_SVG}</div>
            <span style="font-size: 14px; font-weight: 500;">DOCX</span>
        </button>
        <div style="width: 1px; height: 20px; background-color: #4d4d4f;"></div>
        <button class="global-btn-pdf flex items-center gap-2 transition-colors" title="Export Full Chat to PDF" style="padding: 4px 8px; border-radius: 4px;">
            <div class="anim-target" style="width:24px; height:24px; display:flex; align-items:center; justify-content:center;">${PDF_ICON_SVG}</div>
            <span style="font-size: 14px; font-weight: 500;">PDF</span>
        </button>
        <div style="width: 1px; height: 20px; background-color: #4d4d4f; margin-left:10px;"></div>
        <div style="display:flex; align-items:center; margin-left:5px;">
            <span style="font-size:14px; font-weight:500; margin-right: 4px;">Select</span>
            <label class="switch"><input type="checkbox" id="selection-toggle"><span class="slider"></span></label>
        </div>
        
        <div style="position:relative; margin-left:10px;">
            <button id="global-settings-btn" style="color:var(--ex-bar-text); opacity:0.7; cursor:pointer; padding:4px;">
                ${SETTINGS_ICON_SVG}
            </button>
            <div id="global-settings-popup" class="settings-popup" style="width: 280px;">
                <div class="settings-header" style="font-weight:700; margin-bottom:10px; padding-bottom:5px; border-bottom:1px solid var(--ex-border-color);">Preferences</div>
                
                <div class="settings-row" style="margin-bottom:12px; align-items: flex-start;">
                    <div style="display:flex; flex-direction:column; line-height:1.2;">
                        <span style="font-weight:600;">Select Sections</span>
                        <span style="font-size:11px; opacity:0.7; margin-top:2px;">(Tables, Code, LaTeX, etc.)</span>
                    </div>
                    <label class="switch" style="transform:scale(0.8); margin-top:2px;">
                        <input type="checkbox" id="section-select-toggle">
                        <span class="slider"></span>
                    </label>
                </div>
                
                <div class="settings-row" style="margin-bottom:15px;">
                    <span>Show Startup Tooltip</span>
                    <label class="switch" style="transform:scale(0.8);">
                        <input type="checkbox" id="tooltip-toggle">
                        <span class="slider"></span>
                    </label>
                </div>

                <div class="settings-row" style="margin-bottom:8px;">
                    <span>Enable Preview Button</span>
                    <label class="switch" style="transform:scale(0.8);">
                        <input type="checkbox" id="preview-btn-toggle">
                        <span class="slider"></span>
                    </label>
                </div>
                
                <div class="settings-row" style="margin-bottom:15px;">
                    <span>Open Preview in New Tab</span>
                    <label class="switch" style="transform:scale(0.8);">
                        <input type="checkbox" id="preview-tab-toggle">
                        <span class="slider"></span>
                    </label>
                </div>

                <div style="font-size:12px; font-weight:600; opacity:0.8; margin-bottom:8px; border-top:1px solid var(--ex-border-color); padding-top:10px;">KEYBOARD SHORTCUTS (${modPrefix.trim()})</div>
                
                <div class="shortcut-row" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
                    <span style="font-size:13px;">Export Word</span>
                    <button class="shortcut-btn" data-action="word" style="font-size:12px; font-weight:bold; padding:4px 8px; border-radius:4px; border:1px solid var(--ex-border-color); background:var(--ex-item-bg); min-width:40px; cursor:pointer;">${fmtKey(globalSettings.shortcuts.word)}</button>
                </div>
                <div class="shortcut-row" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
                    <span style="font-size:13px;">Export PDF</span>
                    <button class="shortcut-btn" data-action="pdf" style="font-size:12px; font-weight:bold; padding:4px 8px; border-radius:4px; border:1px solid var(--ex-border-color); background:var(--ex-item-bg); min-width:40px; cursor:pointer;">${fmtKey(globalSettings.shortcuts.pdf)}</button>
                </div>
                <div class="shortcut-row" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
                    <span style="font-size:13px;">Toggle Selection</span>
                    <button class="shortcut-btn" data-action="select" style="font-size:12px; font-weight:bold; padding:4px 8px; border-radius:4px; border:1px solid var(--ex-border-color); background:var(--ex-item-bg); min-width:40px; cursor:pointer;">${fmtKey(globalSettings.shortcuts.select)}</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(globalContainer);

    // --- Button Event Listeners ---
    globalContainer.querySelector('.global-btn-word').addEventListener('click', (e) => {
        activeExportBtn = e.currentTarget.querySelector('.anim-target'); activeExportFormat = 'word'; exportFullChat('word');
    });
    globalContainer.querySelector('.global-btn-pdf').addEventListener('click', (e) => {
        activeExportBtn = e.currentTarget.querySelector('.anim-target'); activeExportFormat = 'pdf'; exportFullChat('pdf');
    });

    const toggle = document.getElementById('selection-toggle');
    toggle.checked = isSelectionMode;
    toggle.addEventListener('change', (e) => {
        isSelectionMode = e.target.checked;
        saveState();
        toggleSelectionModeUI();
    });

    // Settings Menu
    const settingsBtn = document.getElementById('global-settings-btn');
    const settingsPopup = document.getElementById('global-settings-popup');
    
    settingsBtn.addEventListener('click', (e) => { e.stopPropagation(); settingsPopup.classList.toggle('show'); });
    document.addEventListener('click', (e) => { 
        if(!e.target.closest('#global-settings-popup') && !e.target.closest('#global-settings-btn')) {
            settingsPopup.classList.remove('show');
            if(isRecordingShortcut) isRecordingShortcut = false; 
        }
    });
    
    // Toggles
    const sectionToggle = document.getElementById('section-select-toggle');
    sectionToggle.checked = isSectionSelectionEnabled;
    sectionToggle.addEventListener('change', (e) => {
        isSectionSelectionEnabled = e.target.checked;
        saveState();
        if(isSectionSelectionEnabled && !isSelectionMode) {
            isSelectionMode = true; toggle.checked = true; toggleSelectionModeUI();
        }
        scanMessagesForCheckboxes(); 
    });

    const tooltipToggle = document.getElementById('tooltip-toggle');
    tooltipToggle.checked = globalSettings.showTooltip;
    tooltipToggle.addEventListener('change', (e) => { globalSettings.showTooltip = e.target.checked; saveState(); });

    const previewToggle = document.getElementById('preview-btn-toggle');
    previewToggle.checked = globalSettings.enablePreview;
    previewToggle.addEventListener('change', (e) => {
        globalSettings.enablePreview = e.target.checked;
        const btn = document.getElementById('btn-toggle-preview');
        if (btn) btn.style.display = globalSettings.enablePreview ? 'flex' : 'none';
        if (!globalSettings.enablePreview && isPreviewMode) {
            isPreviewMode = false;
            if(btn) btn.querySelector('img').src = chrome.runtime.getURL(PATH_PREVIEW_ON);
            updateQueueUI();
        }
        saveState();
    });

    // New Tab Preview Toggle - FIXED "Soft Lock"
    const previewTabToggle = document.getElementById('preview-tab-toggle');
    previewTabToggle.checked = globalSettings.previewInTab;
    previewTabToggle.addEventListener('change', (e) => {
        globalSettings.previewInTab = e.target.checked;
        saveState();
        
        // FIX: If we are currently in sidebar preview mode, exit it immediately
        if (isPreviewMode) {
            isPreviewMode = false;
            const btn = document.getElementById('btn-toggle-preview');
            if(btn) btn.querySelector('img').src = chrome.runtime.getURL(PATH_PREVIEW_ON);
            updateQueueUI();
        }
    });

    // Shortcut Recording logic
    const shortcutBtns = globalContainer.querySelectorAll('.shortcut-btn');
    shortcutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            shortcutBtns.forEach(b => {
                const a = b.dataset.action;
                b.innerText = fmtKey(globalSettings.shortcuts[a]);
                b.style.borderColor = 'var(--ex-border-color)'; b.style.color = '';
            });
            isRecordingShortcut = true;
            btn.innerText = '...'; btn.style.borderColor = '#10a37f'; btn.style.color = '#10a37f';
            
            const handleRecord = (ev) => {
                ev.preventDefault(); ev.stopPropagation();
                if (ev.code === 'Escape') {
                    isRecordingShortcut = false; btn.innerText = fmtKey(globalSettings.shortcuts[btn.dataset.action]);
                } else if (!ev.key.startsWith('Alt') && !ev.key.startsWith('Control') && !ev.key.startsWith('Shift') && !ev.key.startsWith('Meta')) {
                    const action = btn.dataset.action; globalSettings.shortcuts[action] = ev.code;
                    saveState(); btn.innerText = fmtKey(ev.code); isRecordingShortcut = false;
                }
                btn.style.borderColor = 'var(--ex-border-color)'; btn.style.color = '';
                document.removeEventListener('keydown', handleRecord, true); 
            };
            document.addEventListener('keydown', handleRecord, true);
        });
    });

    createSidebar(); 
    if (!hasShownShortcutTip && globalSettings.showTooltip) { showShortcutTip(); hasShownShortcutTip = true; }
    toggleSelectionModeUI(); 
}

function openPreviewInNewTab() {
    const activeList = lists.find(l => l.id === activeListId);
    if (!activeList || activeList.items.length === 0) {
        alert("List is empty. Add items to preview.");
        return;
    }

    const isDark = document.documentElement.classList.contains('dark');
    
    // 1. Build the HTML content string
    let innerHtml = "";
    activeList.folders.forEach((folder, folderIndex) => {
        const folderItems = activeList.items.filter(i => i.folderId === folder.id);
        if (folderItems.length > 0) {
            innerHtml += `<h2 class="folder-title">${folder.name}</h2>`;
            folderItems.forEach((item, itemIndex) => {
                const cleanHtml = cleanHtmlForPreview(item.html);
                const numberLabel = `${folderIndex + 1}.${itemIndex + 1}`;
                innerHtml += `
                    <div class="response-wrapper">
                        <div class="response-number">${numberLabel}</div>
                        <div class="response-block">${cleanHtml}</div>
                    </div>`;
            });
        }
    });

    // 2. Prepare Data Object
    const previewData = {
        title: activeList.name,
        content: innerHtml,
        isDark: isDark
    };

    // 3. Save to Storage & Open Wrapper
    // We save to storage because we can't pass huge HTML strings in a URL parameter
    chrome.storage.local.set({ 'previewData': previewData }, () => {
        const wrapperUrl = chrome.runtime.getURL("wrapper.html");
        window.open(wrapperUrl, "_blank");
    });
}

function createCheckboxForMsg(msg) {
    const cb = document.createElement('div');
    cb.className = 'msg-checkbox';
    if(getComputedStyle(msg).position === 'static') msg.style.position = 'relative';
    msg.appendChild(cb);
    cb.addEventListener('click', (e) => { e.stopPropagation(); toggleSelection(msg, cb); });
    return cb;
}

async function urlToBase64(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.warn("Failed to convert image via fetch:", e);
        return null;
    }
}

async function exportFullChat(format) {
    if(isExportInProgress) return;
    
    const messageBlocks = Array.from(document.querySelectorAll('div[data-message-author-role="assistant"]'));
    if(messageBlocks.length === 0) return;

    isExportInProgress = true;

    try {
        let fullHtml = "";
        for (let i = 0; i < messageBlocks.length; i++) {
            const msgBlock = messageBlocks[i];
            const richContent = await getRichMessageContentAsync(msgBlock);
            fullHtml += `<div class="response-block">${richContent}</div>`;
            if (i < messageBlocks.length - 1) {
                fullHtml += `<hr class="chat-separator" style="margin: 20px 0; border: 0; border-top: 1px solid #ccc;">`;
            }
        }
        sendToBackground(fullHtml, format);
    } catch (e) {
        console.error("Export failed:", e);
        isExportInProgress = false;
        activeExportBtn = null;
    }
}

async function handleSelectAllToggle() {
    const messages = Array.from(document.querySelectorAll('div[data-message-author-role="assistant"]'));
    if (messages.length === 0) return;

    let currentItems = getActiveItems();
    let newItemsToAdd = [];
    let visibleIds = [];

    
    for (const msg of messages) {
        const uniqueId = getStableMessageId(msg);
        visibleIds.push(uniqueId);
        
        
        if (!currentItems.some(i => i.uniqueId === uniqueId)) {
            const richContent = await getRichMessageContentAsync(msg); 
            const preview = getPreviewText(richContent);
            
            newItemsToAdd.push({
                uniqueId: uniqueId,
                previewText: preview,
                html: richContent, 
                folderId: selectedFolderId || (lists.find(l=>l.id===activeListId)?.folders[0]?.id)
            });
        }
    }

    const allVisibleSelected = visibleIds.every(vid => currentItems.some(i => i.uniqueId === vid));

    if (allVisibleSelected) {
        
        currentItems = currentItems.filter(item => {
            if (visibleIds.includes(item.uniqueId) || visibleIds.some(vid => item.uniqueId.startsWith(vid + '_'))) {
                return false;
            }
            return true;
        });
    } else {
        
        currentItems = currentItems.filter(item => !visibleIds.some(vid => item.uniqueId.startsWith(vid + '_')));
        currentItems = [...currentItems, ...newItemsToAdd];
    }

    setActiveItems(currentItems);
    updateQueueUI();
    scanMessagesForCheckboxes();
}

function handleSidebarExport(btnElement, format) {
    if (isExportInProgress) return;

    const scopeInput = document.getElementById('export-scope-input');
    const scopeId = scopeInput ? scopeInput.dataset.value : 'all';
    
    const activeList = lists.find(l => l.id === activeListId);
    let items = activeList ? activeList.items : [];

    if (scopeId !== 'all' && scopeId) {
        items = items.filter(i => i.folderId === scopeId);
    }
    if (items.length === 0) return;

    isExportInProgress = true;
    activeExportBtn = btnElement.querySelector('.anim-target');
    activeExportFormat = format;
    handleStatusUpdate("processing", format);

    let exportHtml = "";
    const mergedBlocks = [];
    let currentBlock = null;

    const getParentId = (id) => {
        const parts = id.split('_');
        if (parts.length >= 2) return parts[0] + '_' + parts[1];
        return id;
    };

    items.forEach((item) => {
        
        const html = item.html; 
        
        if (!html) return;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        tempDiv.querySelectorAll('.section-number-badge, .msg-checkbox, .custom-export-buttons, .sr-only').forEach(el => el.remove());
        tempDiv.querySelectorAll('.section-selected-active').forEach(el => el.classList.remove('section-selected-active'));
        
        const imgWrapper = tempDiv.querySelector('.image-badge-wrapper');
        if(imgWrapper) tempDiv.innerHTML = imgWrapper.innerHTML; 

        const cleanHtml = tempDiv.innerHTML;
        const pId = getParentId(item.uniqueId);

        if (currentBlock && currentBlock.parentId === pId) {
            currentBlock.content += cleanHtml;
        } else {
            if (currentBlock) mergedBlocks.push(currentBlock);
            currentBlock = { parentId: pId, content: cleanHtml };
        }
    });
    
    if (currentBlock) mergedBlocks.push(currentBlock);

    mergedBlocks.forEach((block, index) => {
        exportHtml += `<div class="response-block">${block.content}</div>`;
        if (index < mergedBlocks.length - 1) {
            exportHtml += `<hr class="chat-separator" style="margin: 20px 0; border: 0; border-top: 1px solid #ccc;">`;
        }
    });

    sendToBackground(exportHtml, format);
}
async function toggleSelection(msgElement, checkboxElement) {
    // Wrapper for the toggle logic
    await toggleAllSectionsInMessage(msgElement);
}

async function toggleAllSectionsInMessage(msgElement) {
    const parentMsgId = getStableMessageId(msgElement);
    
    // 1. Get the latest state of items
    let currentItems = getActiveItems();
    
    // 2. Check if the Full Message is currently selected
    const isFullMessageSelected = currentItems.some(item => item.uniqueId === parentMsgId);
    
    // 3. Check if there are any Partial Selections (individual sections)
    // We look for any item ID that starts with the parentMsgId + '_'
    const hasPartialSelection = currentItems.some(item => item.uniqueId.startsWith(parentMsgId + '_'));

    // 4. Determine Intent:
    // If the message is Fully Selected OR has Partial selections (e.g., from the first click of a double-click),
    // we treat the Double-Click as a command to CLEAR everything.
    const shouldClear = isFullMessageSelected || hasPartialSelection;

    let newItems = [...currentItems];

    if (shouldClear) {
        // UNSELECT: Filter out both the Parent ID and any Section IDs
        newItems = newItems.filter(item => 
            item.uniqueId !== parentMsgId && 
            !item.uniqueId.startsWith(parentMsgId + '_')
        );
    } 
    else {
        // SELECT: Add the Full Message content
        const fullHtml = await getRichMessageContentAsync(msgElement);
        if (fullHtml) {
            const preview = getPreviewText(fullHtml);
            const activeList = lists.find(l => l.id === activeListId);
            const targetFolderId = selectedFolderId || (activeList?.folders[0]?.id);

            newItems.push({ 
                uniqueId: parentMsgId, 
                previewText: preview, 
                html: fullHtml,
                folderId: targetFolderId 
            });
        }
    }

    // 5. Commit changes
    setActiveItems(newItems);
    updateQueueUI();
    scanMessagesForCheckboxes();
}

function toggleSelectionModeUI() {
    const sidebar = document.getElementById('export-sidebar');
    const toggle = document.getElementById('selection-toggle');
    const body = document.body;
    if (toggle) toggle.checked = isSelectionMode; 
    
    if (isSelectionMode) {
        body.classList.add('selection-active'); 
        if(sidebar) sidebar.classList.add('visible'); 
        scanMessagesForCheckboxes(); 
    } else {
        body.classList.remove('selection-active'); 
        if(sidebar) sidebar.classList.remove('visible');
    }
}

function sendToBackground(htmlContent, format) {
    if (!chrome.runtime?.id) return; 
    handleStatusUpdate("processing", format);
    chrome.runtime.sendMessage({ action: "export", html: htmlContent, format: format });
}

function handleStatusUpdate(state, format) {
    const target = activeExportBtn;
    if (!target) return;
    if (!chrome.runtime?.id) return;

    const isDark = document.documentElement.classList.contains('dark');
    const getImgTag = (path) => `<img src="${chrome.runtime.getURL(path)}" style="width:100%; height:100%; display:block;" />`;

    if (state === "processing") {
        updateActiveBtnTarget(target, getImgTag(isDark ? PATH_DL_DARK : PATH_DL_LIGHT));
    } else if (state === "success") {
        updateActiveBtnTarget(target, getImgTag(isDark ? PATH_CHECK_DARK : PATH_CHECK_LIGHT));
        setTimeout(() => {
            updateActiveBtnTarget(target, (format === 'pdf') ? PDF_ICON_SVG : WORD_ICON_SVG);
            setTimeout(() => { activeExportBtn = null; isExportInProgress = false; activeExportFormat = null; }, 200);
        }, 1500);
    } else if (state === "error") {
        target.innerHTML = "❌";
        setTimeout(() => {
            updateActiveBtnTarget(target, (format === 'pdf') ? PDF_ICON_SVG : WORD_ICON_SVG);
            isExportInProgress = false;
        }, 2000);
    }
}

function updateActiveBtnTarget(target, htmlContent) {
    target.style.transform = "scale(0)";
    target.style.opacity = "0";
    setTimeout(() => {
        target.innerHTML = htmlContent;
        target.style.transform = "scale(1)";
        target.style.opacity = "1";
    }, 150);
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "status_update") {
        const fmt = request.format || activeExportFormat || 'word'; 
        handleStatusUpdate(request.step, fmt);
        if (request.step === "error") isExportInProgress = false;
    }
});

async function getRichMessageContentAsync(msgElement) {
    const turnContainer = msgElement.closest('article') || msgElement.closest('.agent-turn') || msgElement.parentElement.parentElement;
    
    const exportWrapper = document.createElement('div');
    exportWrapper.className = 'response-combined-block';
    exportWrapper.style.marginBottom = "20px";

    if (turnContainer) {
        const rawImages = Array.from(turnContainer.querySelectorAll('img[alt="Generated image"], .group\\/imagegen-image img, img[src*="files"]'));
        const seenSrcs = new Set();

        for (const img of rawImages) {
            if (img.naturalWidth < 50 || img.naturalHeight < 50) continue;
            if (seenSrcs.has(img.src)) continue;
            seenSrcs.add(img.src);

            const imgClone = document.createElement('img');
            const base64Data = await urlToBase64(img.src);
            if (base64Data) {
                imgClone.src = base64Data;
                imgClone.style.cssText = "display: block; max-width: 100%; height: auto; margin: 15px 0; border-radius: 8px; border: 1px solid #ccc;";
                exportWrapper.appendChild(imgClone);
            }
        }
    }

    const contentNode = msgElement.querySelector('.markdown') || msgElement;
    if (contentNode) {
        const textClone = contentNode.cloneNode(true);
        textClone.querySelectorAll('.msg-checkbox, .custom-share-page-toolbar, button, .section-number-badge, .sr-only, .custom-export-buttons').forEach(el => el.remove());
        textClone.querySelectorAll('.section-selected-active').forEach(el => el.classList.remove('section-selected-active'));
        exportWrapper.appendChild(textClone);
    }
    return exportWrapper.outerHTML;
}

function addLocalButtons() {
    const isSharePage = window.location.href.includes('/share/');
    const messageBlocks = document.querySelectorAll('div[data-message-author-role="assistant"]');
    
    messageBlocks.forEach((msgBlock) => {
        let toolbar = msgBlock.querySelector('div.z-0.flex.min-h-\\[46px\\]') || msgBlock.closest('.text-token-text-primary')?.querySelector('div.z-0.flex.min-h-\\[46px\\]');
        if (!toolbar) {
            if (isSharePage) {
                toolbar = msgBlock.querySelector('.custom-share-page-toolbar');
                if (!toolbar) {
                    toolbar = document.createElement('div');
                    toolbar.className = 'custom-share-page-toolbar flex items-center gap-2 mt-2'; 
                    msgBlock.appendChild(toolbar);
                }
            } else return;
        }
        
        if (toolbar && !toolbar.querySelector('.custom-export-buttons')) {
            const btnContainer = document.createElement("span");
            btnContainer.className = "custom-export-buttons flex items-center gap-2 ml-2 pl-2 border-l border-gray-500/30";
            btnContainer.innerHTML = `
                <button class="export-btn-word text-token-text-secondary hover:text-token-text-primary transition-colors p-1" style="width:30px; height:30px;" title="Export to Docx">${WORD_ICON_SVG}</button>
                <button class="export-btn-pdf text-token-text-secondary hover:text-token-text-primary transition-colors p-1" style="width:30px; height:30px;" title="Export to PDF">${PDF_ICON_SVG}</button>
            `;
            
            const wordBtn = btnContainer.querySelector('.export-btn-word');
            wordBtn.addEventListener('click', async () => {
                if (isExportInProgress) return;
                isExportInProgress = true; 
                activeExportBtn = wordBtn; 
                activeExportFormat = 'word';
                
                try {
                    const finalHtml = await getRichMessageContentAsync(msgBlock);
                    sendToBackground(finalHtml, 'word');
                } catch (e) {
                    console.error(e);
                    isExportInProgress = false;
                }
            });
            
            const pdfBtn = btnContainer.querySelector('.export-btn-pdf');
            pdfBtn.addEventListener('click', async () => {
                if (isExportInProgress) return;
                isExportInProgress = true; 
                activeExportBtn = pdfBtn; 
                activeExportFormat = 'pdf';

                try {
                    const finalHtml = await getRichMessageContentAsync(msgBlock);
                    sendToBackground(finalHtml, 'pdf');
                } catch (e) {
                    console.error(e);
                    isExportInProgress = false;
                }
            });

            const innerToolbar = toolbar.querySelector('.flex.items-center');
            if (innerToolbar) innerToolbar.appendChild(btnContainer); else toolbar.appendChild(btnContainer);
        }
    });
}

function removeUpgradePromo() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        if (btn.innerText && btn.innerText.includes("Free offer")) {
            const container = btn.closest('.rounded-full') || btn.closest('.block.lg\\:hidden');
            if (container) container.remove();
        }
    });
}

function showShortcutTip() {
    if (!globalSettings.showTooltip) return;

    const isDark = document.documentElement.classList.contains('dark');
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const bg = isDark ? '#2D2D2F' : '#F7F7F8'; 
    const text = isDark ? '#ECECF1' : '#333333';
    const border = isDark ? '#565869' : '#D1D5DB';
    const modKey = isMac ? "Opt" : "Alt"; 
    
    
    const kWord = globalSettings.shortcuts.word.replace('Key', '').replace('Digit', '');
    const kPdf = globalSettings.shortcuts.pdf.replace('Key', '').replace('Digit', '');
    const kSel = globalSettings.shortcuts.select.replace('Key', '').replace('Digit', '');

    const KEYBOARD_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px; opacity: 0.8;"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="6" y1="8" x2="6" y2="8"></line><line x1="10" y1="8" x2="10" y2="8"></line><line x1="14" y1="8" x2="14" y2="8"></line><line x1="18" y1="8" x2="18" y2="12"></line><line x1="6" y1="12" x2="6" y2="12"></line><line x1="10" y1="12" x2="10" y2="12"></line><line x1="14" y1="12" x2="14" y2="12"></line><line x1="18" y1="12" x2="18" y2="12"></line><line x1="6" y1="16" x2="18" y2="16"></line></svg>`;

    const tip = document.createElement('div');
    tip.id = 'export-shortcut-tip';
    tip.innerHTML = `<div style="display: flex; align-items: center;">${KEYBOARD_ICON}<span style="font-weight: 500; margin-right: 6px;">Quick Export:</span><span style="opacity: 0.9;"><b>${modKey}+${kWord}</b> (Word) • <b>${modKey}+${kPdf}</b> (PDF) • <b>${modKey}+${kSel}</b> (Select)</span></div>`;
    tip.style.cssText = `position: fixed; top: 75px; left: 50%; transform: translateX(-50%) translateY(-10px); opacity: 0; z-index: 9998; background-color: ${bg}; color: ${text}; border: 1px solid ${border}; padding: 8px 14px; border-radius: 6px; font-family: sans-serif; font-size: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); pointer-events: none; transition: 0.5s;`;
    
    document.body.appendChild(tip);
    
    setTimeout(() => { tip.style.opacity = '1'; tip.style.transform = 'translateX(-50%) translateY(0)'; }, 100);
    setTimeout(() => { tip.style.opacity = '0'; tip.style.transform = 'translateX(-50%) translateY(-10px)'; setTimeout(() => tip.remove(), 500); }, 8000);
}

document.addEventListener('keydown', (e) => {
    
    if (isRecordingShortcut) return;

    if (e.altKey) {
        
        if (e.code === globalSettings.shortcuts.select) { 
            e.preventDefault(); 
            isSelectionMode = !isSelectionMode; 
            saveState(); 
            toggleSelectionModeUI(); 
        } 
        
        else if (e.code === globalSettings.shortcuts.word) { 
            e.preventDefault(); 
            if (!isExportInProgress) { 
                const btn = document.querySelector('.global-btn-word .anim-target'); 
                if(btn) { activeExportBtn = btn; activeExportFormat = 'word'; exportFullChat('word'); } 
            } 
        } 
        
        else if (e.code === globalSettings.shortcuts.pdf) { 
            e.preventDefault(); 
            if (!isExportInProgress) { 
                const btn = document.querySelector('.global-btn-pdf .anim-target'); 
                if(btn) { activeExportBtn = btn; activeExportFormat = 'pdf'; exportFullChat('pdf'); } 
            } 
        }
    }
});

let isAppInitialized = false;
async function initApp() {
    if (isAppInitialized) return;
    if (!chrome || !chrome.storage || !chrome.storage.local) return;

    await AsyncStorage.load();
    initDelegatedEvents();
    addGlobalButtons();
    createSidebar();
    addCustomStyles();

    const observerTarget = document.querySelector('body');
    const observer = new MutationObserver((mutations) => {
        let shouldScan = false;
        
        for (const m of mutations) {
            
            if (m.addedNodes.length > 0) {
                shouldScan = true;
                break;
            }
        }

        if (shouldScan) {
            
            if (window._scanTimeout) clearTimeout(window._scanTimeout);
            window._scanTimeout = setTimeout(() => {
                scanMessagesForCheckboxes();
                addLocalButtons();
                removeUpgradePromo();
            }, 500);
        }
    });

    observer.observe(observerTarget, { childList: true, subtree: true });
    
    scanMessagesForCheckboxes();
    addLocalButtons();
    removeUpgradePromo();

    isAppInitialized = true;
    console.log("Chat Export Optimized: Event-Driven Mode.");
}

initApp();

setInterval(() => {
    if (isExportInProgress) {
        const now = Date.now();
        if (!window.lastExportStart) window.lastExportStart = now;
        if (now - window.lastExportStart > 30000) {            
            console.warn("Export timed out. Resetting lock.");
            if (activeExportBtn && activeExportFormat) {
                const originalIcon = (activeExportFormat === 'pdf') ? PDF_ICON_SVG : WORD_ICON_SVG;
                updateActiveBtnTarget(activeExportBtn, originalIcon);
            }
            isExportInProgress = false;
            activeExportBtn = null;
            activeExportFormat = null; 
            window.lastExportStart = null;
        }
    } else {
        window.lastExportStart = null;
    }
}, 1000);


const themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            setTimeout(scanMessagesForCheckboxes, 50);
            setTimeout(scanMessagesForCheckboxes, 500); 
        }
    });
});

themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
});
const STORAGE_PREFIX = "ex_msg_";

function findElementById(targetId) {
    const messages = document.querySelectorAll('div[data-message-author-role="assistant"]');
    for (const msg of messages) {
        const msgId = getStableMessageId(msg);
        
        
        if (msgId === targetId) return msg.querySelector('.markdown') || msg;
        
        
        if (targetId.startsWith(msgId + '_')) {
            const turnContainer = msg.closest('article') || msg.closest('.agent-turn') || msg;
            const selectables = Array.from(turnContainer.querySelectorAll(SECTION_SELECTORS));
            for (const sec of selectables) {
                if (getSectionId(msgId, sec) === targetId) return sec;
            }
        }
    }
    return null;
}

function saveContentToStore(id, html) {  }
function loadContentFromStore(id) { return null; }
function removeContentFromStore(id) {  }