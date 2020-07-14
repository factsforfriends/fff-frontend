function showShareMenu(id) {
  closeAllShareMenus();
  var el = document.getElementById('share_' + id)
  if (!el.classList.contains('show')) {
    el.classList.add("show");
  }
}

function closeShareMenu(id) {
  document.getElementById('share_' + id).classList.remove("show");
}

function closeAllShareMenus() {
  var dropdowns = document.getElementsByClassName("sharemenu-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

function share(id, title, snack) {
  if (navigator.share) {
    navigator.share({
        title: title,
        text: snack,
        url: 'https://factsforfriends.de/snack/' + id
      }).then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
  } else {
    showShareMenu(id);
  }
}

function shareLink(id) {
  copyTextToClipboard('https://factsforfriends.de/snack/' + id);
  closeShareMenu(id);
}

function shareSourceLink(id, link) {
  copyTextToClipboard(link);
  closeShareMenu(id);
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text);
}

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

document.addEventListener("DOMContentLoaded", function (event) {
  var snacks = document.getElementsByClassName("fact_snack");
  var i;
  for (i = 0; i < snacks.length; i++) {
    var snack = snacks[i];
    console.log(isOverflown(snack))
    if (isOverflown(snack)) {
      snack.classList.add('fade-out-text')
    }
  }
});