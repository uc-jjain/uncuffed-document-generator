/* =====================================================
   THE UNCUFFED PROJECT — DOCUMENT GENERATOR
   app.js — Complete template library (all ~118 docs)
   Static content preserved exactly. Only variable
   fields are exposed as form inputs.
   ===================================================== */

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  UTILITY HELPERS
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function fmtDate(dateStr) {
  if (!dateStr) return '[Date]';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
function fmtDateShort(dateStr) {
  if (!dateStr) return '[Date]';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
function V(val, fallback) { return (val && val.trim()) ? val.trim() : (fallback || '[__________]'); }
function wrap(html) {
  return `<div class="doc-preview">
    <div class="lh-header">
      <div class="lh-logo-col">
        <img src="letterhead-assets/image1.png" alt="The Uncuffed Project" class="lh-logo-img"/>
        <div class="lh-address">690 Walnut Ave. #210<br/>Vallejo, CA 94592</div>
      </div>
      <div class="lh-seal-col">
        <img src="letterhead-assets/image2.png" alt="Seal" class="lh-seal-img"/>
        <div class="lh-phone">(707) 563-5384</div>
      </div>
    </div>
    <hr class="lh-divider"/>
    <div class="lh-watermark"><img src="letterhead-assets/image2.png" alt="" aria-hidden="true"/></div>
    <div class="lh-body">${html}</div>
    <div class="lh-footer">
      <p>&copy; 2026 The Uncuffed Project, Inc. All Rights Reserved.</p>
      <p><em>This document contains confidential and proprietary information. Unauthorized use without explicit written permission is prohibited.</em></p>
    </div>
  </div>`;
}
function sig(name, title) {
  return `<div class="doc-sign" style="margin-top:32px">
    <p class="doc-sign-cursive">${V(name,"D\u00e1mon L. Cook\u00eb")}</p>
    <p class="doc-sign-name"><strong>${V(name,"D\u00e1mon L. Cook\u00eb")}</strong></p>
    <p class="doc-sign-title">${V(title,"Chief Executive Officer<br/>The Uncuffed Project, Inc.")}</p>
  </div>`;
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  ALL TEMPLATES
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const TEMPLATES = [

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  ACCEPTANCE LETTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'gen-acceptance', title:'General Acceptance Letter', category:'acceptance',
    desc:'Standard conditional housing acceptance for a justice-impacted individual.',
    sourceFile:'General Acceptance Letter.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. James Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.','Dr.']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Co-Founder & CEO, The Uncuffed Project, Inc.'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p><p>${V(d.prefix)} ${V(d.client_name)},</p>
      <p>My name is ${V(d.signed_by,'D\u00e1mon L. Cook\u00eb')}, Co-Founder and Chief Executive Officer of The Uncuffed Project, Inc., a nonprofit organization dedicated to supporting justice-impacted individuals through transitional housing, care coordination, educational opportunities, and reentry support services designed to promote long-term stability and successful community reintegration.</p>
      <p>This letter serves as confirmation that <strong>${V(d.client_name)}</strong> has been conditionally approved for placement within one of The Uncuffed Project's transitional housing programs. This approval is contingent upon final intake procedures, program eligibility verification, bed availability, and compliance with all program requirements, policies, and expectations.</p>
      <p>As part of our review and placement process, we carefully assess each applicant's circumstances to determine whether our program can provide an appropriate level of support during their transition from incarceration to community living. Based upon the information available to us at the time of review, we believe that participation in our program may provide access to a structured and supportive environment that encourages stability, accountability, personal growth, and successful reintegration into the community.</p>
      <p>The Uncuffed Project provides transitional housing alongside supportive services intended to help participants navigate the challenges commonly associated with reentry. Depending upon individual needs and program availability, participants may have access to resource navigation, care coordination, transportation assistance for approved appointments and program-related activities, educational opportunities, life skills development, assistance obtaining vital documents, referrals to community-based services, and other supports designed to promote long-term self-sufficiency.</p>
      <p>Participants may also be paired with a Care Navigator, Credible Messenger, mentor, or other designated support staff who can provide guidance, encouragement, accountability, and assistance in accessing available resources. Through lived experience, professional training, and ongoing support, our team works to help participants establish realistic goals, strengthen decision-making skills, and develop a foundation for long-term success.</p>
      <p>The Uncuffed Project recognizes that successful reentry is a process that requires commitment, accountability, and active participation from each individual served. While no program can guarantee outcomes, we are prepared to provide a structured environment and meaningful opportunities that support rehabilitation, stability, personal responsibility, and positive community reintegration.</p>
      <p>This letter confirms conditional acceptance into a transitional housing program operated by The Uncuffed Project and does not constitute a lease agreement, tenancy, permanent housing placement, employment guarantee, or assurance of future outcomes. Continued participation is subject to adherence to program policies, housing guidelines, and all applicable program requirements.</p>
      <p>Thank you for your time and consideration.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'290-acceptance', title:'PC 290 Acceptance Letter', category:'acceptance',
    desc:'Acceptance into PC 290-compliant housing. Preserves original letter language.',
    sourceFile:'290 Acceptance Letter.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Sean Saulnier'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Co-Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>This letter serves as confirmation that ${V(d.client_name)} has been conditionally approved for placement within one of our transitional housing programs designed to accommodate individuals subject to registration requirements under California Penal Code Section 290. This approval is contingent upon final intake procedures, program eligibility verification, bed availability, and compliance with all program requirements.</p>
      <p>As part of our placement process, we carefully assess each applicant's circumstances to determine whether our program can provide an appropriate level of support during their transition from incarceration to community living. Based upon the information available to us at the time of review, we believe that our program may provide a structured and supportive environment that promotes stability, accountability, personal growth, and successful reintegration into the community.</p>
      <p>The Uncuffed Project offers transitional housing alongside supportive services intended to help participants navigate the challenges commonly associated with reentry. Depending upon individual needs and program availability, participants may receive assistance with resource navigation, care coordination, transportation support for approved appointments, educational programming, life skills development, and connections to community-based services that support long-term self-sufficiency.</p>
      <p>Participants may also be paired with a Credible Messenger, Care Navigator, mentor, or other designated support staff who can provide guidance, encouragement, accountability, and assistance in accessing available resources. Through lived experience, professional training, and ongoing support, our team works to help participants establish realistic goals, strengthen decision-making skills, and build a foundation for long-term success.</p>
      <p>The Uncuffed Project recognizes that successful reentry is a process that requires commitment, accountability, and active participation from each individual served. While no program can guarantee outcomes, we are prepared to provide a structured environment and meaningful opportunities that support rehabilitation, stability, personal responsibility, and community reintegration.</p>
      <p>This letter confirms conditional acceptance into a transitional housing program operated by The Uncuffed Project and does not constitute a lease agreement, tenancy, permanent housing placement, or guarantee of future outcomes. Continued participation is subject to adherence to program policies, housing guidelines, and all applicable program requirements.</p>
      <p>Thank you for your time and consideration.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'ecm-acceptance', title:'ECM Services Acceptance Letter', category:'acceptance',
    desc:'Acceptance into Enhanced Care Management (ECM) services "” not housing-specific.',
    sourceFile:'Acceptance Letter - Enhanced Care Management (ECM) Services {Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Maria Torres'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.','Dr.']},
      {id:'county',label:'County / Region (optional)',type:'text',placeholder:'e.g. Solano County'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Daniel Darling'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Justice-Impacted Coordinator, The Uncuffed Project'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>Re: Letter of Housing Placement Acceptance for ${V(d.prefix)} ${V(d.client_name)}</p>
      <p>To Whom It May Concern,</p>
      <p>On behalf of The Uncuffed Project, Inc., this letter serves as formal confirmation that ${V(d.prefix)} ${V(d.client_name)} has been accepted for participation in our Enhanced Care Management (ECM) services.</p>
      <p>The Uncuffed Project provides ECM services designed to support justice-impacted individuals with complex medical, behavioral health, and social needs, regardless of housing location. Acceptance into ECM services does not require placement in, or residency at, any Uncuffed Project housing site, and services may be provided even when an individual is paroling to or residing in another county or jurisdiction.</p>
      <p>Our ECM model is built to deliver care coordination, system navigation, and continuity of support across medical, behavioral health, reentry, and community-based services. This includes, but is not limited to, assistance with healthcare access, appointment coordination, transportation support, benefits navigation, linkage to treatment providers, and structured reentry stabilization services.</p>
      <p>Following a review of ${V(d.prefix)} ${V(d.client_name)}'s identified needs and circumstances, we have determined that they are appropriate for ECM engagement and that our organization is capable of providing the level of coordination and oversight required to support their successful reintegration and stabilization.</p>
      <p>Participation in ECM services through The Uncuffed Project is service-based only and should not be interpreted as a housing placement, residential admission, or guarantee of lodging. All services are delivered in alignment with applicable ECM guidelines and coordination requirements.</p>
      <p>Should additional verification or clarification be required, our team remains available to support inter-agency coordination and continuity of care.</p>
      <p>Thank you for your time and consideration.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'ecm-compliant-house', title:'ECM Compliant Houses Acceptance Letter', category:'acceptance',
    desc:'Acceptance into an ECM-compliant housing placement. Use for ECM-eligible clients placed in a compliant house.',
    sourceFile:'Acceptance Letter - Enhanced Care Management (ECM) Compliant Houses - Template {MAKE A COPY}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Franklin Taylor'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'housing_site',label:'Housing Site Name',type:'text',required:true,placeholder:'Uncuffed City'},
      {id:'housing_addr',label:'Housing Address',type:'text',required:true,placeholder:'97 Newell Ln. Vallejo, CA 94589'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>690 Walnut Ave. #210</p>
      <p>Vallejo, CA 94592</p>
      <p>December 10th, 2025</p>
      <p>Re: Letter of Housing Placement Acceptance for Mr. /Mrs.</p>
      <p>To Whom It May Concern,</p>
      <p>Our program includes all forms of medical facilitation, immediate essentials, educational tools, and long-term services to provide a smooth and healthy transition from incarceration to home. We also have a working model for empirical data to assist in the emotional intelligence and strong recidivism for those who may have participated in several forms of {violation/condition; e.g: Domestic Violence, Sexual Offense, Murder, etc}. such as ${V(d.prefix)} ${V(d.client_name)}./p>
      <p>We understand Mr. /Mrs.-----------'s journey and we know that certain situations can sometimes be the catalyst to preventing future criminal acts, however we like to increase that probability by introducing a soft curriculum for change. We will assign Mr. Bruce a personal "Credible Messenger" to assist in this navigation. No one should have to take this journey alone and that's why our program is so effective. The lived experience along with their extensive knowledge and facilitation in the field of Domestic Violence and Toxic Masculinity provides valuable insight.</p>
      <p>Thank you for your time and consideration in this matter.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'housing-acceptance', title:'Housing Placement Acceptance Letter', category:'acceptance',
    desc:'Formal acceptance letter for housing placement at an Uncuffed Project site.',
    sourceFile:'Acceptance Letter - Housing Placement {Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Chawa See'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'housing_site',label:'Housing Site Name',type:'text',required:true,placeholder:'Uncuffed City'},
      {id:'housing_addr',label:'Housing Address',type:'text',required:true,placeholder:'97 Newell Ln. Vallejo, CA 94589'},
      {id:'move_in',label:'Move-In Date (optional)',type:'date'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>June 10, 2026</p>
      <p>Re: Letter of Housing Placement Acceptance for Mr. Antone Lee</p>
      <p>To Whom It May Concern,</p>
      <p>On behalf of The Uncuffed Project, Inc., this letter serves as formal confirmation that Mr. Lee has been accepted for placement in one of our transitional housing programs, subject to final intake and onboarding procedures.</p>
      <p>Based on a review of available information related to reentry stabilization, we have determined that our program is an appropriate setting to support this transition.</p>
      <p>The Uncuffed Project provides structured transitional housing combined with wraparound reentry services, including access to immediate essentials, care coordination, educational tools, and long-term stabilization supports. Where applicable, transportation assistance may be available to support medical appointments, court obligations, or program-related needs.</p>
      <p>Participants may be assigned a Credible Messenger, care manager, or designated support staff to assist with navigation, accountability, and engagement. Our model emphasizes structured support, lived-experience mentorship, and accountability-based engagement, informed by experience in respite care, substance use recovery, trauma-informed care, or reentry services.</p>
      <p>This letter confirms housing placement acceptance within a transitional program operated by The Uncuffed Project and does not constitute a lease, tenancy, or permanent housing arrangement.</p>
      <p>Thank you for your time and consideration.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'early-application', title:'Early Application / Pre-Release Response Letter', category:'acceptance',
    desc:'Response to an inmate who has written requesting information or an early application for the program.',
    sourceFile:'Early Application Letter.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Inmate Name',type:'text',required:true,placeholder:'e.g. Marcus Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'release_county',label:'Release County / Area (optional)',type:'text',placeholder:'e.g. Solano County'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Co-Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>NAME</p>
      <p>Thank you for reaching out to The Uncuffed Project and for your interest in our program. We appreciate you taking the time to connect with us and share a part of your journey.</p>
      <p>To ensure we are able to thoughtfully assess each individual's needs and prepare appropriate support options, we begin our housing application process approximately six months prior to a person's anticipated release date. At that time, we would be happy to send you an updated questionnaire so we can learn more about your circumstances, identify potential barriers to reentry, and explore resources that may help support your transition back into the community.</p>
      <p>While we are unable to begin the housing application process at this time, we encourage you to begin engaging with our program before your release. The Uncuffed Project offers correspondence courses designed specifically for justice-impacted individuals. These courses provide educational opportunities, personal development tools, and encouragement intended to support growth, accountability, and preparation for successful reentry.</p>
      <p>If you are interested in participating, simply send us a letter and one of our Care Navigators will be happy to assist you, answer questions about our available courses, and help you get started. Participation in these programs can be a meaningful way to begin building skills and preparing for the opportunities and responsibilities that come with returning home.</p>
      <p>At The Uncuffed Project, we believe that preparation for a successful transition begins long before release. While no program can guarantee outcomes, we are committed to providing resources, education, and opportunities that help individuals work toward stability, independence, and positive community reintegration.</p>
      <p>We appreciate your interest in our organization and look forward to the opportunity to learn more about you as you move closer to your release date.</p>
      <p>With respect and encouragement,</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  DENIAL LETTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'gen-denial', title:'General Denial Letter', category:'denial',
    desc:'General denial "” not a reflection of character but of current capacity or eligibility.',
    sourceFile:'General Denial Letter.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Eric Eleson'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Co-Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>To Whom It May Concern,</p>
      <p>Thank you for taking the time to apply to The Uncuffed Project, Inc. and for your interest in our reentry and transitional housing programs. We appreciate the effort you have invested in planning for your transition and the opportunity to review your application.</p>
      <p>After careful consideration of your application and the information available to us at this time, we regret to inform you that we are unable to offer placement in our program. This decision was made following a review of program capacity, eligibility considerations, available resources, and our ability to appropriately meet the needs of applicants seeking services.</p>
      <p>Because each application is unique, our decisions are based upon a variety of factors related to program operations, housing availability, participant needs, and organizational capacity. As a result, an inability to offer placement should not be interpreted as a reflection of your character, your efforts, or your potential for success.</p>
      <p>We recognize that preparing for reentry can be challenging, and we commend you for taking proactive steps to seek support and plan ahead. The willingness to explore resources and opportunities before release is an important part of building a stable foundation for the future.</p>
      <p>Although we are unable to provide placement at this time, we have enclosed information regarding programs, services, and community resources that may be available to assist you. These referrals are provided in the hope that they may help connect you with housing, support services, educational opportunities, treatment programs, or other resources that align with your individual needs and goals.</p>
      <p>While we cannot guarantee acceptance into any outside program, we encourage you to review the enclosed information with your counselors, case managers, parole representatives, or reentry planning staff to identify opportunities that may be available to you upon release.</p>
      <p>At The Uncuffed Project, we believe that every individual deserves the opportunity to pursue stability, growth, and a successful transition home. We appreciate your interest in our organization and wish you continued progress as you prepare for your future.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'unable-to-accept', title:'Denial — Unable to Accept into Program', category:'denial',
    desc:'Formal denial with specific reason categories. Uses {Template} language.',
    sourceFile:'Denial Letter - Unable to Accept into our Program {Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Eric Eleson'},
      {id:'denial_reason',label:'Primary Reason for Denial',type:'select',required:true,options:['Program capacity limitations','Criminal history considerations that exceed the scope of our current program model','Medical conditions requiring clinical care beyond what our program is licensed to provide','Behavioral health needs requiring a higher level of psychiatric intervention','Functional or mobility limitations that cannot be safely supported within our program','Incompatibility with current program structure or eligibility criteria']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Daniel Darling'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Justice-Impacted Coordinator, The Uncuffed Project'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>Re: Program Admission Determination —  </p>
      <p>To Whom It May Concern,</p>
      <p>This letter serves as formal notification that ${V(d.prefix)} ${V(d.client_name)} is not being accepted into The Uncuffed Project's program at this time, following a review of available referral information and intake materials.</p>
      <p>Admission decisions are based on a combination of program scope, capacity, safety considerations, and appropriateness of fit. After careful review, we have determined that we are unable to offer placement or services at this time due to one or more of the following factors, which may include but are not limited to:</p>
      <p>Criminal history considerations that exceed the scope, risk tolerance, or supervision structure of our current program model</p>
      <p>Medical conditions or medical history requiring a level of clinical care, monitoring, or accommodation beyond what our program is licensed or staffed to provide</p>
      <p>Behavioral health needs that necessitate a higher level of psychiatric, residential, or clinical intervention than is available within our services</p>
      <p>Functional or mobility limitations that cannot be safely supported within the physical layout or staffing capacity of the program at this time</p>
      <p>Program capacity limitations, including bed availability, staffing ratios, or funding restrictions</p>
      <p>Incompatibility with current program structure, supervision requirements, or eligibility criteria as determined during intake review</p>
      <p>This determination is not a judgment of character or potential and does not preclude ${V(d.prefix)} ${V(d.client_name)} from seeking services with other providers or from being reconsidered in the future should circumstances, program capacity, or eligibility factors change.</p>
      <p>This letter is provided for documentation and referral purposes only and does not create any obligation for placement, services, or future admission.</p>
      <p>Thank you for your understanding.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'medical-denial', title:'Medical Denial Letter', category:'denial',
    desc:'Denial based solely on medical needs exceeding current program capacity.',
    sourceFile:'Denial Letter - Due to Medical Conditions - Template {MAKE A COPY}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Eric Eleson'},
      {id:'medical_note',label:'Specific Medical Concern (optional)',type:'textarea',placeholder:'e.g. mobility limitations requiring ADA accommodations not currently available in our facilities'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Daniel Darling'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Justice-Impacted Coordinator, The Uncuffed Project'},
    ],
    generate(d){return wrap(`
      <p>690 Walnut Ave. #210</p>
      <p>Vallejo, CA 94592</p>
      <p>December 10th, 2025</p>
      <p>Re: Denial Letter due to Medical Conditions for Mr. /Mrs.</p>
      <p>To ${V(d.client_name)},</p>
      <p>Thank you for taking the time to apply to The Uncuffed Project, Inc. and for your interest in participating in our reentry and transitional housing programs. We acknowledge the effort it takes to plan for reentry, and we respect the work you are doing to prepare for your next steps.</p>
      <p>After careful review of your application and the information provided, we regret to inform you that we are unable to offer placement in our program at this time. This determination is based solely on our current inability to safely and appropriately accommodate certain medical needs within the scope of services and staffing structure available at our facilities.</p>
      <p>Please understand that this decision is not a judgment of you, your character, or your readiness for change. Our programs are designed to operate within specific clinical, medical, and operational parameters. When an applicant's medical needs exceed what we are licensed, staffed, or equipped to support, we are required to make decisions that prioritize safety, continuity of care, and regulatory compliance"”for both the individual and the community we serve.</p>
      <p>We recognize how difficult it can be to receive a decision like this, particularly while incarcerated, and we want to be clear that your application was taken seriously and reviewed with care. In some cases, individuals may become eligible in the future if their medical needs change or if our service capacity expands.</p>
      <p>We encourage you to continue working with your institutional counselors, medical providers, and reentry planners to identify programs that are better equipped to meet your specific medical requirements upon release. Your commitment to planning ahead is important and meaningful.</p>
      <p>We appreciate your interest in The Uncuffed Project, Inc., and we wish you strength, clarity, and continued progress as you prepare for reentry.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'additional-info', title:'Additional Information Request Letter', category:'denial',
    desc:'Letter requesting one additional piece of information before making a housing determination.',
    sourceFile:'Additional Info Letter.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Marcus Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'question',label:'Specific Question to Ask',type:'textarea',required:true,placeholder:'e.g. Could you please clarify the nature of your current supervision requirements and any upcoming court obligations?'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Chief Executive Officer'},
    ],
    generate(d){return wrap(`
      <p>To Whom It May Concern,</p>
      <p>Thank you for taking the time to complete and submit your application for housing assistance through The Uncuffed Project. We appreciate the trust you have placed in our organization and recognize the importance of securing appropriate support as you prepare for your transition back into the community.</p>
      <p>Each application is carefully reviewed to ensure we have a thorough understanding of an individual's circumstances, needs, and potential support requirements. Our goal is to make informed decisions that promote stability, accountability, and the best possible opportunity for a successful reentry experience.</p>
      <p>As part of our review process, we have one additional question regarding your application:</p>
      <p>${V(d.question)}</p>
      <p>Thank you for your time and cooperation. We look forward to receiving your response and continuing the review process.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'info-request', title:'Information Request Response Letter', category:'denial',
    desc:'General response to an inmate who wrote requesting program information.',
    sourceFile:'Information Request  {Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Inmate Name or Title',type:'text',required:true,placeholder:'e.g. Mr. Drake'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Damon Cooke'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Co-Founder and CEO'},
    ],
    generate(d){return wrap(`
      <p>4.15.26</p>
      <p>Re: Information Request</p>
      <p>Dear Mr. Drake,</p>
      <p>We are writing in response to your request for information about The Uncuffed Project, Inc.</p>
      <p>Thank you for reaching out. Receipt of this letter does not indicate acceptance into any program or guarantee of services.</p>
      <p>If you are interested in being considered for services after release, information that is typically reviewed during an intake process may include, but is not limited to:</p>
      <p>Anticipated release date and release location</p>
      <p>Supervision status upon release</p>
      <p>General criminal history considerations</p>
      <p>Medical or behavioral health needs</p>
      <p>Functional or mobility considerations</p>
      <p>Identified reentry needs, such as housing or support services</p>
      <p>Each request is reviewed on an individual basis. Program participation, services, or placement; if available; are subject to eligibility requirements, capacity, and appropriateness of fit at the time of review.</p>
      <p>You are encouraged to share the enclosed general information with your support network, reentry staff, or others who may assist you in planning for release.</p>
      <p>We wish you the best as you continue preparing for your transition.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'specific-info-request', title:'Specific Information Request Letter', category:'denial',
    desc:'A personalized letter with a specific body message/question for an individual inmate.',
    sourceFile:'Specific Information Request Template.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Inmate Name',type:'text',required:true,placeholder:'e.g. Mr. Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'body',label:'Letter Body / Personal Message',type:'textarea',required:true,placeholder:'Write the specific message or questions for this individual here...'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Daniel Darling'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Justice-Impacted Coordinator'},
    ],
    generate(d){return wrap(`
      <p>January 6, 2026</p>
      <p> ,,</p>
      <p>{This is where the body of any personal and/or specific questions regarding our program is written here.}</p>
      <p>Thank you for your time and consideration in this matter.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'illegible-handwriting', title:'Illegible Handwriting Response Letter', category:'denial',
    desc:'Response when a received letter cannot be read due to illegible handwriting.',
    sourceFile:'Illegible Handwriting Response Letter Template v.4.28.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Inmate Name',type:'text',required:true,placeholder:'e.g. Marcus'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>DATE</p>
      <p>Dear NAME,</p>
      <p>First and foremost, we want to acknowledge and appreciate you for reaching out to us. Taking the time to write a letter, especially from where you are, is not something we take lightly. It shows initiative, effort, and a willingness to connect, and that matters.</p>
      <p>We want to be fully transparent with you. We received your letter, but we are having difficulty reading and understanding parts of the message due to the handwriting. Because of this, we are concerned that we may not be able to fully understand your thoughts, your story, or what kind of support you are asking for.</p>
      <p>Our goal is to make sure that when someone reaches out to Uncuffed, they are heard clearly and connected to the right support. We have different people on our team who specialize in different areas, and we want to make sure your message gets into the hands of the person best equipped to respond to you. In order for that to happen, we need to be able to clearly read your letter.</p>
      <p>We are asking for your help with this.</p>
      <p>If possible, please rewrite your letter in a way that is easier to read. You can also ask someone in your unit, pod, or housing area to help transcribe your message using clear, simple handwriting that is similar to what you would see in printed books. This is not a criticism of you in any way. Everyone writes differently. This is simply about making sure your voice comes through clearly so we can support you the way you deserve.</p>
      <p>If you need additional paper, envelopes, or writing materials to do this, please let us know. We are willing to assist in making sure you have another opportunity to reach out.</p>
      <p>We want you to know this: your effort was not ignored, and your letter was not thrown away. We have securely kept your original letter on file, and we are returning a copy to you so you can see that your message was received and is being taken seriously.</p>
      <p>We are here, and we are willing to work with you. We just need your help to meet us halfway so we can fully understand you and respond in a meaningful way.</p>
      <p>We look forward to hearing from you again.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'legal-parole-response', title:'Inmates Requesting Legal / Parole Help Response', category:'legal',
    desc:'Response to incarcerated individuals seeking legal or parole assistance.',
    sourceFile:'Inmates Requesting Legal - Parole Help Response Letter Template v.4.28.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Inmate Name',type:'text',required:true,placeholder:'e.g. Marcus Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Dear Name,</p>
      <p>Thank you for taking the time to write to us and share your situation. We acknowledge that you have put effort into explaining your experiences, and we want you to know that your letter was received, reviewed, and taken seriously.</p>
      <p>You shared concerns regarding your incarceration, including your belief that you have been neglected by CDCR and the Board of Parole Hearings, as well as your understanding of your eligibility for parole consideration, including elderly release. You also expressed that you are seeking assistance with legal and parole-related matters.</p>
      <p>We want to be clear and transparent about how we can best support you.</p>
      <p>At this time, we do not have enough specific information about your case to provide meaningful guidance or direction. In order for us to understand your situation fully and determine whether we can assist, we need more detailed information from you.</p>
      <p>Please provide the following:</p>
      <p>Your original charge(s) and conviction details</p>
      <p>Your sentence (including whether it is Life Without Parole or Life With the Possibility of Parole)</p>
      <p>Any parole hearing dates you have had and the outcomes</p>
      <p>Any documentation or explanation you received from the Board of Parole Hearings regarding denials</p>
      <p>Clarification on what you are currently requesting(for example: resentencing, reconsideration, legal advocacy, or general guidance)</p>
      <p>It is important to understand that parole decisions and eligibility are based on multiple factors, including legal classification of your sentence, institutional behavior, rehabilitation efforts, and Board determinations. Meeting one criterion, such as age, does not automatically guarantee release or a change in sentence status.</p>
      <p>Our goal is not to dismiss your concerns, but to make sure we are working with accurate and complete information so that we can respond responsibly and effectively.</p>
      <p>We also want you to know this:</p>
      <p>Your effort was not ignored, and your letter was not thrown away. We are here, and we are willing to work with you. We just need your help to meet us halfway so we can fully understand your situation and respond in a meaningful way.</p>
      <p>For your records and peace of mind, we have retained your original letter and are returning a copy to you so you know your correspondence remains active with us.</p>
      <p>Once we receive the additional information listed above, we will review your case more thoroughly and determine the appropriate next steps.</p>
      <p>We appreciate you reaching out and look forward to your response.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  RESIDENCY / ADDRESS VERIFICATION
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'letter-of-residency', title:'Letter of Residency', category:'residency',
    desc:'Verifies a client is residing at an Uncuffed Project housing facility. Blank template.',
    sourceFile:'The Uncuffed Project, Inc. - Letter of Residency {Blank Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Legal Name',type:'text',required:true,placeholder:'e.g. Joshua Snelling'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'street',label:'Street Address',type:'text',required:true,placeholder:'97 Newell Ln.'},
      {id:'city_state_zip',label:'City, State ZIP',type:'text',required:true,placeholder:'Vallejo, CA 94589'},
      {id:'effective_date',label:'Effective / Start Date (optional)',type:'date'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & Chief Executive Officer (CEO)'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>To Whom It May Concern,</p>
      <p>This letter serves as formal verification that ${V(d.client_name)} is currently assigned to and residing within a supervised housing placement operated by The Uncuffed Project, Inc., as part of our structured housing and reentry services.</p>
      <p>Assigned Program Location:${V(d.street)}<br/>${V(d.city_state_zip)}</p>
      <p>The above address reflects the client's current program-based residential assignment as of ${fmtDate(d.effective_date)}. This placement is administered, monitored, and overseen by The Uncuffed Project, Inc. in accordance with our internal housing protocols and service model.</p>
      <p>Please note that this housing assignment is program-based in nature and is provided as part of a temporary, transitional placement within a supervised service environment. The Uncuffed Project, Inc. retains administrative oversight of the placement and related operations.</p>
      <p>This letter is issued upon request for verification purposes only.</p>
      <p>Should you require additional confirmation or have questions regarding this verification, inquiries may be directed to our administrative office.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'proof-of-residency', title:'Proof of Residency Letter (Master Template)', category:'residency',
    desc:'General proof of residency confirming a client lives at Uncuffed City.',
    sourceFile:'The Uncuffed Project, Inc. - Proof of Residency for CLIENT_NAME {MASTER TEMPLATE, MAKE A COPY}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. John Hill'},
      {id:'prefix',label:'Salutation (Mr./Ms./His/Her)',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'housing_site',label:'Housing Site Name',type:'text',placeholder:'Uncuffed City'},
      {id:'housing_addr',label:'Housing Address',type:'text',placeholder:'97 Newell Ln. Vallejo, CA 94589'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:"Chief Executive Officer / Founder"},
    ],
    generate(d){return wrap(`
      <p>DATE, HERE</p>
      <p>To Whom It May Concern,</p>
      <p>This letter serves as formal verification that CLIENT NAME is an active participant in The Uncuffed Project, Inc. and is currently residing at our housing facility known as Uncuffed City, located at:</p>
      <p>97 Newell Ln.</p>
      <p>Vallejo, CA 94589</p>
      <p>Mr./Ms. CLIENT NAME is housed with us as part of his/her reentry stabilization plan. The Uncuffed Project, Inc. is a nonprofit reentry organization that provides structured housing, case management, and supportive services for justice-impacted individuals transitioning back into the community. His/her placement at this address is official and recognized within our program.</p>
      <p>This letter is being issued to confirm his place of residence for any verification purpose that requires documentation of housing status. If additional information or clarification is needed, our office may be contacted directly.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'proof-of-residency-290', title:'Proof of Residency for PC 290 Registrants', category:'residency',
    desc:'Proof of residency letter addressed to a police department for PC 290 registrants.',
    sourceFile:'The Uncuffed Project, Inc. - Proof of Residency for PC 290_s {Blank Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Adam Hill'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'recipient_dept',label:'Recipient Police Department',type:'text',required:true,placeholder:'Vallejo Police Department'},
      {id:'recipient_addr',label:'Recipient Address',type:'text',placeholder:'111 Amador St. Vallejo, CA 94590'},
      {id:'housing_addr',label:'Current Assigned Address',type:'text',required:true,placeholder:'97 Newell Ln. Vallejo, CA 94589'},
      {id:'as_of_date',label:'Residing As Of Date (optional)',type:'date'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & Chief Executive Officer (CEO)'},
    ],
    generate(d){return wrap(`
      <p>May 13th, 2026</p>
      <p>Subject: Proof of Residency for Adam Hill</p>
      <p>To: The Vallejo Police Department       111 Amador St.       Vallejo, CA 94590</p>
      <p>This letter serves as formal verification of the current residential assignment for                   Mr. Adam Hill, a PC 290 registrant who is an active participant in our supervised housing and reentry program.</p>
      <p>Please be advised of the Current Assigned Residence:</p>
      <p>Uncuffed City228 Newell Ln.Vallejo, CA 94589</p>
      <p>Mr. Hill currently resides at the above Uncuffed City location and this letter is provided as official documentation to support his registration update pursuant to Penal Code Â§ 290 requirements.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'address-verification', title:'Address Verification Letter (PC 290)', category:'residency',
    desc:'Official address verification letter for a PC 290 registrant.',
    sourceFile:'The Uncuffed Project, Inc. - Address Verification {BLANK TEMPLATE}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Jesse Hernandez'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'client_gender',label:'Client Gender (for pronouns)',type:'select',required:true,options:['Male (He/His)','Female (She/Her)','Non-binary (They/Their)']},
      {id:'recipient_dept',label:'Recipient Department',type:'text',required:true,placeholder:'Vallejo Police Department'},
      {id:'recipient_addr',label:'Recipient Address',type:'text',placeholder:'111 Amador St. Vallejo, CA 94590'},
      {id:'housing_site',label:'Housing Site Name',type:'text',placeholder:'Uncuffed City'},
      {id:'housing_addr',label:'Current Assigned Address',type:'text',required:true,placeholder:'97 Newell Ln. Vallejo, CA 94589'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & Chief Executive Officer (CEO)'},
    ],
    generate(d){
      const he = d.client_gender==='Female (She/Her)'?'she':(d.client_gender==='Non-binary (They/Their)'?'they':'he');
      const his = d.client_gender==='Female (She/Her)'?'her':(d.client_gender==='Non-binary (They/Their)'?'their':'his');
      const His = his.charAt(0).toUpperCase()+his.slice(1);
      return wrap(`
        <p>${fmtDate(d.date)}</p>
        <p>To Whom It May Concern,</p>
        <p>This correspondence serves as official verification that <strong>${V(d.prefix)} ${V(d.client_name)}</strong> is presently residing in ${d.housing_site?'<strong>'+V(d.housing_site)+'</strong>':''} emergency temporary shelter housing administered and overseen by The Uncuffed Project, Inc. under our Transitional and Rehabilitative Housing Initiative, which provides structured housing support and stabilization services to residents all over The Bay Area.</p>
        <p>${His} confirmed residential address is as follows:</p>
        <p style="margin-left:20px;">${d.housing_site?'<strong>'+V(d.housing_site)+'</strong><br/>':''}<strong>${V(d.housing_addr)}</strong></p>
        <p>${V(d.prefix)} ${V(d.client_name)} is currently in good standing as of this letter's date and is verified to be residing at the above address. This verification is provided at ${his} request for official record purposes.</p>
        <p>Should you require any additional confirmation, please do not hesitate to contact our administrative office at (707) 563-5383.</p>
        ${sig(d.signed_by,d.signed_title)}
      `);}
  },

  {
    id:'change-of-address', title:'Change of Address Verification (PC 290)', category:'residency',
    desc:'Notifies a police department of a PC 290 registrant\'s address change within program housing.',
    sourceFile:'The Uncuffed Project, Inc. - Change of Address Verification {NEW TEMPLATE} v.6.16.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Gregg Sayers'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'recipient_dept',label:'Recipient Department',type:'text',required:true,placeholder:'Vallejo Police Department'},
      {id:'recipient_addr',label:'Recipient Address',type:'text',placeholder:'111 Amador St. Vallejo, CA 94590'},
      {id:'prev_address',label:'Previous Address',type:'text',required:true,placeholder:'128 Wendy St. Vallejo, CA 94589'},
      {id:'new_address',label:'New Address',type:'text',required:true,placeholder:'Uncuffed City | Unit #101, 97 Newell Ln. Vallejo, CA 94589'},
      {id:'move_date',label:'Date of Move (optional)',type:'date'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & Chief Executive Officer (CEO)'},
    ],
    generate(d){return wrap(`
      <p>Thursday, May 7th, 2026</p>
      <p>To Whom It May Concern,</p>
      <p>This correspondence serves as official verification that Ms. Sabrina Villanueva is presently residing in emergency temporary shelter housing administered and overseen by The Uncuffed Project, Inc. under our Transitional and Rehabilitative Housing Initiative, which provides structured housing support and stabilization services to residents all over The Bay Area.</p>
      <p>Ms. Lara's confirmed residential address is as follows:</p>
      <p>Uncuffed City97 Newell Ln.Vallejo, CA 94589</p>
      <p>Ms. Lara is currently in good standing as of this letter's date and is verified to be residing at the above address as of the date of this letter. This verification is provided at her request for official record purposes.</p>
      <p>Should you require any additional confirmation, please do not hesitate to contact our administrative office at (707) 563-5383.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  EMPLOYMENT LETTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'employment-verification', title:'Employment Verification Letter', category:'employment',
    desc:'Verifies current employment status, title, pay rate, and hours.',
    sourceFile:'The Uncuffed Project, Inc. - Employment Verification Letter for Simione Hafoka v.7.8.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'employee_name',label:'Employee Full Name',type:'text',required:true,placeholder:'e.g. Simione Hafoka'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.','Dr.']},
      {id:'job_title',label:'Job Title',type:'text',required:true,placeholder:'e.g. Peer Support Specialist'},
      {id:'hourly_rate',label:'Hourly Rate ($/hr, optional)',type:'text',placeholder:'e.g. 24.75'},
      {id:'work_schedule',label:'Work Schedule (optional)',type:'text',placeholder:'e.g. Monday—Friday, 9 AM—5 PM'},
      {id:'employer_housing',label:'Employer-Sponsored Housing?',type:'select',options:['No','Yes']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & Chief Executive Officer (CEO)'},
    ],
    generate(d){
      let housing = d.employer_housing === 'Yes' ? `<p>As part of ${his} employment and program participation with The Uncuffed Project, Inc., ${V(d.prefix)} ${V(d.employee_name)} is currently being provided employer-sponsored housing.</p>` : '';
      return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>RE: Employment Verification for ${V(d.employee_name)}</p>
      <p>To Whom It May Concern:</p>
      <p>This letter serves as verification that ${V(d.employee_name)} is currently employed with The Uncuffed Project, Inc. as a ${V(d.job_title)}.</p>
      <p>${V(d.prefix)} ${V(d.employee_name)} is employed on a regular basis at an hourly rate of ${V(d.hourly_rate)} per hour. ${his} regularly scheduled work hours are ${V(d.work_schedule)}.</p>
      ${housing}
      <p>Should you require any additional information, please do not hesitate to contact our office.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'job-offer', title:'Job Offer Letter (Any Position)', category:'employment',
    desc:'Formal job offer letter for any position at The Uncuffed Project, Inc.',
    sourceFile:'Care Coordinator Job Offer Letter Template.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'employee_name',label:'Employee Full Name',type:'text',required:true,placeholder:'e.g. Alaina Jarrett'},
      {id:'job_title',label:'Job Title',type:'text',required:true,placeholder:'e.g. Care Coordinator'},
      {id:'department',label:'Department (optional)',type:'text',placeholder:'e.g. Client Services'},
      {id:'reports_to',label:'Reports To (optional)',type:'text',placeholder:'e.g. Clinical Operations Manager'},
      {id:'start_date',label:'Start Date',type:'date',required:true},
      {id:'compensation',label:'Compensation (Salary or Hourly)',type:'text',required:true,placeholder:'e.g. $25.00 /hr'},
      {id:'status',label:'Employment Status',type:'select',required:true,options:['Full-Time, Exempt','Full-Time, Non-Exempt','Part-Time, Non-Exempt']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>${V(d.employee_name)}</p>
      <p>${V(d.job_title)}</p>
      <p>Job Offer Letter</p>
      <p>Location: 690 Walnut Ave. Suite #210, Vallejo, CA 94592</p>
      <p>Department: ${V(d.department)}</p>
      <p>Reports To: ${V(d.reports_to)}</p>
      <p>Dear ${V(d.employee_name)},</p>
      <p>We are pleased to extend this formal offer for the position of ${V(d.job_title)} at The Uncuffed Project, Inc. This role reflects not only a job, but a mission — one that speaks to the heart of community healing, restorative pathways, and compassionate care for those navigating the toughest of life's transitions.</p>
      <p>Your background, passion, and values align with the work we do, and we believe you will make a meaningful impact here. As a full-time member of our team, you will be instrumental in supporting individuals through our intensive case management approach, helping them navigate systems of care, access essential services, and build sustainable goals toward personal growth and long-term stability.</p>
      <p>Position Overview</p>
      <p>As a ${V(d.job_title)}, your duties will include, but are not limited to:</p>
      <p>Maintaining consistent and supportive contact with assigned clients</p>
      <p>Conducting assessments and participating in care planning</p>
      <p>Coordinating services across mental health, substance use, housing, medical, and social service systems</p>
      <p>Advocating for client needs while upholding professional and ethical boundaries</p>
      <p>Documenting interactions, updating care plans, and collaborating with supervisors and team members</p>
      <p>Please refer to your Job Description for a full list of responsibilities and expectations</p>
      <p>This is a ${V(d.status)} position, with an expected schedule of 40 hours per week. Your exact work hours and schedule will be coordinated directly with your supervisor based on program needs. Compensation will be discussed and written in at the time of your acceptance.</p>
      <p>Compensation: ${V(d.compensation)}</p>
      <p>Commitment to Support & Accountability</p>
      <p>We are proud to foster a workplace that values growth, learning, and mutual respect. While this position is offered under an at-will employment agreement, meaning either party may end the relationship at any time with or without cause or notice, please know this: termination is never taken lightly nor done without cause or communication.</p>
      <p>We are committed to transparency, progressive corrective action, and every effort to support your success. Should performance issues arise, we will offer guidance, opportunities for improvement, and clearly documented expectations. It is only in the event of repeated and documented instances of noncompliance, disregard for responsibilities, or disruption to our operations, that we may find ourselves with no alternative but to end employment. Our hope is to never reach that point, and to always work collaboratively in upholding a workplace of integrity, care, and accountability.</p>
      <p>Next Steps</p>
      <p>If you choose to accept this offer, please sign and return this letter by ${fmtDate(d.start_date)}. Upon receipt of your acceptance, we will proceed with onboarding and preparing your orientation schedule.</p>
      <p>We are honored to offer you this opportunity and look forward to the positive change you will help us bring to our community. Your role matters. Your commitment matters. And your story is now part of something much bigger — a community built on second chances, dignity, and purpose.</p>
      <p>Welcome to The Uncuffed Project.</p>
      <p>Warmly,</p>
      <p>Executive Leadership</p>
      <p>Employee Acknowledgment & Agreement</p>
      <p>I, ${V(d.employee_name)}, accept the offer for the position of ${V(d.job_title)} at The Uncuffed Project, Inc. I acknowledge that this is an at-will position and that I have read and understood the expectations outlined in this offer letter. I agree to uphold the responsibilities of the role and to be held accountable to the mission, values, and standards of the organization.</p>
      <p>I understand that my performance will be evaluated based on these responsibilities and that failure to comply may result in corrective action, up to and including termination, in accordance with the policies of The Uncuffed Project, Inc. and its partner programs.</p>
      <p>By signing below, I agree to carry out these duties to the best of my ability, act in accordance with trauma-informed and ethical care practices, and maintain the confidentiality and dignity of every participant I serve.</p>
      <p>Signature: ____________________________________________Date:_____________</p>
      <p>Employee Name: ${V(d.employee_name)}</p>
      <p>Signature: ____________________________________________Date:_____________</p>
      <p>Leadership Name: _____________________________________</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'internship-offer', title:'Internship Job Offer Letter', category:'employment',
    desc:'Formal internship offer letter.',
    sourceFile:'The Uncuffed Project, Inc. - Internship Job Offer Letter for Yasmine Shoukeh v.4.30.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'employee_name',label:'Intern Full Name',type:'text',required:true,placeholder:'e.g. Yasmine Shoukeh'},
      {id:'job_title',label:'Internship Title',type:'text',required:true,placeholder:'e.g. Program Intern — Reentry Services'},
      {id:'department',label:'Department (optional)',type:'text',placeholder:'e.g. Client Services'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Damon L. Cooke'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'}
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>Subject: Re: Internship Offer — Reentry Support Intern</p>
      <p>Dear Ms. Yasmine Shoukeh,</p>
      <p>Following your interview, we are pleased to extend an offer for you to join The Uncuffed Project, Inc. as a Reentry Support Intern through the LMU Bellarmine College of Liberal Arts Summer Internship Program.</p>
      <p>This opportunity reflects the strength of your candidacy and your alignment with the work we do supporting justice-impacted individuals through full wrap-around reentry services. We are intentional about the individuals we bring into this work and believe you will contribute meaningfully while gaining valuable, hands-on experience.</p>
      <p>Internship Details</p>
      <p>Organization: The Uncuffed Project, Inc.</p>
      <p>Position Title: Reentry Support Intern</p>
      <p>Program Duration: June 1st, 2026 through July 31st, 2026</p>
      <p>Work Schedule: Monday through Friday from 10am until 4pm, 30 hours per week</p>
      <p>Location: Remote (supporting headquarters in Vallejo, California)</p>
      <p>Supervisor: Justice-Impacted Coordinator</p>
      <p>Role Overview</p>
      <p>In this role, you will work alongside program staff to support operations, assist with resource coordination, and gain exposure to service delivery systems rooted in a whole-person care approach. This is a structured learning experience designed to provide insight into reentry services, nonprofit operations, and community-based support systems.</p>
      <p>Expectations</p>
      <p>As part of this internship, you will be expected to:</p>
      <p>Maintain consistent communication with your supervisor and team</p>
      <p>Demonstrate professionalism, accountability, and follow-through</p>
      <p>Actively engage in assigned projects and learning opportunities</p>
      <p>Participate in scheduled check-ins and program touchpoints</p>
      <p>Next Steps</p>
      <p>To confirm your acceptance of this offer, please respond by May 8th, 2026.</p>
      <p>Upon acceptance, additional onboarding materials, orientation details, and next steps will be provided to support your transition into the role.</p>
      <p>We look forward to having you join our team and contribute to the work we are building.</p>
      <p>If you have any questions, please do not hesitate to reach out.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'remote-work', title:'Temporary Remote Work Assignment', category:'employment',
    desc:'Documents a temporary remote work arrangement for an employee.',
    sourceFile:'NeKeisha Logan - Temporary Remote Work Assignment v.5.29.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'employee_name',label:'Employee Full Name',type:'text',required:true,placeholder:'e.g. NeKeisha Logan'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.','Dr.']},
      {id:'job_title',label:'Job Title',type:'text',required:true,placeholder:'e.g. ${V(d.job_title)}'},
      {id:'remote_start',label:'Remote Work Start Date',type:'date',required:true},
      {id:'remote_end',label:'Remote Work End Date',type:'date',required:true},
      {id:'reason',label:'Reason for Remote Work Assignment',type:'textarea',required:true,placeholder:'e.g. medical recovery following a recent procedure'},
      {id:'expectations',label:'Work Expectations During Remote Period',type:'textarea',placeholder:'e.g. respond to emails within 24 hours, attend all virtual meetings, complete documentation timely'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Dear Nekisha Logan,</p>
      <p>This Remote Work, Confidentiality, Information Security, and Exclusive Employment Agreement ("Agreement") is entered into between: "Nekisha Logan" ("Employee") and "The Uncuffed Project, Inc." ("Company") effective as of Monday June 1st, 2026.</p>
      <p>The purpose of this Agreement is to establish the terms and conditions governing remote work arrangements while ensuring the protection of confidential information, Company assets, participant information, operational integrity, cybersecurity standards, and compliance with all applicable federal and state laws, including HIPAA where applicable.</p>
      <p>1. Remote Work Approval</p>
      <p>Employee is approved to perform work remotely at the following approved location(s):</p>
      <p>Employee may not change their primary remote work location without prior written approval from the Company.</p>
      <p>Remote work is a privilege and not a right. The Company reserves the right to modify, suspend, or revoke remote work privileges at any time based upon operational needs, performance concerns, policy violations, compliance requirements, or other legitimate business reasons.</p>
      <p>2. Work Hours and Availability</p>
      <p>Employee agrees to:</p>
      <p>Maintain agreed-upon working hours.</p>
      <p>Remain available during scheduled work hours.</p>
      <p>Attend required meetings, supervision sessions, trainings, and communications promptly.</p>
      <p>Complete assigned duties and responsibilities in a timely and professional manner.</p>
      <p>Maintain productivity levels consistent with Company expectations.</p>
      <p>Accurately document work activities as required.</p>
      <p>Employee may not perform personal business, outside employment activities, freelance work, consulting services, or non-Company work during scheduled Company working hours.</p>
      <p>3. Company Equipment</p>
      <p>The Company may provide equipment necessary to perform authorized work duties.</p>
      <p>Employee agrees that:</p>
      <p>Only Company-issued devices may be used for Company business unless otherwise approved in writing.</p>
      <p>Personal computers, tablets, mobile phones, storage devices, or other equipment may not be used to access Company systems or data unless specifically authorized by the Company.</p>
      <p>Company equipment shall not be shared with family members, roommates, visitors, or any unauthorized individuals.</p>
      <p>All devices must remain password protected.</p>
      <p>Devices must be secured when not in use.</p>
      <p>Devices must be protected from theft, loss, damage, or unauthorized access.</p>
      <p>Employee shall immediately report any lost, stolen, damaged, or compromised device.</p>
      <p>Company-issued equipment shall be used solely for authorized business purposes.</p>
      <p>Employee acknowledges responsibility for protecting all Company equipment entrusted to them.</p>
      <p>4. Confidentiality and HIPAA Compliance</p>
      <p>Employee acknowledges that they may access confidential information, proprietary information, participant information, and protected health information ("PHI").</p>
      <p>Employee agrees to:</p>
      <p>Maintain strict confidentiality of all Company and participant information.</p>
      <p>Prevent unauthorized individuals from viewing, hearing, accessing, or obtaining confidential information.</p>
      <p>Not print confidential or PHI-related documents unless specifically authorized.</p>
      <p>Not photograph, copy, download, email, store, transfer, or transmit confidential information outside approved Company systems.</p>
      <p>Use Company systems and software solely for authorized business purposes.</p>
      <p>Immediately report any suspected privacy, security, confidentiality, or HIPAA-related incident.</p>
      <p>Comply with all Company confidentiality policies and HIPAA requirements.</p>
      <p>Employee understands that all confidentiality obligations applicable within Company facilities remain fully applicable while working remotely.</p>
      <p>4a. Use of Artificial Intelligence, Third-party Software, and Cloud Services</p>
      <p>Employee acknowledges that unauthorized artificial intelligence systems, third-party software platforms, and cloud-based services may create significant confidentiality, privacy, security, and regulatory risks.</p>
      <p>Employee agrees that they shall not, without prior written authorization from the Company:</p>
      <p>Upload, input, transmit, summarize, photograph, paste, disclose, or otherwise provide confidential Company information to any unauthorized artificial intelligence platform.</p>
      <p>Upload participant information, PHI, assessments, case notes, treatment information, reports, screenshots, internal communications, or operational information into unauthorized software systems.</p>
      <p>Store Company information within personal cloud storage accounts.</p>
      <p>Utilize unauthorized file-sharing platforms.</p>
      <p>Use unauthorized browser extensions, plugins, note-taking systems, transcription tools, or software capable of accessing Company information.</p>
      <p>Sync Company information to personal devices, personal accounts, or unauthorized storage systems.</p>
      <p>Only Company-approved systems, software, and platforms may be used for Company business.</p>
      <p>Any suspected unauthorized disclosure, upload, transmission, or use of confidential information must be immediately reported to the Company.</p>
      <p>4b. Recording, Screenshot, and Photography Prohibitions</p>
      <p>Employee shall not record, photograph, screenshot, screen-capture, audio-record, video-record, duplicate, reproduce, or otherwise preserve confidential information unless specifically authorized in writing by the Company.</p>
      <p>This prohibition includes:</p>
      <p>Participant information</p>
      <p>Protected health information (PHI)</p>
      <p>Meetings</p>
      <p>Clinical discussions</p>
      <p>Case reviews</p>
      <p>Supervision sessions</p>
      <p>Internal systems</p>
      <p>Internal communications</p>
      <p>Company records</p>
      <p>Operational information</p>
      <p>This restriction applies to:</p>
      <p>Cell phones</p>
      <p>Tablets</p>
      <p>Cameras</p>
      <p>Screen recording software</p>
      <p>Audio recording applications</p>
      <p>Smart devices</p>
      <p>Third-party software platforms</p>
      <p>Unauthorized recording or reproduction of confidential information may result in disciplinary action, up to and including termination.</p>
      <p>5. Remote Workspace Requirements</p>
      <p>Employee certifies that their remote workspace:</p>
      <p>Is secure and private.</p>
      <p>Prevents unauthorized viewing of confidential information.</p>
      <p>Allows confidential conversations to occur without being overheard.</p>
      <p>Maintains professional working conditions suitable for Company business.</p>
      <p>Provides adequate protection for Company equipment and information.</p>
      <p>Employee agrees to maintain confidentiality and professionalism at all times while working remotely.</p>
      <p>5a. Public Environment and Mobile Work Restrictions</p>
      <p>Employee agrees that confidential work activities shall not be conducted in environments where unauthorized individuals may overhear conversations, observe protected information, or gain access to Company systems or materials.</p>
      <p>Unless specifically authorized by the Company, Employee shall not:</p>
      <p>Conduct confidential meetings or participant discussions in public locations.</p>
      <p>Access confidential information using unsecured or public Wi-Fi networks.</p>
      <p>Leave Company devices visible inside vehicles or unattended public areas.</p>
      <p>Discuss participant information in the presence of unauthorized individuals.</p>
      <p>Display confidential information in restaurants, coffee shops, airports, hotels, rideshare vehicles, shared workspaces, or other public settings.</p>
      <p>Employee remains responsible for maintaining confidentiality while performing mobile or remote work activities.</p>
      <p>5b. Household Members, Visitors, and Smart Devices</p>
      <p>Employee agrees to maintain a workspace that protects Company confidentiality obligations from unauthorized access.</p>
      <p>Employee agrees that:</p>
      <p>Family members, roommates, visitors, guests, or unauthorized individuals may not access Company systems, devices, files, or communications.</p>
      <p>Company devices may not be used by unauthorized persons.</p>
      <p>Confidential discussions shall not occur where conversations may reasonably be overheard.</p>
      <p>Smart speakers, voice assistants, recording devices, or similar technologies capable of monitoring conversations should not be active in confidential workspaces whenever feasible.</p>
      <p>Employee remains responsible for protecting confidential information within the remote work environment.</p>
      <p>6. Internet and System Access</p>
      <p>Employee agrees to:</p>
      <p>Use secure, password-protected internet connections.</p>
      <p>Avoid public or unsecured networks whenever possible.</p>
      <p>Follow Company instructions regarding passwords and access controls.</p>
      <p>Keep login credentials confidential.</p>
      <p>Never share passwords, access codes, or authentication credentials with any person.</p>
      <p>Follow all cybersecurity requirements established by the Company.</p>
      <p>6a. Multi-factor Authentication and Password Security</p>
      <p>Employee agrees to comply with all cybersecurity requirements established by the Company, including:</p>
      <p>Multi-factor authentication (MFA) requirements.</p>
      <p>Password management standards.</p>
      <p>Credential protection requirements.</p>
      <p>Security awareness training requirements.</p>
      <p>Immediate reporting of suspicious activity.</p>
      <p>Employee shall immediately report:</p>
      <p>Suspected unauthorized access attempts.</p>
      <p>Phishing attempts.</p>
      <p>Credential compromise.</p>
      <p>Malware incidents.</p>
      <p>Cybersecurity threats.</p>
      <p>Failure to comply with cybersecurity requirements may result in disciplinary action.</p>
      <p>7. Exclusive Employment, No Moonlighting, and Conflict of Interest</p>
      <p>During employment with the Company, Employee agrees that their primary professional responsibility during scheduled work hours is to the Company.</p>
      <p>Employee shall not, without prior written approval from the Company:</p>
      <p>Engage in outside employment, consulting, freelance work, self-employment, or contract work that conflicts with Company responsibilities.</p>
      <p>Perform work for another employer during scheduled Company working hours.</p>
      <p>Provide services to a competitor of the Company.</p>
      <p>Use Company equipment, systems, information, resources, or work time for outside business activities.</p>
      <p>Engage in activities creating actual or potential conflicts of interest.</p>
      <p>Employee agrees to promptly disclose any outside employment, consulting, business ownership, or professional activity that could reasonably create a conflict of interest or interfere with Company responsibilities.</p>
      <p>Unauthorized moonlighting or conflicting employment activities may result in disciplinary action, including termination and revocation of remote work privileges.</p>
      <p>8. Monitoring and Audit Rights</p>
      <p>Employee understands and acknowledges that Company systems, devices, communications, work activity, internet usage, access logs, login history, file transfers, electronic communications, remote access activity, audit logs, GPS/location services (where applicable), and electronic usage may be monitored, reviewed, logged, retained, or audited by the Company.</p>
      <p>Monitoring may occur to ensure compliance with:</p>
      <p>Company policies</p>
      <p>Operational standards</p>
      <p>Confidentiality requirements</p>
      <p>Cybersecurity protocols</p>
      <p>HIPAA requirements</p>
      <p>Regulatory obligations</p>
      <p>Legal obligations</p>
      <p>Employee understands that Company-issued devices may contain remote management, security, monitoring, tracking, or data protection software.</p>
      <p>Employee has no expectation of privacy when using Company systems, devices, accounts, or networks for business purposes.</p>
      <p>8a. Social Media, Public Communications, and Online Representation</p>
      <p>Employee shall not post, disclose, discuss, photograph, film, livestream, or otherwise share confidential Company information, participant information, PHI, internal operations, participant residences, case-related information, or work-related materials on social media platforms, websites, online forums, messaging applications, or public communication channels.</p>
      <p>Employee shall not represent personal opinions as official Company positions unless specifically authorized.</p>
      <p>Media inquiries, public statements, and external communications regarding Company operations shall be referred to authorized Company leadership.</p>
      <p>9. Return of Company Property</p>
      <p>Upon request or upon termination of employment, Employee shall immediately return all Company property, equipment, credentials, records, files, devices, keys, access materials, and information.</p>
      <p>Employee shall not retain copies of Company information following separation from employment.</p>
      <p>9a. Ownership of Work Product and Company Information</p>
      <p>Employee acknowledges and agrees that all work product created, developed, collected, maintained, documented, or generated during employment remains the sole and exclusive property of the Company.</p>
      <p>This includes, but is not limited to:</p>
      <p>Case notes</p>
      <p>Assessments</p>
      <p>Reports</p>
      <p>Documentation</p>
      <p>Emails</p>
      <p>Communications</p>
      <p>Templates</p>
      <p>Forms</p>
      <p>Databases</p>
      <p>Participant records</p>
      <p>Operational materials</p>
      <p>Training materials</p>
      <p>Intellectual property</p>
      <p>Electronic files</p>
      <p>Employee shall not retain, copy, distribute, remove, disclose, or utilize Company information outside authorized employment activities.</p>
      <p>10. Policy Compliance</p>
      <p>Employee agrees to comply with all Company policies, procedures, confidentiality requirements, information security standards, and operational expectations while working remotely.</p>
      <p>Failure to comply may result in disciplinary action, revocation of remote work privileges, suspension, or termination of employment.</p>
      <p>10a. Incident Reporting Requirements</p>
      <p>Employee shall immediately report any suspected or actual:</p>
      <p>Security breach</p>
      <p>Confidentiality violation</p>
      <p>HIPAA-related incident</p>
      <p>Unauthorized system access</p>
      <p>Lost or stolen device</p>
      <p>Malware infection</p>
      <p>Phishing attempt</p>
      <p>Improper disclosure of confidential information</p>
      <p>Whenever feasible, such incidents should be reported within one (1) hour of discovery.</p>
      <p>Employee agrees to cooperate fully with all investigations, mitigation efforts, corrective actions, and reporting obligations.</p>
      <p>10b. Policy Modifications and Updates</p>
      <p>The Company reserves the right to modify, update, revise, interpret, or discontinue this Agreement and related policies at any time, with or without notice, consistent with applicable law and operational requirements.</p>
      <p>Employee may be required to review and acknowledge updated policies as a condition of continued employment or remote work eligibility.</p>
      <p>11. At-will Employment</p>
      <p>Nothing contained in this Agreement alters the at-will nature of the employment relationship.</p>
      <p>Employment may be terminated by either the Employee or the Company at any time, with or without cause and with or without notice, subject to applicable law.</p>
      <p>12. Acknowledgment</p>
      <p>Employee acknowledges that they have carefully read this Agreement, understand its contents, have had the opportunity to ask questions, and agree to comply with all requirements contained herein.</p>
      <p>Employee understands that violation of this Agreement may result in disciplinary action up to and including termination of employment, civil liability, criminal liability where applicable, and other remedies available to the Company.</p>
      <p>Employee Signature</p>
      <p>Signature: ______________________________________</p>
      <p>Name: ________________________________________</p>
      <p>Date: _________________________________________</p>
      <p>Administration Signature</p>
      <p>Signature: ________________________________________</p>
      <p>Name/Title: ______________________________________</p>
      <p>Date: ___________________________________________</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  HR / STAFF LETTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'termination', title:'Termination of Employment Letter', category:'hr',
    desc:'Formal notice of employment termination.',
    sourceFile:'Termination of Employment Letter for Daniel Darling v.5.4.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'employee_name',label:'Employee Full Name',type:'text',required:true,placeholder:'e.g. Daniel Darling'},
      {id:'job_title',label:'Job Title / Role (optional)',type:'text',placeholder:'e.g. Justice-Impacted Correspondence Coordinator'},
      {id:'termination_date',label:'Effective Termination Date',type:'date',required:true},
      {id:'reason',label:'Reason for Termination',type:'select',required:true,options:['Organizational restructuring / change in direction','Performance-related concerns','Conduct violations incompatible with program values','Position elimination','End of contract / project completion','Mutual agreement']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Human Resources Department'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'The Uncuffed Project, Inc.'},
    ],
    generate(d){
      const reasonMap={'Organizational restructuring / change in direction':'the organization is moving in a different direction, and your services are no longer required in your current capacity','Performance-related concerns':'performance-related concerns that, despite prior feedback and support, have not been resolved to the standard required','Conduct violations incompatible with program values':'conduct violations that are inconsistent with the policies, values, and expectations of The Uncuffed Project, Inc.','Position elimination':'the elimination of your position due to organizational restructuring','End of contract / project completion':'the conclusion of the project or contract period associated with your role','Mutual agreement':'a mutual agreement between you and the organization regarding the conclusion of your employment'};
      return wrap(`
        <p>${fmtDate(d.date)}</p>
        <p>Dear ${V(d.employee_name)},</p>
        <p>This letter serves as formal written notice that your employment with The Uncuffed Project, Inc.${d.job_title?', including your role as <strong>'+V(d.job_title)+'</strong>,':''} is <strong>terminated effective ${fmtDate(d.termination_date)}</strong>.</p>
        <p>This decision has been made because ${reasonMap[d.reason]||V(d.reason)}.</p>
        <p>You will receive all compensation owed to you through your final date of employment, including any accrued and payable wages, in accordance with applicable law. Please ensure that any organizational property, records, or materials in your possession are returned promptly on or before your final date.</p>
        <p>You remain bound by any confidentiality, professional, or non-disclosure obligations previously agreed to during your employment. If you have any questions regarding final pay, benefits, or administrative matters, please contact the organization directly at (707) 563-5383.</p>
        <p>We wish you the best in your future endeavors.</p>
        ${sig(d.signed_by||'Human Resources Department',d.signed_title||'The Uncuffed Project, Inc.')}
      `);}
  },

  {
    id:'program-exit', title:'Program Exit / Termination of Services Letter', category:'hr',
    desc:'Formal notice that a participant\'s housing and program services have been terminated.',
    sourceFile:'The Uncuffed Project, Inc. - Program Exit Letter for Dawuan Lamarcus Gillum v.6.25.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Participant Full Name',type:'text',required:true,placeholder:'e.g. Dawuan Lamarcus Gillum'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'exit_date',label:'Effective Termination Date',type:'date',required:true},
      {id:'reason_summary',label:'Brief Reason for Exit (optional)',type:'textarea',placeholder:'e.g. pattern of behavior incompatible with program expectations, repeated policy violations despite multiple interventions'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Dear Daniel Darling,</p>
      <p>This letter serves as formal written notice that your employment with The Uncuffed Project, Inc., including your role as Justice-Impacted Correspondence Coordinator, is terminated effective May 4th, 2026.</p>
      <p>This decision has been made as the organization is moving in a different direction, and your services are no longer required.</p>
      <p>You will receive all compensation owed to you through your final date of employment, including any accrued and payable wages, in accordance with applicable law.</p>
      <p>Please ensure that any organizational property, records, or materials in your possession are returned promptly. You remain bound by any confidentiality, professional, or non-disclosure obligations previously agreed to during your employment.</p>
      <p>If you have any questions regarding final pay, benefits, or administrative matters, please contact the organization directly.</p>
      <p>We wish you the best in your future endeavors.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'reprimand', title:'Letter of Reprimand / Mandatory Meeting Notice', category:'hr',
    desc:'Formal notice requiring a participant to attend a meeting to address conduct concerns.',
    sourceFile:'The Uncuffed Project, Inc. - Letter of Reprimand {BLANK TEMPLATE}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Participant Name(s)',type:'text',required:true,placeholder:'e.g. John Smith (or John Smith & Jane Doe)'},
      {id:'prefix',label:'Primary Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'meeting_date',label:'Meeting Date',type:'date',required:true},
      {id:'meeting_time',label:'Meeting Time',type:'text',required:true,placeholder:'e.g. 11:00 AM'},
      {id:'meeting_loc',label:'Meeting Location',type:'text',placeholder:'Uncuffed Headquarters'},
      {id:'concerns',label:'Concerns to Be Discussed (optional)',type:'textarea',placeholder:'e.g. recent concerns regarding program participation and conduct'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Monday, June 8th, 2026</p>
      <p>To:Allyssa Conwell</p>
      <p>Earl Vogt</p>
      <p>Dear Ms. Conwell and Mr. Vogt,</p>
      <p>This letter serves as formal notice that you are required to attend an in-person meeting at Uncuffed Headquarters on Wednesday, June 10, 2026, at 11:00 AM.</p>
      <p>The purpose of this meeting is to discuss recent concerns regarding program participation and conduct, as well as to review your future plans, expectations, responsibilities, and continued participation within the program. This meeting will also provide an opportunity for both of you to discuss any cares, concerns, challenges, or support needs you may have moving forward.</p>
      <p>Your attendance is mandatory. During this meeting, staff will review program expectations, address areas of concern, and determine appropriate next steps regarding your involvement with the program.</p>
      <p>If there is an emergency or unavoidable circumstance that prevents you from attending, you must notify your assigned ${V(d.job_title)} immediately prior to the scheduled meeting time.</p>
      <p>We look forward to having an open and productive discussion regarding your goals, needs, and continued success within the program.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'formal-reprimand', title:'Formal Letter of Reprimand — Performance & Conduct Violations', category:'hr',
    desc:'Formal HR reprimand for a staff member citing performance and conduct violations.',
    sourceFile:'Formal Letter of Reprimand - Performance & Conduct Violations.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'employee_name',label:'Employee Full Name',type:'text',required:true,placeholder:'e.g. Jane Doe'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.','Dr.']},
      {id:'job_title',label:'Job Title',type:'text',required:true,placeholder:'e.g. ${V(d.job_title)}'},
      {id:'incident_date',label:'Date(s) of Incident(s)',type:'date',required:true},
      {id:'violation_desc',label:'Description of Violation(s)',type:'textarea',required:true,placeholder:'Describe the specific performance or conduct violations...'},
      {id:'corrective_action',label:'Required Corrective Action',type:'textarea',required:true,placeholder:'Describe the specific steps the employee must take...'},
      {id:'consequence',label:'Consequence if Not Corrected',type:'text',placeholder:'e.g. further disciplinary action, up to and including termination'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Human Resources Department'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'The Uncuffed Project, Inc.'},
    ],
    generate(d){return wrap(`
      <p>Dear Ramon,</p>
      <p>This letter serves as a formal written reprimand regarding your repeated violations of policy and professional standards during your probationary period as a Security Staff member at Uncuffed City.</p>
      <p>You are currently within a 90-day probationary period, during which your performance and conduct are under evaluation. Your continued employment is contingent upon your ability to follow expectations outlined in your job description, code of ethics, and Uncuffed City's Policies & Procedures Manual.</p>
      <p>Unfortunately, we have received multiple documented reports of misconduct and unprofessional behavior that raise serious concerns about your fitness for this role. The following incidents have been reported:</p>
      <p>Documented Infractions:</p>
      <p>Failure to wear uniform: On March 19, 2025, you were observed standing in the waiting area without your security uniform, wearing only a tank top. When instructed to dress appropriately, you dismissed the directive, citing discomfort. This is unacceptable and reflects poor judgment and disregard for workplace standards.</p>
      <p>Breach of confidentiality: On or around March 21, 2025, you reportedly disclosed sensitive information regarding a client's disciplinary matter. Sharing confidential case information with residents or non-staff violates our ethical standards and puts the trust of the community at risk.</p>
      <p>Sleeping while on duty: On March 24, 2025, you failed to respond to a client at the front door for 15—20 seconds. You were later found emerging from a side room without shoes, with your phone on speaker. This gives the appearance of having been asleep or disengaged during your shift.</p>
      <p>Excessive and unprofessional phone use: Multiple complaints (3/24 and 3/28) indicate your use of personal phone calls on speaker while on shift, disrupting the environment and interfering with your responsibilities. You were warned twice and failed to correct this behavior.</p>
      <p>Disruptive workplace behavior: On March 28, 2025, you were overheard making inappropriate comments about senior leadership in front of staff and residents, contributing to a loud and unprofessional environment.</p>
      <p>Inappropriate conduct toward clients: There have also been concerning patterns of behavior in your interactions with transgender and female clients, described as abnormal and unprofessional. Any conduct that makes clients feel unsafe, objectified, or uncomfortable will not be tolerated under any circumstances.</p>
      <p>Final Warning & Required Action:</p>
      <p>This letter constitutes a final warning. As of today:</p>
      <p>You are being placed on heightened observation for the remainder of your probationary period.</p>
      <p>Any additional violations"”regardless of severity"”may result in immediate termination.</p>
      <p>You are required to meet with Uncuffed Administration for a corrective performance plan within 48 hours of receiving this letter.</p>
      <p>Reminder of Expectations:</p>
      <p>Maintain professional appearance at all times (uniform must be worn).</p>
      <p>Refrain from using your phone for personal matters while on shift.</p>
      <p>Treat all residents and colleagues with dignity, respect, and discretion.</p>
      <p>Uphold all Uncuffed City policies, especially regarding confidentiality and ethics.</p>
      <p>Display maturity, consistency, and structure in your interactions"”regardless of personal opinions.</p>
      <p>Ramon, we believe in giving second chances"”but not at the expense of community safety, professionalism, or integrity. You must decide, immediately, whether this position is one you can take seriously. If you are unable to meet the standards expected, it is in everyone's best interest to part ways now.</p>
      <p>CEO & Founder</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'violation-notice', title:'Program Violation Notice / Corrective Action Directive', category:'hr',
    desc:'Administrative corrective action directive for a program rule violation.',
    sourceFile:'The Uncuffed Project, Inc. - Program Violation Notice {Template} v.6.8.2026.docx',
    fields:[
      {id:'date',label:'Notice Date',type:'date',required:true},
      {id:'client_name',label:'Participant Full Name',type:'text',required:true,placeholder:'e.g. John Smith'},
      {id:'violation_type',label:'Violation Type',type:'text',required:true,placeholder:'e.g. Curfew Violation'},
      {id:'violation_date',label:'Date of Violation',type:'date',required:true},
      {id:'violation_desc',label:'Description of Violation',type:'textarea',required:true,placeholder:'Provide a detailed factual account of the observed behavior, including dates, times, locations, and staff observations...'},
      {id:'corrective_action',label:'Required Corrective Action',type:'textarea',required:true,placeholder:'Describe the specific corrective actions required...'},
      {id:'prior_history',label:'Prior Violation History',type:'select',options:['First Occurrence','Previously Counseled','Previously Documented','Repeated Violation','Pattern of Noncompliance']},
      {id:'signed_by',label:'Issued By (Staff Name)',type:'text',placeholder:'${V(d.job_title)} Name'},
      {id:'signed_title',label:'Staff Title',type:'text',placeholder:'${V(d.job_title)}, The Uncuffed Project, Inc.'},
    ],
    generate(d){return wrap(`
      <p>Administrative Corrective Action Directive</p>
      <p>This notice serves as formal documentation that you have been advised of a violation of program rules, participation requirements, housing service expectations, and/or program directives.</p>
      <p>The purpose of this notice is to clearly identify the concern, provide an opportunity for corrective action, and document that you have been informed of the expectations necessary to remain in good standing within The Uncuffed Project, Inc.</p>
      <p>Program participation and housing are contingent upon compliance with all program rules, policies, procedures, and staff directives.</p>
      <p>Violation Information</p>
      <p>Violation: Please identify the specific rule violation, policy concern, or behavior being addressed...</p>
      <p>Description of Violation</p>
      <p>On or about: Insert Date here,</p>
      <p>the following violation was observed, reported, or documented:</p>
      <p>Please provide a detailed factual account of the observed behavior, including dates, times, locations, staff observations, witness statements, prior interventions, and any relevant circumstances...</p>
      <p>Program Expectation</p>
      <p>Participants are expected to:</p>
      <p>Please identify the applicable program rules, participation expectations, housing service requirements, policies, procedures, staff directives, or behavioral standards that apply to this situation...</p>
      <p>Corrective Action Required</p>
      <p>To remedy this violation, you are directed to complete the following actions:</p>
      <p>Immediately</p>
      <p>Within 24 Hours</p>
      <p>Within 48 Hours</p>
      <p>By:</p>
      <p>Prior Corrective Action History</p>
      <p>Please check a box if this participant has had a program violation issued in the past.</p>
      <p>First Occurrence</p>
      <p>Previously Counseled</p>
      <p>Previously Documented</p>
      <p>Repeated Violation</p>
      <p>Pattern of Noncompliance</p>
      <p>Required Corrective Action:</p>
      <p>Please describe the specific corrective actions required to resolve this violation and return to compliance with program expectations"¦</p>
      <p>Future Compliance Expectations</p>
      <p>Moving forward, you are expected to remain in full compliance with all program rules, policies, curfews, cleanliness standards, staff directives, and community living expectations.</p>
      <p>Participants are expected to demonstrate ongoing accountability and maintain compliance moving forward. Repeated violations, patterns of noncompliance, or failure to complete corrective actions may result in progressive disciplinary action.</p>
      <p>Failure to maintain compliance may result in additional corrective action.</p>
      <p>Notice of Future Enforcement</p>
      <p>This document serves as your formal acknowledgment that you have been advised of this violation.</p>
      <p>Future violations of the same nature, continued noncompliance, failure to complete corrective actions, or a pattern of repeated rule violations may result in one or more of the following:</p>
      <p>Additional written violations</p>
      <p>Behavioral contracts</p>
      <p>Increased supervision</p>
      <p>Loss of program privileges</p>
      <p>Housing reassignment</p>
      <p>Administrative review</p>
      <p>Program sanctions</p>
      <p>Termination of housing and services</p>
      <p>The severity of future corrective action will be determined based upon the nature, frequency, and impact of any continued violations.</p>
      <p>This notice serves as formal documentation that the Participant has been advised of the identified violation. Future occurrences of the same or similar conduct may result in immediate escalation of corrective action without additional warning.</p>
      <p>Participant Statement (Optional)</p>
      <p>Use this space to provide any comments, explanation, concerns, disagreement, acknowledgment, or additional information regarding this notice...</p>
      <p>Acknowledgment of Receipt</p>
      <p>My signature below acknowledges receipt of this Program Violation & Accountability Notice.</p>
      <p>My signature does not necessarily indicate agreement with the contents of this document. It only confirms that I have received and reviewed this notice.</p>
      <p>__________________________________</p>
      <p>Participant Signature</p>
      <p>__________________</p>
      <p>Participant Refused to Sign</p>
      <p>Witnessed By: ______________________</p>
      <p>Date: __________________</p>
      <p>__________________________________</p>
      <p>Staff Signature</p>
      <p>__________________</p>
      <p>Supervisor Review (If Applicable):</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  LEGAL / PAROLE LETTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'parole-support', title:'Letter of Support — CA Board of Parole Hearings', category:'legal',
    desc:'Letter submitted in support of an individual at a California Parole Board hearing.',
    sourceFile:'Letter of Support - The California Board of Parole Hearings {Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Inmate / Client Full Name',type:'text',required:true,placeholder:'e.g. Marcus Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'cdc_number',label:'CDC/CDCR Number (optional)',type:'text',placeholder:'e.g. BP9727'},
      {id:'services',label:'Services Offered Upon Release',type:'select',options:['Transitional housing, care coordination, and reentry navigation','Care coordination and reentry navigation only','Transitional housing placement','Transportation assistance and credible-messenger mentorship','Full reentry support package (housing, care, navigation, transportation, mentorship)']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Daniel Darling'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Justice-Impacted Coordinator, The Uncuffed Project, Inc.'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>To the Honorable Members of the California Board of Parole Hearings,</p>
      <p>On behalf of The Uncuffed Project, Inc., this letter is submitted in support of ${V(d.prefix)} ${V(d.client_name)} in connection with their upcoming parole consideration. Our organization provides structured reentry, transitional housing, and coordinated support services for justice-impacted individuals returning to the community.</p>
      <p>Based on a review of available information related to {reentry circumstances, institutional conduct, rehabilitative efforts, medical or behavioral health considerations, or post-release needs}, we believe that ${V(d.prefix)} ${V(d.client_name)} demonstrates a readiness to engage in structured, accountable reentry support upon release.</p>
      <p>If granted parole, The Uncuffed Project is prepared to support ${V(d.prefix)} ${V(d.client_name)} through {one or more of the following, as applicable: transitional housing placement, care coordination, reentry navigation, transportation assistance, credible-messenger mentorship, or structured program participation}, subject to final intake, eligibility verification, and compliance with all parole conditions.</p>
      <p>Our program model emphasizes accountability, stability, and pro-social engagement, and is designed to reduce barriers commonly faced during reentry. Participants are supported through structured routines, service coordination, and ongoing engagement intended to promote compliance with supervision requirements and long-term reintegration.</p>
      <p>This letter is offered as a statement of organizational support and intent and should not be interpreted as a guarantee of housing, services, or outcomes beyond those approved through standard intake and program processes.</p>
      <p>Thank you for your time and consideration of this matter.</p>
      <p>Respectfully submitted,</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'lwop-support', title:'Letter of Support — LWOP Court', category:'legal',
    desc:'Letter of support for a court hearing involving a life without parole sentence.',
    sourceFile:'Letter of Support - LWOP Court.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Individual\'s Full Name',type:'text',required:true,placeholder:'e.g. Marcus Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'cdc_number',label:'CDC/CDCR Number (optional)',type:'text',placeholder:'e.g. BP9727'},
      {id:'judge_name',label:'Judge\'s Name (optional)',type:'text',placeholder:'e.g. Honorable Judge Smith'},
      {id:'services_available',label:'Services Available Upon Release',type:'textarea',placeholder:'e.g. transitional housing, care coordination, reentry support, mentorship'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Feb 2, 2026</p>
      <p>To the Whom It May Concern,</p>
      <p>On behalf of The Uncuffed Project, Inc., this letter is submitted in support of Mr. Bee Vue (F72547) in connection with their upcoming parole consideration. Our organization provides structured reentry, transitional housing, and coordinated support services for justice-impacted individuals returning to the community.</p>
      <p>Based on a review of available information related to reentry circumstances, institutional conduct, rehabilitative efforts, medical or behavioral health considerations, or post-release needs, we believe that Mr. Vue demonstrates a readiness to engage in structured, accountable reentry support upon release.</p>
      <p>If granted parole, The Uncuffed Project is prepared to support Mr. Vue through one or more of the following, as applicable: transitional housing placement, care coordination, reentry navigation, transportation assistance, credible-messenger mentorship, or structured program participation, subject to final intake, eligibility verification, and compliance with all parole conditions.</p>
      <p>Our program model emphasizes accountability, stability, and pro-social engagement, and is designed to reduce barriers commonly faced during reentry. Participants are supported through structured routines, service coordination, and ongoing engagement intended to promote compliance with supervision requirements and long-term reintegration.</p>
      <p>This letter is offered as a statement of organizational support and intent and should not be interpreted as a guarantee of housing, services, or outcomes beyond those approved through standard intake and program processes.</p>
      <p>Thank you for your time and consideration of this matter.</p>
      <p>Respectfully submitted,</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'progress-letter', title:'Progress / Participation Update Letter', category:'legal',
    desc:'Progress letter for a participant to share with a parole officer, court, or supervising agency.',
    sourceFile:'Progress Letter on Kile Gillaspie by Martell Byrd, CADPT - November 10th, 2025.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Participant Full Name',type:'text',required:true,placeholder:'e.g. Kile Gillaspie'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'recipient_name',label:'Recipient Name / Title',type:'text',required:true,placeholder:'e.g. Agent Vasquez'},
      {id:'program_name',label:'Program / Group Name',type:'text',placeholder:"e.g. Criminal Addictive Thinking Group"},
      {id:'participation_since',label:'Participating Since (approx)',type:'text',placeholder:'e.g. March 2025'},
      {id:'progress_summary',label:'Progress Summary',type:'textarea',required:true,placeholder:'Describe the participant\'s attendance, attitude, engagement, areas of growth, and progress...'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Martell Byrd, CADPT'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Program Facilitator, The Uncuffed Project, Inc.'},
    ],
    generate(d){return wrap(`
      <p>Dear Agent Vasquez,</p>
      <p>I am writing to provide an update on Mr. Kile Gillaspie and his participation in The Uncuffed Project's Criminal Addictive Thinking Group.</p>
      <p>Mr. Gillaspie has demonstrated consistent attendance and active engagement throughout the program. He regularly participates in group discussions and approaches each session with a positive and motivated attitude. He has been open to examining his patterns of behavior and thinking, and he has shown a willingness to reflect on how these patterns have influenced his past decisions.</p>
      <p>Throughout the group process, Mr. Gillaspie has been receptive to guidance and feedback, applying the principles we cover in class to his own personal experiences. He is steadily progressing in his ability to identify criminal and addictive thinking distortions and is beginning to develop healthier cognitive and behavioral responses.</p>
      <p>Overall, Mr. Gillaspie is making encouraging and measurable progress. His level of participation indicates a genuine commitment to change and continued personal development.</p>
      <p>If you require any additional information or further documentation regarding his progress, please feel free to contact me at any time.</p>
      <p>Martell Byrd, CADPT</p>
      <p>Substance Abuse & Criminal Addictive Thinking Counselor</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'program-participation', title:'Letter of Program Participation & Stability', category:'legal',
    desc:'Verifies a client is actively participating in program and residing in stable housing.',
    sourceFile:'The Uncuffed Project, Inc. - Letter of Program Participation & Stability for Gary Severa v.5.11.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. Gary Severa'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'housing_site',label:'Housing Site',type:'text',placeholder:'Uncuffed City'},
      {id:'housing_addr',label:'Housing Address',type:'text',placeholder:'97 Newell Ln. Vallejo, CA 94589'},
      {id:'participating_since',label:'Participating Since (approx)',type:'text',placeholder:'e.g. March 18, 2025'},
      {id:'stability_notes',label:'Stability / Conduct Notes (optional)',type:'textarea',placeholder:'e.g. has maintained housing stability and demonstrated consistent engagement in programming'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>The Letter</p>
      <p>May 11th, 2026</p>
      <p>To Whom It May Concern,</p>
      <p>This letter serves as formal verification that Gary Savera is currently participating in programming and residing within a supervised housing placement operated by The Uncuffed Project, Inc. at:</p>
      <p>Uncuffed City 97 Newell Ln. Vallejo, CA 94589</p>
      <p>Mr. Severa has been residing within the program since approximately March 18, 2025, and has demonstrated continued housing stability and engagement within the structured program environment during his placement.</p>
      <p>The Uncuffed Project, Inc. provides structured transitional housing and full wrap-around reentry services designed to support accountability, stability, and successful community reintegration. Throughout his participation, Mr. Severa has maintained stability within the program environment and has remained appropriately engaged with program expectations and supportive services.</p>
      <p>Based on our observations and interactions, the structured environment and supportive services provided through the program have contributed positively toward Mr. Severa's overall stability and reintegration efforts.</p>
      <p>This letter is being provided at the request of the participant for verification and support purposes related to his continued progress within the community.</p>
      <p>Should additional verification be required, inquiries may be directed to our administrative office.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'letter-of-support-individual', title:'Letter of Support for an Individual (Court / Legal)', category:'legal',
    desc:'General letter of support for a specific individual submitted to a judge or supervising authority.',
    sourceFile:'The Uncuffed Project, Inc. - Letter of Support for Kayla Valentine v.5.12.2026.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'subject_name',label:'Individual\'s Full Name',type:'text',required:true,placeholder:'e.g. Kayla Valentine'},
      {id:'subject_prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'judge_name',label:'Judge\'s Name / Recipient',type:'text',required:true,placeholder:'e.g. Honorable Judge Pendergast'},
      {id:'relationship',label:'Individual\'s Relationship to Org',type:'text',placeholder:'e.g. employed as a ${V(d.job_title)} since February 3, 2026'},
      {id:'character_desc',label:'Character & Contributions Description',type:'textarea',required:true,placeholder:'Describe this person\'s character, work ethic, contributions, and why you support them...'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Dear Honorable Judge Pendergast,</p>
      <p>I am writing on behalf of The Uncuffed Project, Inc. in strong support of Ms. Kayla Valentine.</p>
      <p>Ms. Valentine has been employed with our organization since February 3, 2026, and during her time with us she has demonstrated professionalism, accountability, compassion, and a sincere commitment to personal growth and stability. Since joining our team, she has become a dependable and valued member of our organization.</p>
      <p>Kayla currently serves as a ${V(d.job_title)}, where she works directly with vulnerable individuals who are navigating complex challenges involving mental health, substance use, housing instability, and reentry. In this role, she consistently demonstrates empathy, responsibility, and the ability to connect positively with the individuals we serve. Her lived experiences have allowed her to relate to our clients in a meaningful and constructive way, which has strengthened her effectiveness as a staff member and advocate.</p>
      <p>Throughout her employment, Ms. Valentine has continued working toward improving her life while balancing employment responsibilities, recovery efforts, parenting obligations, and personal mental health treatment. We recognize that true rehabilitation and personal transformation require ongoing effort, accountability, and support systems. Based on our direct experience working with her, we believe she has shown genuine dedication toward making positive and lasting changes in her life.</p>
      <p>At The Uncuffed Project, Inc., we work closely with justice involved individuals and those overcoming mental health and substance related challenges. As an organization, we understand firsthand the importance of stability, treatment, structure, and community support in helping individuals successfully rebuild their lives. Ms. Valentine has continued to show progress in these areas and has remained engaged in meaningful employment while contributing positively to our organization and the community we serve.</p>
      <p>We respectfully ask the Court to take into consideration the progress Ms. Valentine has made, her commitment to continued growth, and the positive role she currently maintains within our organization. We believe continued support, treatment, and stability will best serve her long term success and rehabilitation.</p>
      <p>Please feel free to contact us should the Court require any additional information.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'welcome-letter', title:'Welcome Letter (Pre-Release / Intake)', category:'legal',
    desc:'Warm welcome letter sent to a person preparing for release from incarceration.',
    sourceFile:'The Uncuffed Project, Inc. - Welcome Letter for John Hill (BP9727).docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. John Hill'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.']},
      {id:'cdc_number',label:'CDC/CDCR Number (optional)',type:'text',placeholder:'e.g. BP9727'},
      {id:'housing_unit',label:'Housing / Cell Assignment (optional)',type:'text',placeholder:'e.g. C-15-119L'},
      {id:'release_info',label:'Release Timeframe (optional)',type:'text',placeholder:'e.g. anticipated release in 6 months'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>September 19th, 2025</p>
      <p>Dear Mr. Hill (BP9727 C-15-119L),</p>
      <p>On behalf of The Uncuffed Project, Inc., I would like to extend a warm welcome to you. We are honored to connect with you as you prepare for your next chapter and begin planning for your transition back into the community.</p>
      <p>The Uncuffed Project is a comprehensive reentry organization dedicated to empowering justice-impacted individuals to rebuild their lives with dignity. Our mission is to provide safe housing, healing-centered services, and real opportunities for growth. We work to break the cycle of incarceration by addressing barriers such as housing, employment, education, substance use, and mental health, while promoting family reunification and community reintegration.</p>
      <p>In this packet, you will find:</p>
      <p>An Intake Form for you to Fill-out and return back to us,</p>
      <p>A One-Sheeter overview of our services,</p>
      <p>A Tri-Fold Brochure with photos of our transitional housing, the programs we offer, and a deeper look into how our community of care is structured to support each participant from the moment of release through long-term stability.</p>
      <p>Our services include transitional housing, peer support, vocational training, academic assistance, mental health and wellness counseling, and life-skills workshops that help participants navigate daily responsibilities, heal from past trauma, and pursue their goals.</p>
      <p>This welcome letter serves as an introduction. Once we receive your intake form and supporting documentation, we will be able to prepare a more personalized acceptance letter that reflects your specific needs, strengths, and goals for reentry. Until then, please know that you are not alone"”we are committed to walking this journey with you.</p>
      <p>We encourage you to take your time reviewing the enclosed materials. We believe in your ability to succeed, and we look forward to supporting you when the time comes.</p>
      <p>With respect and encouragement,</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  NDA / AGREEMENTS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'nda-uncuffed', title:'Non-Disclosure Agreement — The Uncuffed Project', category:'nda',
    desc:'Standard NDA between The Uncuffed Project, Inc. and an employee, contractor, or volunteer.',
    sourceFile:'The Uncuffed Project, Inc. - Non-Disclosure Agreement {TEMPLATE} v.5.20.2026.docx',
    fields:[
      {id:'effective_date',label:'Effective Date',type:'date',required:true},
      {id:'receiving_party',label:'Receiving Party Full Name',type:'text',required:true,placeholder:'e.g. Jane Smith'},
      {id:'receiving_role',label:'Receiving Party Role',type:'text',placeholder:'e.g. ${V(d.job_title)} / Employee'},
      {id:'permitted_purpose',label:'Permitted Purpose',type:'textarea',placeholder:'e.g. performing job duties as a ${V(d.job_title)} and accessing program and client information necessary for case management'},
      {id:'signed_by',label:'Disclosing Party Signatory',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>This Non-Disclosure Agreement ("Agreement") is entered into as of the: "Effective Date" listed below, by and between: The Uncuffed Project, Inc. ("Disclosing Party"), a California corporation with its principal place of business at: 690 Walnut Ave. #210, Vallejo, CA 94542, and the: "Receiving Party" listed below. Disclosing Party and Receiving Party may be referred to individually as a: "Party", or collectively as: "Parties".</p>
      <p>1. Definitions</p>
      <p>1.1. "Confidential Information" means any and all non-public, proprietary, or sensitive information, in any form, whether oral, written, electronic, or otherwise, disclosed by the Disclosing Party to the Receiving Party, including but not limited to:</p>
      <p>Business operations, plans, or strategies.</p>
      <p>Client, employee, or vendor information.</p>
      <p>Financial information and projections.</p>
      <p>Marketing strategies.</p>
      <p>Intellectual property, including but not limited to trade secrets, patents, copyrights, trademarks, designs, concepts, and know-how.</p>
      <p>Technical data, research, and development materials.</p>
      <p>Systems, software, algorithms, or methodologies.</p>
      <p>Any media or content created while employed or contracted by The Uncuffed Project, Inc., including but not limited to: videos, audio, documents, designs, presentations, digital tools, or physical goods.</p>
      <p>All projects, initiatives, contracts, and programs affiliated with The Uncuffed Project, Inc., known or unknown</p>
      <p>Any other information marked or otherwise identified as confidential.</p>
      <p>2. Obligations of Receiving Party</p>
      <p>2.1. Receiving Party agrees to:</p>
      <p>Maintain the strict confidentiality of the Confidential Information.</p>
      <p>Use the Confidential Information solely for the Permitted Purpose.</p>
      <p>Limit disclosure of the Confidential Information to its employees, agents, or contractors who need to know for the Permitted Purpose and are bound by confidentiality obligations at least as strict as those in this Agreement.</p>
      <p>Implement reasonable security measures to protect the Confidential Information.</p>
      <p>2.2. Receiving Party shall not:</p>
      <p>Disclose, copy, or reproduce Confidential Information without prior written consent from Disclosing Party.</p>
      <p>Reverse engineer, disassemble, or decompile any materials containing Confidential Information.</p>
      <p>3. Exclusions from Confidential Information</p>
      <p>Confidential Information does not include information that:</p>
      <p>Is or becomes publicly available without breach of this Agreement.</p>
      <p>Is lawfully known to the Receiving Party prior to disclosure by the Disclosing Party.</p>
      <p>Is independently developed by the Receiving Party without reference to or use of the Confidential Information.</p>
      <p>Is required to be disclosed by law or court order, provided that the Receiving Party gives the Disclosing Party prompt notice and an opportunity to seek a protective order.</p>
      <p>4. Ownership and Return of Confidential Information</p>
      <p>All Confidential Information remains the property of the Disclosing Party. Upon termination of this Agreement or upon the Disclosing Party's request, the Receiving Party shall promptly return or destroy all copies of the Confidential Information.</p>
      <p>5. Term and Termination</p>
      <p>This Agreement shall remain in full effect for a period of five (5) years from the Effective Date, regardless of whether the Receiving Party remains employed or affiliated with The Uncuffed Project, Inc. during that time.</p>
      <p>Obligations related to the protection of Confidential Information, including trade secrets, proprietary data, internal strategies, and intellectual property, shall survive termination of employment or this Agreement and remain in effect indefinitely.</p>
      <p>6. No License or Ownership Rights</p>
      <p>This Agreement does not grant any license or ownership rights to the Receiving Party, whether express or implied, under any patents, copyrights, trademarks, or other intellectual property rights.</p>
      <p>7. Remedies</p>
      <p>Receiving Party acknowledges that unauthorized disclosure or use of the Confidential Information may cause irreparable harm to the Disclosing Party, for which monetary damages may be inadequate. The Disclosing Party shall be entitled to seek injunctive relief in addition to any other remedies available at law or in equity.</p>
      <p>8. Indemnification</p>
      <p>The Receiving Party shall indemnify, defend, and hold harmless the Disclosing Party and its officers, directors, employees, and agents from any claims, damages, losses, or expenses resulting from the unauthorized disclosure or use of the Confidential Information.</p>
      <p>9. Non-Compete and Non-Solicitation</p>
      <p>For an indefinite period following the termination of this Agreement, the Receiving Party shall not:</p>
      <p>Engage in any business activities that compete with those of the Disclosing Party.</p>
      <p>Solicit or hire any employees, contractors, or clients of the Disclosing Party.</p>
      <p>10. Governing Law and Jurisdiction</p>
      <p>This Agreement shall be governed by and construed in accordance with the laws of the State of California. Any disputes arising out of or in connection with this Agreement shall be resolved in the courts located in Vallejo, California.</p>
      <p>11. Miscellaneous</p>
      <p>11.1. Entire Agreement: This Agreement constitutes the entire understanding between the Parties concerning its subject matter and supersedes all prior Agreements.</p>
      <p>11.2. Amendments: This Agreement may only be modified in writing signed by both Parties.</p>
      <p>11.3. Severability: If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
      <p>11.4. Waiver: No failure or delay by either Party in exercising any right under this Agreement shall constitute a waiver.</p>
      <p>IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date as first written above.</p>
      <p>Disclosing Party: The Uncuffed Project, Inc.</p>
      <p>__________________________________________________________________________SignatureDate</p>
      <p>Receiving Party:</p>
      <p>By: Title:</p>
      <p>__________________________________________________________________________SignatureDate</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'nda-safer-health', title:'Non-Disclosure Agreement — Safer Health Solutions', category:'nda',
    desc:'NDA between Safer Health Solutions and a receiving party (employee/contractor).',
    sourceFile:'Safer Health Solutions - Non-Disclosure Agreement {TEMPLATE} v.6.30.2026.docx',
    fields:[
      {id:'effective_date',label:'Effective Date',type:'date',required:true},
      {id:'receiving_party',label:'Receiving Party Full Name',type:'text',required:true,placeholder:'e.g. Jane Smith'},
      {id:'receiving_role',label:'Receiving Party Role',type:'text',placeholder:'e.g. Data Analyst / Contractor'},
      {id:'permitted_purpose',label:'Permitted Purpose',type:'textarea',placeholder:'e.g. performing contracted data analysis services'},
      {id:'signed_by',label:'Disclosing Party Signatory',type:'text',placeholder:'Safer Health Solutions Representative'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Chief Executive Officer'},
    ],
    generate(d){return wrap(`
      <p>This Non-Disclosure Agreement ("Agreement") is entered into as of the: "Effective Date" listed below, by and between: Safer Health Solutions ("Disclosing Party"), a California corporation with its principal place of business at: 3130 Balfour Rd. Ste. D-201, Brentwood, CA 94513, and the: "Receiving Party" listed below. Disclosing Party and Receiving Party may be referred to individually as a: "Party", or collectively as: "Parties".</p>
      <p>1. Definitions</p>
      <p>1.1. "Confidential Information" means any and all non-public, proprietary, or sensitive information, in any form, whether oral, written, electronic, or otherwise, disclosed by the Disclosing Party to the Receiving Party, including but not limited to:</p>
      <p>Business operations, plans, or strategies.</p>
      <p>Client, employee, or vendor information.</p>
      <p>Financial information and projections.</p>
      <p>Marketing strategies.</p>
      <p>Intellectual property, including but not limited to trade secrets, patents, copyrights, trademarks, designs, concepts, and know-how.</p>
      <p>Technical data, research, and development materials.</p>
      <p>Systems, software, algorithms, or methodologies.</p>
      <p>Any media or content created while employed or contracted by Safer Health Solutions, including but not limited to: videos, audio, documents, designs, presentations, digital tools, or physical goods.</p>
      <p>All projects, initiatives, contracts, and programs affiliated with Safer Health Solutions, known or unknown</p>
      <p>Any other information marked or otherwise identified as confidential.</p>
      <p>2. Obligations of Receiving Party</p>
      <p>2.1. Receiving Party agrees to:</p>
      <p>Maintain the strict confidentiality of the Confidential Information.</p>
      <p>Use the Confidential Information solely for the Permitted Purpose.</p>
      <p>Limit disclosure of the Confidential Information to its employees, agents, or contractors who need to know for the Permitted Purpose and are bound by confidentiality obligations at least as strict as those in this Agreement.</p>
      <p>Implement reasonable security measures to protect the Confidential Information.</p>
      <p>2.2. Receiving Party shall not:</p>
      <p>Disclose, copy, or reproduce Confidential Information without prior written consent from Disclosing Party.</p>
      <p>Reverse engineer, disassemble, or decompile any materials containing Confidential Information.</p>
      <p>3. Exclusions from Confidential Information</p>
      <p>Confidential Information does not include information that:</p>
      <p>Is or becomes publicly available without breach of this Agreement.</p>
      <p>Is lawfully known to the Receiving Party prior to disclosure by the Disclosing Party.</p>
      <p>Is independently developed by the Receiving Party without reference to or use of the Confidential Information.</p>
      <p>Is required to be disclosed by law or court order, provided that the Receiving Party gives the Disclosing Party prompt notice and an opportunity to seek a protective order.</p>
      <p>4. Ownership and Return of Confidential Information</p>
      <p>All Confidential Information remains the property of the Disclosing Party. Upon termination of this Agreement or upon the Disclosing Party's request, the Receiving Party shall promptly return or destroy all copies of the Confidential Information.</p>
      <p>5. Term and Termination</p>
      <p>This Agreement shall remain in full effect for a period of five (5) years from the Effective Date, regardless of whether the Receiving Party remains employed or affiliated with Safer Health Solutions during that time.</p>
      <p>Obligations related to the protection of Confidential Information, including trade secrets, proprietary data, internal strategies, and intellectual property, shall survive termination of employment or this Agreement and remain in effect indefinitely.</p>
      <p>6. No License or Ownership Rights</p>
      <p>This Agreement does not grant any license or ownership rights to the Receiving Party, whether express or implied, under any patents, copyrights, trademarks, or other intellectual property rights.</p>
      <p>7. Remedies</p>
      <p>Receiving Party acknowledges that unauthorized disclosure or use of the Confidential Information may cause irreparable harm to the Disclosing Party, for which monetary damages may be inadequate. The Disclosing Party shall be entitled to seek injunctive relief in addition to any other remedies available at law or in equity.</p>
      <p>8. Indemnification</p>
      <p>The Receiving Party shall indemnify, defend, and hold harmless the Disclosing Party and its officers, directors, employees, and agents from any claims, damages, losses, or expenses resulting from the unauthorized disclosure or use of the Confidential Information.</p>
      <p>9. Non-Compete and Non-Solicitation</p>
      <p>For an indefinite period following the termination of this Agreement, the Receiving Party shall not:</p>
      <p>Engage in any business activities that compete with those of the Disclosing Party.</p>
      <p>Solicit or hire any employees, contractors, or clients of the Disclosing Party.</p>
      <p>10. Governing Law and Jurisdiction</p>
      <p>This Agreement shall be governed by and construed in accordance with the laws of the State of California. Any disputes arising out of or in connection with this Agreement shall be resolved in the courts located in Vallejo, California.</p>
      <p>11. Miscellaneous</p>
      <p>11.1. Entire Agreement: This Agreement constitutes the entire understanding between the Parties concerning its subject matter and supersedes all prior Agreements.</p>
      <p>11.2. Amendments: This Agreement may only be modified in writing signed by both Parties.</p>
      <p>11.3. Severability: If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
      <p>11.4. Waiver: No failure or delay by either Party in exercising any right under this Agreement shall constitute a waiver.</p>
      <p>IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date as first written above.</p>
      <p>Disclosing Party: Safer Health Solutions</p>
      <p>__________________________________________________________________________SignatureDate</p>
      <p>Receiving Party:</p>
      <p>By: Title:</p>
      <p>__________________________________________________________________________SignatureDate</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'commitment-agreement', title:'Commitment Agreement Letter', category:'nda',
    desc:'Commitment agreement letter between The Uncuffed Project and a partner organization.',
    sourceFile:'AI-Driven eHR Development Team - Commitment Agreement Letter.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'partner_org',label:'Partner Organization Name',type:'text',required:true,placeholder:"e.g. America's Job Center of California"},
      {id:'partner_rep',label:'Partner Representative Name',type:'text',placeholder:'e.g. John Smith'},
      {id:'partner_title',label:'Partner Representative Title',type:'text',placeholder:'e.g. Director'},
      {id:'project_name',label:'Project / Initiative Name',type:'text',required:true,placeholder:'e.g. AI-Driven eHR Development'},
      {id:'commitment_desc',label:'Description of Commitment / Partnership Scope',type:'textarea',required:true,placeholder:'Describe the mutual commitment, roles, responsibilities, and intended outcomes of this partnership...'},
      {id:'signed_by',label:'Signed By (Uncuffed Project)',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>To Whom It May Concern,</p>
      <p>As part of our everyday operations, the AI-Driven eHR Development Team collaborates with The Uncuffed Project, Inc. by developing and maintaining the in-house electronic health/workforce record system that supports participant data tracking, reporting automation, case management workflows, training analytics, and performance measurement. These functions support Uncuffed's long-term sustainability and program execution.</p>
      <p>This letter confirms our intent to participate in the Pathways to Employment: Workforce Reentry & Skills Advancement Initiative.</p>
      <p>We estimate our in-kind contribution at $85,000, representing development hours, system enhancements, analytics support, and training.</p>
      <p>A signature below confirms timely approval.</p>
      <p>Absence of a signature does not reflect withdrawal of support.</p>
      <p>Authorized Signatory for</p>
      <p>AI-Driven eHR Development Team</p>
      <p>Signature: _________________________________</p>
      <p>Name: ____________________________________</p>
      <p>Title: _____________________________________</p>
      <p>Date: _____________________________________</p>
      <p>Authorized Signatory for</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  NOTICE / VACATE LETTERS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'notice-to-vacate', title:'Notice to Vacate — Housing Placement Conclusion', category:'notice',
    desc:'Formal notice that a participant\'s housing placement at Uncuffed City is concluding.',
    sourceFile:'Notice to Vacate - Housing Placement Conclusion [Standard, Generic, Template].docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Participant Name',type:'text',required:true,placeholder:'e.g. James Northrup'},
      {id:'housing_site',label:'Housing Site Name',type:'text',placeholder:'Uncuffed City'},
      {id:'vacate_date',label:'Move-Out / Vacate Date',type:'date',required:true},
      {id:'care_manager',label:'Assigned ${V(d.job_title)} (optional)',type:'text',placeholder:'e.g. Maria Garcia'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){
      const site=V(d.housing_site,'Uncuffed City');
      return wrap(`
        <p>${fmtDate(d.date)}</p>
        <p>Dear ${site} Participant — <strong>${V(d.client_name)}</strong>,</p>
        <p>This letter serves as formal notice that your Housing Placement at <strong>${site}</strong> will conclude effective:</p>
        <p><strong>Move-Out Date: ${fmtDate(d.vacate_date)}</strong></p>
        <p>Your participation in housing at ${site} is time-limited and subject to periodic review. After review, it has been determined that your housing placement with ${site} has reached its conclusion. As a result, you will be required to vacate the premises by the date listed above.</p>
        <p><strong>Important Clarification Regarding Services:</strong> This notice applies only to your housing placement at ${site}. The Uncuffed Project, Inc. will remain available to you, when applicable, as an assigned provider of Enhanced Care Management (ECM) and/or Community Supports (CS). Your eligibility for and participation in ECM and/or Community Supports is not impacted by this housing transition.</p>
        <p><strong>Move-out Expectations:</strong> By ${fmtDate(d.vacate_date)}, you are required to: vacate the housing unit and ${site} premises; remove all personal belongings; return any keys or access devices; and leave the unit in reasonable condition.</p>
        <p><strong>Transition Support:</strong> During the notice period, you are encouraged to work with your assigned ${V(d.job_title)}${d.care_manager?' <strong>'+V(d.care_manager)+'</strong>':''} to support your transition and ongoing service needs.</p>
        <p>This notice is issued in accordance with ${site} Policies &amp; Procedures.</p>
        ${sig(d.signed_by,d.signed_title)}
      `);}
  },

  {
    id:'30-day-vacate', title:'30-Day Notice to Vacate (Property)', category:'notice',
    desc:'California-compliant 30-day notice to vacate a residential property, with proof of service.',
    sourceFile:'30-Day Notice to Vacate.docx',
    fields:[
      {id:'date',label:'Notice Date',type:'date',required:true},
      {id:'tenant_name',label:'Tenant Full Name',type:'text',required:true,placeholder:'e.g. Kayla Valentine'},
      {id:'property_addr',label:'Property Address',type:'text',required:true,placeholder:'4203 Creighton Court, Fairfield, CA 94534'},
      {id:'vacate_date',label:'Final Day of Occupancy',type:'date',required:true},
      {id:'landlord_name',label:'Landlord / Owner Name',type:'text',required:true,placeholder:'e.g. Jodi Sanson'},
      {id:'landlord_phone',label:'Landlord Phone',type:'text',placeholder:'e.g. (925) 457-4704'},
      {id:'service_method',label:'Service Method',type:'select',options:['By personally delivering a copy to the tenant','By leaving a copy with a person of suitable age at the residence and mailing a copy','By posting a copy in a conspicuous place on the property and mailing a copy']},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name" style="font-size:15px;">30-Day Notice to Vacate</div>
      <hr class="doc-divider"/>
      <p><strong>Date:</strong> ${fmtDate(d.date)}</p>
      <p><strong>Property Address:</strong> ${V(d.property_addr)}</p>
      <p>To: <strong>${V(d.tenant_name)}</strong>,</p>
      <p>This letter serves as formal notice that you are required to vacate the above-referenced premises within thirty (30) days of the date of this notice. Your <strong>final day of occupancy will be ${fmtDate(d.vacate_date)}</strong>.</p>
      <p>You are required to remove all personal belongings and return all keys to the property on or before this date. Please leave the premises in clean and good condition. Any outstanding rent, utilities, or damages (if applicable) must be resolved prior to or at the time of move-out.</p>
      <p>If you have any questions regarding this notice, please contact ${V(d.landlord_name)}${d.landlord_phone?' directly at '+V(d.landlord_phone):''}.</p>
      <p><strong>${V(d.landlord_name)}</strong>${d.landlord_phone?'<br/>Phone: '+V(d.landlord_phone):''}</p>
      <div style="margin-top:36px;border-top:1px solid #ccc;padding-top:16px;">
        <p><strong>PROOF OF SERVICE (California)</strong></p>
        <p>I, the undersigned, declare that on ${fmtDate(d.date)}, I served this 30-Day Notice to Vacate on ${V(d.tenant_name)} in the following manner:</p>
        <p>â˜‘ ${V(d.service_method,'By personally delivering a copy to the tenant.')}</p>
        <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
        <p>Executed on: ${fmtDate(d.date)}</p>
        <p>Signature: _________________________</p>
        <p>Printed Name: ${V(d.landlord_name)}</p>
      </div>
    </div>`;}
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  DSR / OPERATIONAL FORMS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  {
    id:'dsr', title:'Daily Shift Report (DSR)', category:'other',
    desc:'Standard daily shift report for any staff role. Documents activities, incidents, and notes.',
    sourceFile:'Daily Shift Report - Template.docx',
    fields:[
      {id:'date',label:'Report Date',type:'date',required:true},
      {id:'staff_name',label:'Staff Full Name',type:'text',required:true,placeholder:'e.g. Ellie Lefiti'},
      {id:'staff_title',label:'Organization & Title',type:'text',placeholder:'e.g. TUP Employment Specialist'},
      {id:'location',label:'Location / Site',type:'text',placeholder:'e.g. ERF 2 — Richmond'},
      {id:'notes',label:'Shift Notes',type:'textarea',required:true,placeholder:'Document activities, meetings, tasks, and client interactions during the shift...'},
      {id:'incidents',label:'Incidents (or "None")',type:'textarea',placeholder:'Describe any incidents that occurred...'},
      {id:'unusual',label:'Unusual Occurrences (or "None")',type:'textarea',placeholder:'Describe any unusual occurrences...'},
      {id:'additional',label:'Additional Notes (optional)',type:'textarea'},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name">THE UNCUFFED PROJECT</div>
      <div class="doc-address">Daily Shift Report</div>
      <hr class="doc-divider"/>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;">
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;width:30%">Staff Name</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.staff_name)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Date</td><td style="padding:6px 10px;border:1px solid #ccc;">${fmtDate(d.date)}</td></tr>
        ${d.location?`<tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Location</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.location)}</td></tr>`:''}
        ${d.staff_title?`<tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Title</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.staff_title)}</td></tr>`:''}
      </table>
      <p style="font-weight:700;font-size:12px;margin-bottom:4px;">NOTES</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:70px;background:#fafafa;font-size:12px;">${(d.notes||'').replace(/\n/g,'<br/>')}</p>
      <p style="font-weight:700;font-size:12px;margin-top:12px;margin-bottom:4px;">INCIDENTS</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:50px;background:#fafafa;font-size:12px;">${(d.incidents||'None').replace(/\n/g,'<br/>')}</p>
      <p style="font-weight:700;font-size:12px;margin-top:12px;margin-bottom:4px;">UNUSUAL OCCURRENCES</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:50px;background:#fafafa;font-size:12px;">${(d.unusual||'None').replace(/\n/g,'<br/>')}</p>
      ${d.additional?`<p style="font-weight:700;font-size:12px;margin-top:12px;margin-bottom:4px;">ADDITIONAL NOTES</p><p style="border:1px solid #ccc;padding:10px;background:#fafafa;font-size:12px;">${V(d.additional).replace(/\n/g,'<br/>')}</p>`:''}
      <div style="margin-top:28px;display:grid;grid-template-columns:1fr 1fr;gap:28px;font-size:12px;">
        <div><p style="font-weight:600;">Organization &amp; Title</p><p>${V(d.staff_title,'')}</p></div>
        <div><p style="font-weight:600;">Signature</p><p>${V(d.staff_name)}</p></div>
      </div>
    </div>`;}
  },

  {
    id:'soap-notes', title:'SOAP Case Notes', category:'other',
    desc:'Structured SOAP (Subjective, Objective, Assessment, Plan) clinical/case management notes.',
    sourceFile:'SOAP Case Notes Template.docx',
    fields:[
      {id:'date',label:'Date of Session',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. John Smith'},
      {id:'staff_name',label:'Staff / Case Manager Name',type:'text',required:true,placeholder:'e.g. Maria Garcia'},
      {id:'staff_title',label:'Staff Title',type:'text',placeholder:'e.g. ${V(d.job_title)}'},
      {id:'session_type',label:'Session Type',type:'select',options:['In-Person','Phone','Video Call','Home Visit','Field Visit']},
      {id:'subjective',label:'Subjective (Client\'s own words / reported concerns)',type:'textarea',required:true,placeholder:'What did the client report, say, or express during this session?'},
      {id:'objective',label:'Objective (Observable facts / behaviors)',type:'textarea',required:true,placeholder:'What was observed? Attendance, mood, behavior, appearance, compliance...'},
      {id:'assessment',label:'Assessment (Professional interpretation)',type:'textarea',required:true,placeholder:'What is your clinical / case management assessment of the situation?'},
      {id:'plan',label:'Plan (Next steps / interventions)',type:'textarea',required:true,placeholder:'What are the next steps, referrals, interventions, or follow-up actions?'},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name">The Uncuffed Project, Inc.</div>
      <div class="doc-address">SOAP Case Notes</div>
      <hr class="doc-divider"/>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;">
        <tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;width:30%">Client Name</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.client_name)}</td><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;width:20%">Date</td><td style="padding:5px 8px;border:1px solid #ccc;">${fmtDate(d.date)}</td></tr>
        <tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">Staff Name</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.staff_name)}</td><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">Session Type</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.session_type,'In-Person')}</td></tr>
        ${d.staff_title?`<tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">Staff Title</td><td colspan="3" style="padding:5px 8px;border:1px solid #ccc;">${V(d.staff_title)}</td></tr>`:''}
      </table>
      ${['Subjective','Objective','Assessment','Plan'].map((section,i)=>{
        const key=['subjective','objective','assessment','plan'][i];
        const descs=['What the client reported','What was observed','Professional interpretation','Next steps & interventions'][i];
        return `<p style="font-weight:700;font-size:12px;margin-top:14px;margin-bottom:4px;color:#1a3a6b;">${section.toUpperCase()} <span style="font-weight:400;color:#666;font-size:11px;">— ${descs}</span></p>
        <p style="border:1px solid #ccc;padding:10px;min-height:55px;background:#fafafa;font-size:12px;">${(d[key]||'').replace(/\n/g,'<br/>')}</p>`;
      }).join('')}
      <div style="margin-top:28px;display:grid;grid-template-columns:1fr 1fr;gap:28px;font-size:11px;border-top:1px solid #ccc;padding-top:14px;">
        <div><p>Staff Signature: _________________________</p><p>${V(d.staff_name)} — ${V(d.staff_title,'')}</p></div>
        <div><p>Date Completed: ${fmtDate(d.date)}</p></div>
      </div>
    </div>`;}
  },

  {
    id:'resident-room-check', title:'Resident Room Check Record', category:'other',
    desc:'Template for documenting resident room inspections.',
    sourceFile:'Resident Room Check Record (Template).docx',
    fields:[
      {id:'date',label:'Check Date',type:'date',required:true},
      {id:'room_number',label:'Room / Unit Number',type:'text',required:true,placeholder:'e.g. Unit #101'},
      {id:'resident_name',label:'Resident Name',type:'text',required:true,placeholder:'e.g. John Smith'},
      {id:'inspector_name',label:'Inspector / Staff Name',type:'text',required:true,placeholder:'e.g. Maria Garcia'},
      {id:'cleanliness',label:'Cleanliness Status',type:'select',required:true,options:['Pass — Meets Standards','Fail — Action Required','Warning — Needs Improvement']},
      {id:'issues_found',label:'Issues Found (or "None")',type:'textarea',placeholder:'List any items, violations, or concerns found during the room check...'},
      {id:'action_required',label:'Action Required (or "None")',type:'textarea',placeholder:'Describe any required follow-up actions...'},
      {id:'notes',label:'Additional Notes (optional)',type:'textarea'},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name">The Uncuffed Project, Inc.</div>
      <div class="doc-address">Resident Room Check Record</div>
      <hr class="doc-divider"/>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;">
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;width:30%">Date</td><td style="padding:6px 10px;border:1px solid #ccc;">${fmtDate(d.date)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Room / Unit</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.room_number)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Resident Name</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.resident_name)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Inspector</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.inspector_name)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Status</td><td style="padding:6px 10px;border:1px solid #ccc;font-weight:700;color:${d.cleanliness&&d.cleanliness.startsWith('Pass')?'green':d.cleanliness&&d.cleanliness.startsWith('Warning')?'orange':'red'}">${V(d.cleanliness)}</td></tr>
      </table>
      <p style="font-weight:700;font-size:12px;margin-bottom:4px;">ISSUES FOUND</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:50px;background:#fafafa;font-size:12px;">${(d.issues_found||'None').replace(/\n/g,'<br/>')}</p>
      <p style="font-weight:700;font-size:12px;margin-top:12px;margin-bottom:4px;">ACTION REQUIRED</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:50px;background:#fafafa;font-size:12px;">${(d.action_required||'None').replace(/\n/g,'<br/>')}</p>
      ${d.notes?`<p style="font-weight:700;font-size:12px;margin-top:12px;margin-bottom:4px;">ADDITIONAL NOTES</p><p style="border:1px solid #ccc;padding:10px;background:#fafafa;font-size:12px;">${V(d.notes).replace(/\n/g,'<br/>')}</p>`:''}
      <div style="margin-top:24px;display:grid;grid-template-columns:1fr 1fr;gap:24px;font-size:11px;border-top:1px solid #ccc;padding-top:12px;">
        <div><p>Inspector Signature: _________________________</p><p>${V(d.inspector_name)}</p></div>
        <div><p>Date: ${fmtDate(d.date)}</p></div>
      </div>
    </div>`;}
  },

  {
    id:'supplies-list', title:'Resident Supplies List', category:'other',
    desc:'Documents supplies given to a resident (bleach, toilet paper, paper towels, etc.).',
    sourceFile:'Uncuffed City - Resident Supplies List {template}.docx',
    fields:[
      {id:'date',label:'Date Given',type:'date',required:true},
      {id:'unit_number',label:'Unit Number',type:'text',required:true,placeholder:'e.g. Unit #101'},
      {id:'resident_name',label:'Resident Name',type:'text',required:true,placeholder:'e.g. John Smith'},
      {id:'supply_bleach',label:'Bleach — Quantity',type:'text',placeholder:'e.g. 1 bottle'},
      {id:'supply_tp',label:'Toilet Paper — Quantity',type:'text',placeholder:'e.g. 1 roll'},
      {id:'supply_pt',label:'Paper Towels — Quantity',type:'text',placeholder:'e.g. 1 roll'},
      {id:'supply_other',label:'Other Supplies (optional)',type:'textarea',placeholder:'List any other supplies given...'},
      {id:'staff_name',label:'Staff Name',type:'text',required:true,placeholder:'e.g. Maria Garcia'},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name">Uncuffed City</div>
      <div class="doc-address">Resident Supplies List</div>
      <hr class="doc-divider"/>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;">
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;width:30%">Unit Number</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.unit_number)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Resident Name</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.resident_name)}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;background:#f9f9f9;font-weight:600;">Date Given</td><td style="padding:6px 10px;border:1px solid #ccc;">${fmtDate(d.date)}</td></tr>
      </table>
      <table style="width:100%;border-collapse:collapse;font-size:12px;">
        <tr style="background:#f0f4f8;"><th style="padding:7px 10px;border:1px solid #ccc;text-align:left;">Supply</th><th style="padding:7px 10px;border:1px solid #ccc;text-align:left;">Quantity</th><th style="padding:7px 10px;border:1px solid #ccc;text-align:left;">Given?</th></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;">Bleach</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.supply_bleach,'"”')}</td><td style="padding:6px 10px;border:1px solid #ccc;">${d.supply_bleach?'â˜‘':'â˜'}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;">Toilet Paper</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.supply_tp,'"”')}</td><td style="padding:6px 10px;border:1px solid #ccc;">${d.supply_tp?'â˜‘':'â˜'}</td></tr>
        <tr><td style="padding:6px 10px;border:1px solid #ccc;">Paper Towels</td><td style="padding:6px 10px;border:1px solid #ccc;">${V(d.supply_pt,'"”')}</td><td style="padding:6px 10px;border:1px solid #ccc;">${d.supply_pt?'â˜‘':'â˜'}</td></tr>
        ${d.supply_other?`<tr><td style="padding:6px 10px;border:1px solid #ccc;">Other</td><td colspan="2" style="padding:6px 10px;border:1px solid #ccc;">${V(d.supply_other)}</td></tr>`:''}
      </table>
      <div style="margin-top:24px;font-size:11px;border-top:1px solid #ccc;padding-top:12px;">
        <p>Staff Name: <strong>${V(d.staff_name)}</strong> &nbsp;&nbsp; Signature: _________________________</p>
        <p>Resident Signature: _________________________ Date: ${fmtDate(d.date)}</p>
      </div>
    </div>`;}
  },

  {
    id:'ecm-care-plan', title:'ECM Care Plan', category:'other',
    desc:'Enhanced Care Management (ECM) care plan for a client.',
    sourceFile:'Enhanced Care Management (ECM) Care Plan Template.docx',
    fields:[
      {id:'date',label:'Plan Date',type:'date',required:true},
      {id:'client_name',label:'Client Full Name',type:'text',required:true,placeholder:'e.g. John Smith'},
      {id:'dob',label:'Client Date of Birth (optional)',type:'date'},
      {id:'care_manager',label:'Assigned ${V(d.job_title)}',type:'text',required:true,placeholder:'e.g. Maria Garcia'},
      {id:'goals',label:'Care Goals / Priority Needs',type:'textarea',required:true,placeholder:'List the client\'s main goals and priority areas (housing, medical, mental health, employment, etc.)...'},
      {id:'services',label:'Services / Referrals Being Provided',type:'textarea',required:true,placeholder:'List the specific services, referrals, and interventions planned...'},
      {id:'barriers',label:'Identified Barriers',type:'textarea',placeholder:'List any barriers to care or obstacles the client is facing...'},
      {id:'next_review',label:'Next Review Date (optional)',type:'date'},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name">The Uncuffed Project, Inc.</div>
      <div class="doc-address">Enhanced Care Management (ECM) — Care Plan</div>
      <hr class="doc-divider"/>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;">
        <tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;width:30%">Client Name</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.client_name)}</td><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;width:20%">Plan Date</td><td style="padding:5px 8px;border:1px solid #ccc;">${fmtDate(d.date)}</td></tr>
        ${d.dob?`<tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">Date of Birth</td><td style="padding:5px 8px;border:1px solid #ccc;">${fmtDate(d.dob)}</td><td colspan="2"></td></tr>`:''}
        <tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">${V(d.job_title)}</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.care_manager)}</td>${d.next_review?`<td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">Next Review</td><td style="padding:5px 8px;border:1px solid #ccc;">${fmtDate(d.next_review)}</td>`:'<td colspan="2"></td>'}</tr>
      </table>
      <p style="font-weight:700;font-size:12px;margin-bottom:4px;color:#1a3a6b;">CARE GOALS / PRIORITY NEEDS</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:60px;background:#fafafa;font-size:12px;">${(d.goals||'').replace(/\n/g,'<br/>')}</p>
      <p style="font-weight:700;font-size:12px;margin-top:14px;margin-bottom:4px;color:#1a3a6b;">SERVICES / REFERRALS PLANNED</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:60px;background:#fafafa;font-size:12px;">${(d.services||'').replace(/\n/g,'<br/>')}</p>
      ${d.barriers?`<p style="font-weight:700;font-size:12px;margin-top:14px;margin-bottom:4px;color:#1a3a6b;">IDENTIFIED BARRIERS</p><p style="border:1px solid #ccc;padding:10px;min-height:40px;background:#fafafa;font-size:12px;">${V(d.barriers).replace(/\n/g,'<br/>')}</p>`:''}
      <div style="margin-top:24px;display:grid;grid-template-columns:1fr 1fr;gap:24px;font-size:11px;border-top:1px solid #ccc;padding-top:12px;">
        <div><p>${V(d.job_title)} Signature: _________________________</p><p>${V(d.care_manager)}</p></div>
        <div><p>Client Signature: _________________________</p><p>${V(d.client_name)}</p></div>
      </div>
    </div>`;}
  },

  {
    id:'risk-reduction-plan', title:'Risk Reduction Plan', category:'other',
    desc:'Individualized risk reduction plan for a program participant.',
    sourceFile:'Risk Reduction Plan v.2 [TEMPLATE].docx',
    fields:[
      {id:'date',label:'Plan Date',type:'date',required:true},
      {id:'client_name',label:'Participant Full Name',type:'text',required:true,placeholder:'e.g. John Smith'},
      {id:'care_manager',label:'Assigned ${V(d.job_title)} / Staff',type:'text',required:true,placeholder:'e.g. Maria Garcia'},
      {id:'risk_factors',label:'Identified Risk Factors',type:'textarea',required:true,placeholder:'List key risk factors identified for this individual (substance use, antisocial peers, mental health, etc.)...'},
      {id:'protective_factors',label:'Protective / Strength-Based Factors',type:'textarea',placeholder:'List protective factors, strengths, and supports available to this individual...'},
      {id:'reduction_strategies',label:'Risk Reduction Strategies',type:'textarea',required:true,placeholder:'List specific strategies, interventions, and steps to reduce identified risks...'},
      {id:'review_date',label:'Next Review Date',type:'date'},
    ],
    generate(d){return `<div class="doc-preview">
      <div class="doc-org-name">The Uncuffed Project, Inc.</div>
      <div class="doc-address">Individualized Risk Reduction Plan</div>
      <hr class="doc-divider"/>
      <table style="width:100%;border-collapse:collapse;margin-bottom:14px;font-size:12px;">
        <tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;width:30%">Participant Name</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.client_name)}</td><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;width:20%">Date</td><td style="padding:5px 8px;border:1px solid #ccc;">${fmtDate(d.date)}</td></tr>
        <tr><td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">${V(d.job_title)}</td><td style="padding:5px 8px;border:1px solid #ccc;">${V(d.care_manager)}</td>${d.review_date?`<td style="padding:5px 8px;border:1px solid #ccc;background:#f0f4f8;font-weight:600;">Next Review</td><td style="padding:5px 8px;border:1px solid #ccc;">${fmtDate(d.review_date)}</td>`:'<td colspan="2"></td>'}</tr>
      </table>
      <p style="font-weight:700;font-size:12px;margin-bottom:4px;color:#8b0000;">IDENTIFIED RISK FACTORS</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:55px;background:#fafafa;font-size:12px;">${(d.risk_factors||'').replace(/\n/g,'<br/>')}</p>
      ${d.protective_factors?`<p style="font-weight:700;font-size:12px;margin-top:14px;margin-bottom:4px;color:#006400;">PROTECTIVE / STRENGTH-BASED FACTORS</p><p style="border:1px solid #ccc;padding:10px;min-height:55px;background:#fafafa;font-size:12px;">${V(d.protective_factors).replace(/\n/g,'<br/>')}</p>`:''}
      <p style="font-weight:700;font-size:12px;margin-top:14px;margin-bottom:4px;color:#1a3a6b;">RISK REDUCTION STRATEGIES</p>
      <p style="border:1px solid #ccc;padding:10px;min-height:70px;background:#fafafa;font-size:12px;">${(d.reduction_strategies||'').replace(/\n/g,'<br/>')}</p>
      <div style="margin-top:24px;display:grid;grid-template-columns:1fr 1fr;gap:24px;font-size:11px;border-top:1px solid #ccc;padding-top:12px;">
        <div><p>Staff Signature: _________________________</p><p>${V(d.care_manager)}</p></div>
        <div><p>Participant Signature: _________________________</p><p>${V(d.client_name)}</p></div>
      </div>
    </div>`;}
  },

  {
    id:'employer-email', title:'Employer Invitation Email Template', category:'employment',
    desc:'Email/letter inviting an employer to participate in a hiring or workforce development event.',
    sourceFile:'Employer Invitation Email Template.docx',
    fields:[
      {id:'date',label:'Date',type:'date',required:true},
      {id:'employer_name',label:'Employer / Company Name',type:'text',required:true,placeholder:'e.g. Amazon Logistics'},
      {id:'contact_name',label:'Contact Person Name (optional)',type:'text',placeholder:'e.g. John Smith, HR Director'},
      {id:'event_name',label:'Event / Initiative Name',type:'text',required:true,placeholder:'e.g. Reentry Job Fair 2026'},
      {id:'event_date',label:'Event Date (optional)',type:'date'},
      {id:'event_location',label:'Event Location (optional)',type:'text',placeholder:'e.g. 690 Walnut Ave. Vallejo, CA'},
      {id:'event_details',label:'Event Details / What You\'re Asking For',type:'textarea',required:true,placeholder:'Describe the event, what you\'re asking from the employer, and why it matters...'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Founder & CEO'},
    ],
    generate(d){return wrap(`
      <p>Date: March 3, 2026</p>
      <p>Property Address:</p>
      <p>4203 Creighton Court</p>
      <p>Fairfield, CA 94534</p>
      <p>To: Kayla Valentine,</p>
      <p>This letter serves as formal notice that you are required to vacate the above-referenced premises within thirty (30) days of the date of this notice.</p>
      <p>Your final day of occupancy will be April 2, 2026. You are required to remove all personal belongings and return all keys to the property on or before this date.</p>
      <p>Please leave the premises in clean and good condition. Any outstanding rent, utilities, or damages (if applicable) must be resolved prior to or at the time of move-out.</p>
      <p>If you have any questions regarding this notice, please contact me directly at 925-457-4704.</p>
      <p>Jodi Sanson</p>
      <p>Phone: (925) 457-4704</p>
      <p>PROOF OF SERVICE (California)</p>
      <p>I, the undersigned, declare that on March 3, 2026, I served this 30-Day Notice to Vacate on Kayla Valentine in the following manner (check one):</p>
      <p>â˜‘   By personally delivering a copy to the tenant.</p>
      <p>â˜   By leaving a copy with a person of suitable age and discretion at the residence/business and mailing a copy to the tenant at the property address.</p>
      <p>â˜   By posting a copy in a conspicuous place on the property and mailing a copy to the tenant at the property address (after reasonable attempt at personal service).</p>
      <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
      <p>Executed on: Tuesday March 3rd, 2026</p>
      <p>Signature:.        Jodi Sanson        .</p>
      <p>Printed Name: Jodi Sanson</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'ecm-info-letter', title:'ECM Informational Letter', category:'acceptance',
    desc:'Informational letter explaining ECM services to a recipient "” not an acceptance or denial.',
    sourceFile:'ECM Informational Letter {Template}.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'client_name',label:'Recipient Name',type:'text',required:true,placeholder:'e.g. Marcus Williams'},
      {id:'prefix',label:'Salutation',type:'select',required:true,options:['Mr.','Ms.','Mx.','Dr.']},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:'Daniel Darling'},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Justice-Impacted Coordinator'},
    ],
    generate(d){return wrap(`
      <p>${fmtDate(d.date)}</p>
      <p>Re: Enhanced Care Management Services</p>
      <p>Hello ${V(d.prefix)} ${V(d.client_name)},</p>
      <p>The Uncuffed Project provides ECM services designed to support justice-impacted individuals with complex medical, behavioral health, and social needs, regardless of housing location. Acceptance into ECM services does not require placement in, or residency at, any Uncuffed Project housing site, and services may be provided even when an individual is paroling to or residing in another county or jurisdiction.</p>
      <p>Our ECM model is built to deliver care coordination, system navigation, and continuity of support across medical, behavioral health, reentry, and community-based services. This includes, but is not limited to, assistance with healthcare access, appointment coordination, transportation support, benefits navigation, linkage to treatment providers, and structured reentry stabilization services.</p>
      <p>Participation in ECM services through The Uncuffed Project is service-based only and should not be interpreted as a housing placement, residential admission, or guarantee of lodging. All services are delivered in alignment with applicable ECM guidelines and coordination requirements.</p>
      <p>Should additional verification or clarification be required, our team remains available to support inter-agency coordination and continuity of care.</p>
      <p>Thank you for your time and consideration.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

  {
    id:'letter-of-correspondence', title:'General Correspondence Letter', category:'other',
    desc:'A general purpose correspondence letter for any outreach or communication.',
    sourceFile:'Letter for Correspondence.docx',
    fields:[
      {id:'date',label:'Letter Date',type:'date',required:true},
      {id:'recipient_name',label:'Recipient Name',type:'text',required:true,placeholder:'e.g. Mr. Casillas'},
      {id:'body',label:'Letter Body',type:'textarea',required:true,placeholder:'Write the full body of the correspondence here...'},
      {id:'signed_by',label:'Signed By',type:'text',placeholder:"Damon L. Cooke"},
      {id:'signed_title',label:'Signer Title',type:'text',placeholder:'Chief Executive Officer, The Uncuffed Project, Inc.'},
    ],
    generate(d){return wrap(`
      <p>June 22, 2026</p>
      <p>Mr. Casillas,</p>
      <p>Thank you for reaching out to The Uncuffed Project and for your interest in our program. We truly appreciate you taking the time to connect with us.</p>
      <p>At this time, we do not have housing available in Crescent City. You would have to reach out to them directly for housing information.</p>
      <p>If you are planning to parole to Solano County, we would be honored to assist you through our housing program. We begin our housing application process approximately six to eight months prior to an individual's release date. As you get closer to that timeframe, we would be happy to send you our questionnaire so we can better understand your individual needs, provide appropriate support, and help you navigate the transition home as smoothly as possible.</p>
      <p>In the meantime, please know that you do not have to wait until your release to begin engaging with our program. We offer correspondence courses designed to provide encouragement, education, and support while you complete your time. If you are interested in participating, simply send us a letter, and our Care Navigator who works with justice-impacted individuals will be happy to assist you, answer your questions, and help you get started.</p>
      <p>We believe that preparation and support can begin long before someone walks through the gate, and we would be honored to be part of your journey. We look forward to connecting with you and supporting you every step of the way.</p>
      ${sig(d.signed_by,d.signed_title)}
    `);}
  },

];

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
//  RENDER + UI LOGIC (unchanged from before)
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

let selectedTemplate = null;

function renderCards(filter='all', search='') {
  const grid = document.getElementById('template-grid');
  const q = search.toLowerCase().trim();
  const filtered = TEMPLATES.filter(t => {
    const catMatch = filter==='all' || t.category===filter;
    const searchMatch = !q || t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || (t.sourceFile&&t.sourceFile.toLowerCase().includes(q));
    return catMatch && searchMatch;
  });
  if (!filtered.length) { grid.innerHTML='<div class="no-results">No documents found.</div>'; return; }
  grid.innerHTML = filtered.map(t=>`
    <div class="template-card" data-id="${t.id}" role="button" tabindex="0" aria-label="Select ${t.title}">
      <div class="card-category cat-${t.category}">${catLabel(t.category)}</div>
      <div class="card-title">${t.title}</div>
      <div class="card-desc">${t.desc}</div>
      <div class="card-fields">
        ${t.fields.slice(0,5).map(f=>`<span class="field-tag">${f.label}</span>`).join('')}
        ${t.fields.length>5?`<span class="field-tag">+${t.fields.length-5} more</span>`:''}
      </div>
      <div class="card-src">Source: ${t.sourceFile||'"”'}</div>
      <div class="card-arrow"><svg viewBox="0 0 16 16" fill="none" width="14"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> Fill &amp; Generate</div>
    </div>
  `).join('');
  grid.querySelectorAll('.template-card').forEach(card=>{
    card.addEventListener('click',()=>openTemplate(card.dataset.id));
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')openTemplate(card.dataset.id);});
  });
}

function catLabel(cat) {
  return {acceptance:'Acceptance',denial:'Denial',employment:'Employment',residency:'Residency/Address',legal:'Legal/Parole',hr:'HR/Staff',nda:'NDA/Agreements',notice:'Notice',other:'Other'}[cat]||cat;
}

function openTemplate(id) {
  selectedTemplate = TEMPLATES.find(t=>t.id===id);
  if(!selectedTemplate) return;
  document.getElementById('step-select').classList.add('hidden');
  document.getElementById('step-form').classList.remove('hidden');
  document.getElementById('form-title').textContent = selectedTemplate.title;
  document.getElementById('form-desc').textContent = selectedTemplate.desc;
  buildFormFields(selectedTemplate.fields);
  resetPreview();
  window.scrollTo({top:0,behavior:'smooth'});
}

function buildFormFields(fields) {
  const container = document.getElementById('form-fields');
  container.innerHTML = '';
  fields.forEach(f=>{
    const g = document.createElement('div');
    g.className='field-group';
    g.innerHTML=`
      <label class="field-label" for="f_${f.id}">${f.label}${f.required?'<span class="field-required">*</span>':''}</label>
      ${buildInput(f)}
      ${f.hint?`<p class="field-hint">${f.hint}</p>`:''}
    `;
    container.appendChild(g);
  });
}

function buildInput(f) {
  if(f.type==='textarea') return `<textarea class="field-textarea" id="f_${f.id}" name="${f.id}" placeholder="${f.placeholder||''}" ${f.required?'required':''}></textarea>`;
  if(f.type==='select') return `<select class="field-select" id="f_${f.id}" name="${f.id}">${(f.options||[]).map(o=>`<option value="${o}">${o}</option>`).join('')}</select>`;
  return `<input class="field-input" type="${f.type}" id="f_${f.id}" name="${f.id}" placeholder="${f.placeholder||''}" ${f.required?'required':''} autocomplete="off"/>`;
}

function collectFormData() {
  const data={};
  if(!selectedTemplate) return data;
  selectedTemplate.fields.forEach(f=>{const el=document.getElementById(`f_${f.id}`);if(el)data[f.id]=el.value;});
  return data;
}

function updatePreview() {
  if(!selectedTemplate) return;
  const html = selectedTemplate.generate(collectFormData());
  document.getElementById('preview-body').innerHTML = html;
}

function resetPreview() {
  document.getElementById('preview-body').innerHTML=`<div class="preview-placeholder"><svg viewBox="0 0 60 80" fill="none" width="60"><rect x="5" y="5" width="50" height="70" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/><rect x="15" y="20" width="30" height="3" rx="1.5" fill="#334155"/><rect x="15" y="28" width="25" height="2" rx="1" fill="#1e3a5f" opacity="0.8"/><rect x="15" y="34" width="28" height="2" rx="1" fill="#1e3a5f" opacity="0.8"/><rect x="15" y="40" width="22" height="2" rx="1" fill="#1e3a5f" opacity="0.6"/></svg><p>Fill in the form to see a live preview</p></div>`;
}

let debounceTimer=null;
function debouncedPreview(){clearTimeout(debounceTimer);debounceTimer=setTimeout(updatePreview,300);}

function printDocument(){
  if(!selectedTemplate) return;
  document.getElementById('print-area').innerHTML=selectedTemplate.generate(collectFormData());
  window.print();
}

function downloadDocument(){
  if(!selectedTemplate) return;
  const title = selectedTemplate.title;
  const html  = selectedTemplate.generate(collectFormData());

  // Collect all CSS rules from every stylesheet on the page
  let cssText = '';
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        cssText += rule.cssText + '\n';
      }
    } catch(e) {
      // cross-origin sheet — link it by URL instead
      if (sheet.href) cssText += `@import url("${sheet.href}");\n`;
    }
  }

  // Resolve the base URL so relative asset paths (images, etc.) work in the new window
  const base = window.location.href.replace(/\/[^/]*$/, '/');

  const printWin = window.open('', '_blank', 'width=900,height=700');
  if (!printWin) {
    alert('Pop-up blocked. Please allow pop-ups for this page and try again.');
    return;
  }

  printWin.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>${title}</title>
  <base href="${base}"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800&family=Dancing+Script:wght@600&display=swap" rel="stylesheet"/>
  <style>
    ${cssText}
    /* ── Print / PDF overrides ── */
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

    /* Setting @page margin to 0 tells Chrome NOT to print its built-in
       URL / date-time header and footer lines */
    @page {
      size: letter portrait;
      margin: 0;
    }

    body {
      margin: 0;
      padding: 0.5in;          /* compensate for the removed @page margin */
      background: #fff;
      font-family: 'Inter', system-ui, sans-serif;
    }

    .doc-preview {
      box-shadow: none !important;
      border-radius: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
      page-break-inside: avoid; /* keep a single-page doc on one page */
    }
  </style>
</head>
<body>
  ${html}
  <script>
    // Wait for fonts + images to load, then auto-trigger print dialog
    window.addEventListener('load', function () {
      setTimeout(function () { window.print(); }, 600);
    });
  <\/script>
</body>
</html>`);
  printWin.document.close();
}

document.addEventListener('DOMContentLoaded',()=>{
  let currentCat='all';
  renderCards('all','');

  // Total count badge
  document.querySelector('.step-desc').textContent = `Select from ${TEMPLATES.length} document templates. Fill in the variable fields, then download or print instantly.`;

  document.getElementById('category-filter').addEventListener('click',e=>{
    const btn=e.target.closest('.cat-btn');
    if(!btn) return;
    document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentCat=btn.dataset.cat;
    renderCards(currentCat,document.getElementById('search-input').value);
  });

  document.getElementById('search-input').addEventListener('input',e=>{
    renderCards(currentCat,e.target.value);
  });

  document.getElementById('back-btn').addEventListener('click',()=>{
    document.getElementById('step-form').classList.add('hidden');
    document.getElementById('step-select').classList.remove('hidden');
    selectedTemplate=null;
    window.scrollTo({top:0,behavior:'smooth'});
  });

  document.getElementById('doc-form').addEventListener('input',debouncedPreview);
  document.getElementById('doc-form').addEventListener('change',debouncedPreview);
  document.getElementById('doc-form').addEventListener('submit',e=>{
    e.preventDefault();
    updatePreview();
    document.getElementById('preview-panel').scrollIntoView({behavior:'smooth',block:'start'});
  });

  document.getElementById('print-btn').addEventListener('click', printDocument);
});


