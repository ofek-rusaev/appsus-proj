export default {
    name: 'compose',
    template: `<section class="new-mail">
    <div class="new-msg">New Message</div>
    <div class="flex">To:<input class="txt-inupt" type="text" name="To"></div>
    <div class="flex">CC:<input type="text" class="txt-inupt" name="Cc"></div>
    <div class="flex">Bcc:<input type="text"></div>
    <div class="flex">Subject:<input type="text"></div>
    <div class="flex"><textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea></div>
    <div class="email-bottom flex"><button>Send</button><span>🗑️</span></div>
    </section>`
}