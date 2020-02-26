export default {
    name: 'compose',
    template: `<section class="new-mail">
    <div>New Message</div>
    To:<input type="text">
    Cc:<input type="text">
    Bcc:<input type="text">
    Subject:<input type="text">
    <input type="textarea">
    <div>Send trash</div>
    <router-view></router-view>
    </section>`
}