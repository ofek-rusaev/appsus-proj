export default {
    name: 'email-preview',
    template: `
     <section >
        <div class="card">
        <h1>preview</h1>
            <h4>{{email.subject}}</h4>
            <div>{{email.body}}</div>
            <div>{{email.sentAt}}</div>
        </div>
        </section>
  `,
    props: ['email']
}