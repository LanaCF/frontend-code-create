const doc = document;

const display = doc.querySelector('.display');

const formTag = doc.forms.formTag;
const tag = formTag.tag;
const selectBtnTag = formTag.selectBtnTag;

const formTagCreate = doc.forms.formTagCreate;
const addNewTag = formTagCreate.addNewTag;
const addTagBtn = formTagCreate.addTagBtn;

const formInfo = doc.forms.formInfo;
const addText = formInfo.addText;
const addClass = formInfo.addClass;
const addLink = formInfo.addLink;
const addSrc = formInfo.addSrc;
const addStyle = formInfo.addStyle;
const addTextBtn = formInfo.addTextBtn;
const addClassBtn = formInfo.addClassBtn;
const addLinkBtn = formInfo.addLinkBtn;
const addSrcBtn = formInfo.addSrcBtn;
const errorLink = doc.querySelector('.error-link');
const errorSrc = doc.querySelector('.error-src');

const formStyle = doc.forms.formStyle;
const addStyleBtn = formStyle.addStyleBtn;

selectBtnTag.onclick = function() {
  const options = tag.options;
  const index = tag.selectedIndex;
  const label = options[index].label;

  const newTag = doc.createElement(label);

  display.append(newTag);

  const lastAddedTag = display.lastElementChild;

  addTextBtn.onclick = function() {
    const valueText = addText.value;
    lastAddedTag.innerHTML = valueText;  
    formInfo.reset();
  }

  addClassBtn.onclick = function() {
    const valueClass = addClass.value;
    lastAddedTag.className = `${valueClass}`;
    formInfo.reset();
  }

  addLinkBtn.onclick = function() {
    const valueLink = addLink.value;

    if (lastAddedTag.tagName.toLowerCase() === 'a') {
      lastAddedTag.href = `${valueLink}`;
      errorLink.style.display = 'none';
    } else {
      errorLink.style.display = 'contents';
    }

    formInfo.reset();
  }

  addSrcBtn.onclick = function() {
    const valueSrc = addSrc.value;

    if (lastAddedTag.tagName.toLowerCase() === 'img') {
      lastAddedTag.src = `${valueSrc}`;
      errorSrc.style.display = 'none';
    } else {
      errorSrc.style.display = 'contents';
    }

    formInfo.reset();
  }

  addStyleBtn.onclick = function() {
    const valueStyle = addStyle.value;
    lastAddedTag.style.cssText = valueStyle;

    formStyle.reset();
  }

  formInfo.reset();
}

addTagBtn.onclick = function() {
  const valueTag = addNewTag.value;

  const optionTag = new Option(valueTag, valueTag);
  tag.append(optionTag);
  formTagCreate.reset();
}







console.log();



