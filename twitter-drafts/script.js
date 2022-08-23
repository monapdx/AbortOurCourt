let textareaHandler = document.getElementById('textareaHandler');
let twdActions = document.getElementById('twd_actions');
let tweetContent = textareaHandler.value
let msgDrawer = document.getElementById('message-drawer');
let msgHandler = document.getElementById('message-text');
let nameHandlers = ['textareaHandler', 'twd_tw--save', 'twd_modal--handler', 'modal_box'];
let saveBTN = document.getElementById('twd_tw--save');
let removeBTN = document.getElementById('twd_tw--remove');

function init() {
  // configuration of localforage database
  localforage.config({
    name: 'Twitter\'s Draft',
    storeName: 'Tweets',
    version: 1.0,
    description: 'A local storage that store Twitter\'s Draft chrome extension data'
  });

  window.updateList()
}

// Capturing textarea on event change
window.changeTextarea = function (e) {
  if (e != '') {
    msgDrawer.style.top = '-40px'
  }

  tweetContent = e
}

// Capturing clicks
window.onclick = (e) => {
  let findHandler = false

  for (let j = 0; j < nameHandlers.length; j++) {
    try {
      for (let i = 0; i < e.path.length; i++) {
        if (nameHandlers[j] === e.path[i].id) {
          findHandler = true
          break
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (findHandler) {
    textareaHandler.style.height = '62px'
    twdActions.style.display = 'block'
  } else {
    if (textareaHandler.value.length === 0) {
      textareaHandler.style.height = '32px'
      twdActions.style.display = 'none'
    }
  }
}

// save tweet
window.saveTweet = () => {
  if (textareaHandler.value == '') {
    msgDrawer.style.top = 0
    msgHandler.innerText = 'Empty tweet, Write something!'
    textareaHandler.focus()
    textareaHandler.style.height = '62px'
    twdActions.style.display = 'block'
    
    // set timeout
    setTimeout(() => {
      msgDrawer.style.top = '-40px'
    }, 2000)
  } else {
    if (saveBTN.getAttribute('draftkey') === null) {
      let uuId = uuid.v1()

      localforage.setItem(uuId, tweetContent).then(() => {
        window.editTweet(uuId)
      }).catch((err) => {
        console.log(err)
      })
    } else {
      localforage.setItem(saveBTN.getAttribute('draftkey'), tweetContent).then(() => {
        window.editTweet(saveBTN.getAttribute('draftkey'))
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

// make flexible modal
function setModalMaxHeight(element) {
  this.$element     = $(element);  
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight + footerHeight);

  this.$content.css({
      'overflow': 'hidden'
  });
  
  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}
$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});
$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});

// get drafts and fill up table's rows
function getDrafts() {
  localforage.keys().then((keys) => {
    let table = document.getElementById('list_table')
    let tbody = document.createElement('tbody')
    tbody.id = 'twd_table_body'

    keys.map((item) => {
      localforage.getItem(item).then((value) => {
        let tr = document.createElement('tr')
        let tdContent = document.createElement('td')
        let tdactions = document.createElement('td')

        tdContent.className = 'twd_draft--content'
        tdContent.innerText = (value.length > 71) ? value.slice(0, 60) + '...' : value.slice(0, 60)
       
        tdactions.className = 'twd_draft--actions text-right'
        tdactions.title = item
        tdactions.innerHTML = `<button id="${item}" type="button" class="btn btn-xs btn-default" title="Edit" onclick="editTweet(this.id)"><span class="glyphicon glyphicon-edit"></span></button><button id="${item}" type="button" class="btn btn-xs btn-danger" title="Remove" onclick="removeTweet(this.id)"><span class="glyphicon glyphicon-remove"></span></button>`

        tr.appendChild(tdContent)
        tr.appendChild(tdactions)
        tbody.appendChild(tr)
        table.appendChild(tbody)
      }).catch((err) => {
          // This code runs if there were any errors
          console.log(err);
      })
    })
  }).catch((err) => {
    console.log(err)
  })
}

// save tweet
window.editTweet = function (itemkey) {
  localforage.getItem(itemkey).then((value) => {
    textareaHandler.value = value

    saveBTN.setAttribute('draftkey', itemkey)
    removeBTN.className = ''
    removeBTN.setAttribute('draftkey', itemkey)
    $('#modal_box').modal('hide')
  }).catch((err) => {
    console.log(err)
  })
}

// remove tweet
window.removeTweet = function (itemkey) {
  localforage.removeItem(itemkey).then(() => {
    textareaHandler.value = ''
    textareaHandler.focus()
    saveBTN.removeAttribute('draftkey')
    removeBTN.removeAttribute('draftkey')
    removeBTN.className = 'hidden'
  }).catch((err) => {
    console.log(err)
  })

  window.updateList()
}

// update table
window.updateList = () => {
  localforage.keys().then((keys) => {
    if (keys.length > 0) {
      if (document.getElementById('twd_table_body')) {
        document.getElementById('twd_table_body').remove()
      }
      
      getDrafts()
      document.getElementById('list_empty').className = 'text-center hidden'
    } else {
      try {
        document.getElementById('twd_table_body').remove()
      } catch (error) {
        console.log(error)
      } finally {
        document.getElementById('list_empty').className = 'text-center'
      }
    }
  })
}

init()