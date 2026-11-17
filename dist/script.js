const routePages = {
  '/product-development': ['Product development', 'Your next milestone, scoped before it is built.', 'Start from an idea, prototype or existing product and make the engineering decisions visible before the build starts.', [['The production slice', 'Start with one end-to-end workflow users can actually use. Agree what belongs in the release and what waits for later.'], ['Engineering around the product', 'Review code, dependencies, integrations and release responsibilities before estimating.'], ['Progress you can evaluate', 'Review working demonstrations against a written milestone plan.'], ['A considered handover', 'Set out ownership, deployment access, documentation and support before implementation begins.']]],
  '/product-scoping': ['Product scoping', 'Know what to build before you commit to the build.', 'A focused engagement for a consequential product decision. Leave with a plan you can discuss with your team or budget owner.', [['Start with the milestone', 'Establish the users, objective and constraints, then separate essential functionality from the later backlog.'], ['A concrete planning package', 'Leave with priorities, architecture direction, dependencies, risks and an implementation estimate.'], ['A useful decision, even if you pause', 'The conclusion may be to build smaller, change an assumption, use an existing tool or wait.'], ['Bring what you already have', 'A short brief, prototype or repository overview is enough to begin.']]],
  '/process': ['How we work', 'Make the next decision easier at every stage.', 'Scope, progress and responsibility stay visible from the first brief through handover.', [['Discuss the milestone', 'Tell us where the product is now, what needs to change and who will use it.'], ['Scope and propose', 'Define deliverables, exclusions, dependencies, estimate and acceptance criteria.'], ['Agree the terms', 'Confirm scope, payment, ownership, licenses, review process and support responsibilities.'], ['Review working software', 'Build toward a defined milestone with demonstrations and written decisions.'], ['Accept and hand over', 'Complete acceptance evidence, documentation, deployment and access handover.'], ['Plan what follows', 'Discuss support needs and the next release after the current milestone.']]],
  '/about': ['About Yonatan', 'An engineer you can talk to from scope to handover.', 'A focused product and engineering practice for teams that need a clear next move.', [['Work directly together', 'The person making the technical decisions is the person you speak to.'], ['Experience beyond a screen', 'Bring web, mobile, backend, integrations and deployment into one considered system.'], ['Working principles', 'Agree the scope, raise risks early, write down decisions and leave a system others can understand.'], ['Based where you are', 'Collaboration hours and meeting cadence are agreed around the project.']]],
  '/work': ['Selected work', 'A directory of products, experiments and engineering contributions.', 'Each entry explains the problem, the ownership and the part Yonatan contributed.', [['Client products', 'Add verified case studies, live links and the specific engineering contribution here.'], ['Internal tools', 'Show the systems that make delivery, planning and handover easier.'], ['Experiments', 'Publish small technical explorations when they are useful and finished.']]],
  '/start-a-project': ['Start a conversation', 'Tell me what needs to happen next.', 'Where is your product now, and what milestone are you working toward? A short description is enough to begin.', [['Review the brief', 'I review fit, dependencies and the decision you need to make.'], ['Ask focused questions', 'I reply with the next useful step where more context is needed.'], ['Agree a clear engagement', 'If there is a fit, we define the scope, timing and next steps separately.']]]
};

const routeKey = window.location.pathname.replace(/\/$/, '') || '/';
const route = routePages[routeKey];
const main = document.querySelector('#main-content');
if (route && main) {
  document.title = `${route[0]} — Yonatan`;
  main.innerHTML = `<section class="detail-hero section-pad"><p class="detail-kicker">${route[0]}</p><h1>${route[1]}</h1><p>${route[2]}</p><a class="button button-blue" href="/start-a-project">Discuss a project</a></section><section class="detail-body section-pad"><div class="detail-list">${route[3].map((item, index) => `<article class="detail-row" id="detail-${index + 1}"><span>${String(index + 1).padStart(2, '0')}</span><div><h2>${item[0]}</h2><p>${item[1]}</p></div></article>`).join('')}</div><aside class="page-toc"><strong>On this page</strong>${route[3].map((item, index) => `<a href="#detail-${index + 1}">${item[0]}</a>`).join('')}</aside></section>`;
}

if (routeKey === '/start-a-project' && main) {
  const list = main.querySelector('.detail-list');
  list?.insertAdjacentHTML('beforeend', '<form class="contact-form detail-form" id="contact-form" data-endpoint=""><label for="route-name">Your name<input id="route-name" name="name" required /></label><label for="route-email">Work email<input id="route-email" name="email" type="email" required /></label><label class="full-width" for="route-milestone">What is the next milestone or problem?<textarea id="route-milestone" name="milestone" rows="6" required></textarea></label><button class="button button-dark submit-button" type="submit">Send project inquiry</button><p class="form-note" id="form-note" aria-live="polite">Your details are used to review and reply to your inquiry.</p></form>');
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const startingPointData = {
  idea: { title: 'Turn the idea into a clear first milestone.', copy: 'We can shape the problem, define the essential workflow, and decide what is worth building first.', stage: 'early-direction', focus: 'I have an idea and want to define the clearest first milestone.' },
  broken: { title: 'Find the stuck point and make it work again.', copy: 'We can review the existing flow or code, isolate the problem, and agree the smallest useful fix.', stage: 'existing-product', focus: 'Something is broken. I want help finding the cause and deciding the smallest useful fix.' },
  next: { title: 'Move a working product into its next version.', copy: 'We can prioritize the next release, connect the needed pieces, and ship a milestone the team can review.', stage: 'existing-product', focus: 'We need the next version of a working product and want to define the next milestone.' }
};
const startingPointAnswer = document.querySelector('#starting-point-answer');
document.querySelectorAll('.starting-point-option').forEach((option) => option.addEventListener('click', () => {
  const data = startingPointData[option.dataset.startingPoint];
  document.querySelectorAll('.starting-point-option').forEach((item) => { item.classList.remove('is-active'); item.setAttribute('aria-selected', 'false'); });
  option.classList.add('is-active'); option.setAttribute('aria-selected', 'true');
  if (startingPointAnswer) startingPointAnswer.innerHTML = `<h3>${data.title}</h3><p>${data.copy}</p><a class="quiet-link" href="#contact">Start with the context</a>`;
  const stage = document.querySelector('#inq-stage');
  const focus = document.querySelector('#inq-focus');
  if (stage) stage.value = data.stage;
  if (focus) focus.value = data.focus;
}));

const closingMark = document.querySelector('.closing-mark');
if (closingMark && 'IntersectionObserver' in window) {
  const markObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      closingMark.classList.add('is-visible');
      markObserver.disconnect();
    }
  }, { threshold: 0.22 });
  markObserver.observe(closingMark);
} else {
  closingMark?.classList.add('is-visible');
}

const form = document.querySelector('#contact-form');
const note = document.querySelector('#form-note');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const submit = form.querySelector('.submit-button');
  const endpoint = (form.dataset.endpoint || '').trim();
  const payload = Object.fromEntries(new FormData(form).entries());

  submit.disabled = true;
  submit.textContent = endpoint ? 'Sending…' : 'Endpoint needed';

  if (!endpoint) {
    note.textContent = 'The form is ready. Connect the contact endpoint before publishing to receive inquiries.';
    note.style.color = 'var(--ink)';
    submit.disabled = false;
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Request failed');
    note.textContent = 'Thanks — your inquiry is on its way.';
    note.style.color = 'var(--ink)';
    form.reset();
    submit.textContent = 'Inquiry sent';
  } catch {
    note.textContent = 'The inquiry could not be sent. Please try again or use another contact route.';
    note.style.color = 'var(--ink)';
    submit.textContent = 'Try again';
  } finally {
    submit.disabled = false;
  }
});
