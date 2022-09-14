const cssVariables = document.querySelector(':root')

chrome.storage.sync.get({
  ordwayCustomerTableWidth: 1800
}, function(items) {
  cssVariables.style.setProperty('--width', items.ordwayCustomerTableWidth + 'px')
})