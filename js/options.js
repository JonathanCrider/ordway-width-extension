// saves options to chrome storage and sets css width property
function save_options() {
  
  const _width = document.getElementById('set-width')
  const widthValue = _width.value + 'px'
  
  chrome.storage.sync.set({
    ordwayCustomerTableWidth: _width.value
  }, function() {
    // update status
    const status = document.getElementById('status')
    status.textContent = `Width saved as ${widthValue}`
    setTimeout(function() {
      status.textContent = ''
    }, 2000)
  })
}

function restore_options() {
  chrome.storage.sync.get({
    ordwayCustomerTableWidth: 1800
  }, function(items) {
    document.getElementById('set-width').value = items.ordwayCustomerTableWidth
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
document.getElementById('set-width').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') save_options()
})