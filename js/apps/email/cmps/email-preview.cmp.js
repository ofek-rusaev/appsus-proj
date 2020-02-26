export default {
    name: 'email-preview',
    template: `
     <section class="email-preview">
     
        <td class="email-item">{{email.from}}</td>
        <td lass="email-item">{{email.subject}}</td>
        <td class="email-item">{{email.body}}</td>
        <td class="email-item">{{email.sentAt}}</td>
    </section>
  `,
    props: ['email']
}