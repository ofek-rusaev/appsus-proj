export default {
    name: 'email-preview',
    template: `
     <section>
        <h1>preview</h1>
            <h4>{{email.subject}}</h4>
            <div>{{email.body}}</div>
            <div>{{email.sentAt}}</div>
        </section>
  `,
    props: ['email']
}