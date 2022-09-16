// saves options to chrome storage and sets css width property
const saveOptions = () => {
  
  const _width = document.getElementById('set-width')
  const toNum = parseInt(_width.value)
  const isNum = !isNaN(toNum)
  // value check for int, sets default if not
  const floorNum = isNum ? Math.floor(toNum) : 1800
  const widthPixelValue = floorNum + 'px'
  
  chrome.storage.sync.set({
    ordwayCustomerTableWidth: floorNum
  }, () => {
    // update status
    const status = document.getElementById('status')
    status.textContent = isNum ? `Width saved as ${widthPixelValue}` : 'Not a number, saved as default 1800px'
    setTimeout(() => {
      status.textContent = ''
    }, 2000)
  })
}

const restoreOptions = () => {
  chrome.storage.sync.get({
    ordwayCustomerTableWidth: 1800
  }, (items) => {
    document.getElementById('set-width').value = items.ordwayCustomerTableWidth
  })
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.getElementById('save').addEventListener('click', saveOptions)
document.getElementById('set-width').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') saveOptions()
})