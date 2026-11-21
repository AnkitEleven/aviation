(() => {
  'use strict';

  const titleCaseAcronyms = new Set('MBA NIMS NAAC UGC QS FTU USA US OTP MNC MNCs AI HR IT HHM SAP KPMG EY OM B2B ABHA LPA MIS CAT MAT ABDC NSS CARE NPTEL IEEE BOLT CEO HRD CEGR MSME APAC DTORR'.split(' '));
  function titleCaseLabel(value) {
    return String(value).replace(/[A-Za-z]+(?:[’'][A-Za-z]+)?(?:\.[A-Za-z]+)*\.?/g, word => {
      const period = word.endsWith('.') ? '.' : '';
      const stem = period ? word.slice(0, -1) : word;
      if (titleCaseAcronyms.has(stem) || stem.includes('.') || (stem.length === 1 && stem === stem.toUpperCase())) return word;
      return stem[0].toUpperCase() + (stem === stem.toUpperCase() ? stem.slice(1).toLowerCase() : stem.slice(1)) + period;
    });
  }

  // Shared motion preference and admissions configuration.
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  window.NIMS_CONFIG = { applicationEndpoint: '', videos: {}, ...window.NIMS_CONFIG };

  // Faculty profile content.
  // const facultyProfiles = [{"id":"manju-koolwal","name":"Prof. (Dr.) Manju Koolwal","role":"Dean & Principal","qualification":"Ph.D.(Law), NET","specialisation":"Family Law","experience":"38 years","metrics":[{"label":"Overall publications","value":"40"},{"label":"Publications at NIMS","value":"15"}],"achievement":"","research":"","joined":"12 Nov 2018","appointment":"Permanent","department":"NIMS School of Law","portrait":"images/manju-koolwal-portrait-regenerated.webp","sourceRow":null,"generated":true}, {"id": "mp", "name": "Dr. Mahaveer Prasad Mali", "role": "Assistant Professor", "qualification": "Ph.D.(Law)-Aug 2014", "specialisation": "Corporate Law", "experience": "18 years, 10 months", "metrics": [{"label": "Overall publications", "value": "22"}, {"label": "Publications at NIMS", "value": "19"}], "achievement": "", "research": "", "joined": "1 Nov 2018", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/mp.webp", "sourceRow": 7, "generated": false}, {"id": "ramakant-aggarwal", "name": "Dr. Ramakant Agarwal", "role": "Assistant Professor", "qualification": "Ph.D.(Law)-Jan. 2023", "specialisation": "Corporate Law", "experience": "10 years, 10 months", "metrics": [{"label": "Overall publications", "value": "7"}, {"label": "Publications at NIMS", "value": "7"}], "achievement": "", "research": "", "joined": "3 Sep 2015", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/ramakant-aggarwal.webp", "sourceRow": 8, "generated": false}, {"id": "dr-anjali-chaudhary", "name": "Dr. Anjali Chaudhary", "role": "Assistant Professor", "qualification": "LL.M", "specialisation": "Criminal Law", "experience": "5 years", "metrics": [{"label": "Overall publications", "value": "2"}], "achievement": "", "research": "", "joined": "7 Oct 2026", "appointment": "", "department": "Nims School of Law", "portrait": "images/dr-anjali-chaudhary.webp", "sourceRow": 31, "generated": false}, {"id": "dr-priyanka-gupta", "name": "Dr. Priyanka Gupta", "role": "HoD & Assistant Professor", "qualification": "Ph.D.(Law)-Oct.2022", "specialisation": "Mercantile Law", "experience": "20 years, 8 months", "metrics": [{"label": "Overall publications", "value": "24"}, {"label": "Publications at NIMS", "value": "24"}], "achievement": "", "research": "", "joined": "12 Dec 2012", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/dr-priyanka-gupta.webp", "sourceRow": 5, "generated": false}, {"id": "manish-kumar-singh", "name": "Dr. Manish Kumar Singh", "role": "Assistant Professor", "qualification": "Ph.D.(Law)-Dec. 2021", "specialisation": "Corporate Law", "experience": "14 years, 11 months", "metrics": [{"label": "Overall publications", "value": "28"}, {"label": "Publications at NIMS", "value": "26"}], "achievement": "", "research": "", "joined": "31 Dec 2014", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/manish-kumar-singh.webp", "sourceRow": 6, "generated": false}, {"id": "akhand-pratap-singh", "name": "Mr. Akhand Pratap Singh", "role": "Assistant Professor", "qualification": "LL.M.-June 2024, NET-June 2024", "specialisation": "Criminal Law", "experience": "2 years", "metrics": [{"label": "Overall publications", "value": "3"}, {"label": "Publications at NIMS", "value": "3"}], "achievement": "", "research": "", "joined": "10 Jun 2024", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/akhand=pratap-singh.webp", "sourceRow": 18, "generated": false}, {"id": "ashu-sharma", "name": "Dr. Ashu Sharma", "role": "Assistant Professor", "qualification": "LL.M -July 2019", "specialisation": "Criminal Law", "experience": "2 years, 6 months", "metrics": [{"label": "Overall publications", "value": "0"}], "achievement": "", "research": "", "joined": "10 Sep 2026", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/ashu-sharma.webp", "sourceRow": 22, "generated": false}, {"id": "balaram-yadav", "name": "Dr. Balram Yadav", "role": "Assistant Professor", "qualification": "LL.M Jan- 2021 JRF Nov 2022", "specialisation": "Family Law", "experience": "Fresher", "metrics": [{"label": "Overall publications", "value": "0"}], "achievement": "", "research": "", "joined": "10 Sep 2026", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/balaram-yadav.webp", "sourceRow": 23, "generated": false}, {"id": "damyanti-kanwar-rathore", "name": "Ms. Damyanti Rathore", "role": "Assistant Professor", "qualification": "LL.M.-July2018, Pursuing Ph.D.(2019)", "specialisation": "Criminal Law and Security Law", "experience": "8 years", "metrics": [{"label": "Overall publications", "value": "6"}, {"label": "Publications at NIMS", "value": "3"}], "achievement": "", "research": "", "joined": "9 May 2024", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/damyanti-kanwar-rathore.webp", "sourceRow": 11, "generated": false}, {"id": "vivek-sharma", "name": "Dr. Vivek Sharma", "role": "Associate Professor", "qualification": "LL.M", "specialisation": "", "experience": "", "metrics": [], "achievement": "", "research": "", "joined": "", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/vivek-sharma.webp", "sourceRow": 30, "generated": true}, {"id": "garima-chaudhary", "name": "Ms. Garima Chaudhary", "role": "Assistant Professor", "qualification": "LL.M.-July 2024", "specialisation": "Criminal Law", "experience": "Fresher", "metrics": [], "achievement": "", "research": "", "joined": "21 Aug 2026", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/garima-chaudhary.webp", "sourceRow": 21, "generated": true}, {"id": "hasina-rani", "name": "Hasina Rani", "role": "Assistant Professor", "qualification": "", "specialisation": "", "experience": "", "metrics": [], "achievement": "", "research": "", "joined": "", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/hasina-rani.webp", "sourceRow": 26, "generated": true}, {"id": "himanshu-raj", "name": "Mr. Himanshu Raj", "role": "Assistant Professor", "qualification": "LL.M.-Sep. 2024", "specialisation": "Corporate and Commercial Law", "experience": "2 years, 2 months", "metrics": [{"label": "Overall publications", "value": "5"}, {"label": "Publications at NIMS", "value": "2"}], "achievement": "", "research": "", "joined": "20 Jun 2024", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/himanshu-raj.webp", "sourceRow": 19, "generated": true}, {"id": "jugnu", "name": "Jugnu", "role": "Assistant Professor", "qualification": "LL.M -July 2025 NET -June 2025", "specialisation": "Business Law", "experience": "Fresher", "metrics": [{"label": "Overall publications", "value": "0"}], "achievement": "", "research": "", "joined": "10 Sep 2026", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/jugnu.webp", "sourceRow": 24, "generated": true}, {"id": "mayuri", "name": "Ms. Mayuri", "role": "Assistant Professor", "qualification": "LL.M-June 2024, Ph.D. pursuing (Jan. 2026)", "specialisation": "Corporate and Commercial Law", "experience": "5 years, 3 months", "metrics": [{"label": "Overall publications", "value": "4 papers; 2 books"}, {"label": "Publications at NIMS", "value": "4 papers; 2 books"}], "achievement": "", "research": "", "joined": "30 Jul 2024", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/mayuri.webp", "sourceRow": 16, "generated": true}, {"id": "prachi-kumari", "name": "Ms. Prachi Kumari", "role": "Assistant Professor", "qualification": "LL.M.(June 2024)-,NET-June 2026", "specialisation": "Criminal Law", "experience": "2 years", "metrics": [{"label": "Overall publications", "value": "5"}, {"label": "Publications at NIMS", "value": "3"}], "achievement": "", "research": "", "joined": "14 Jun 2024", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/prachi-kumari.webp", "sourceRow": 14, "generated": true}, {"id": "rahul-tambi", "name": "Rahul Tambi", "role": "Assistant Professor", "qualification": "LL.M July 2026 NET -Dec 2025", "specialisation": "Criminal Law", "experience": "Fresher", "metrics": [{"label": "Overall publications", "value": "5"}], "achievement": "", "research": "", "joined": "7 Sep 2026", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/rahul-tambi.webp", "sourceRow": 28, "generated": true}, {"id": "rajat-pandey", "name": "Mr. Rajat Pandey", "role": "Assistant Professor", "qualification": "LL.M.-June 2025-, NET-June 2025", "specialisation": "Corporate and Commercial Law", "experience": "1 year", "metrics": [{"label": "Overall publications", "value": "8"}, {"label": "Publications at NIMS", "value": "2"}], "achievement": "", "research": "", "joined": "20 Aug 2025", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/rajat-pandey.webp", "sourceRow": 20, "generated": true}, {"id": "shalini-bhatt", "name": "Ms. Shalini Bhatt", "role": "Assistant Professor", "qualification": "LL.M.-June 2025, NET-Dec. 2024", "specialisation": "Criminal Law", "experience": "1 year", "metrics": [{"label": "Overall publications", "value": "3"}, {"label": "Publications at NIMS", "value": "1"}], "achievement": "", "research": "", "joined": "14 Aug 2025", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/shalini-bhatt.webp", "sourceRow": 15, "generated": true}, {"id": "shivam-singh", "name": "Mr. Shivam Singh", "role": "Assistant Professor", "qualification": "LL.M.-Feb. 2024", "specialisation": "Business Law and IPR", "experience": "5 years", "metrics": [{"label": "Overall publications", "value": "6"}, {"label": "Publications at NIMS", "value": "4"}], "achievement": "", "research": "", "joined": "28 Aug 2025", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/shivam-singh.webp", "sourceRow": 13, "generated": true}, {"id": "vishal-gupta", "name": "Vishal Gupta", "role": "Assistant Professor", "qualification": "LL.M July 2026 NET -Dec 2025", "specialisation": "Constitutional Law", "experience": "Fresher", "metrics": [{"label": "Overall publications", "value": "0"}], "achievement": "", "research": "", "joined": "10 Sep 2026", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/vishal-gupta.webp", "sourceRow": 29, "generated": true}, {"id": "waseem-akram", "name": "Mr. Waseem Akram", "role": "Assistant Professor", "qualification": "LL.M.-July 2020 , Pursuing Ph.D.(Nov 2023)", "specialisation": "Criminal Law", "experience": "2 years, 7 months", "metrics": [{"label": "Overall publications", "value": "3"}, {"label": "Publications at NIMS", "value": "3"}], "achievement": "", "research": "", "joined": "15 Feb 2024", "appointment": "Permanent", "department": "Nims School of Law", "portrait": "images/waseem-akram.webp", "sourceRow": 10, "generated": true}];

  const facultyProfiles = [
    {
      "id": "dr-ravi-kumar",
      "name": "Dr. Ravi Kumar",
      "role": "Assistant Professor",
      "qualification": "Ph.D., MTM",
      "specialisation": "Aviation, Tourism",
      "experience": "14 years (8 Years Academic, 6 Years Industrial)",
      "metrics": [
        {
          "label": "Research Papers",
          "value": "6"
        },
        {
          "label": "Book Chapters",
          "value": "5"
        },
        {
          "label": "Total Exp.",
          "value": "14 Years"
        }
      ],
      "achievement": "8 years of academic teaching experience and 6 years of industry experience across Aviation and Tourism sectors.",
      "research": "Specialization in Aviation & Tourism. Author of 6 research papers and 5 book chapters in reputed national and international publications.",
      "joined": "1 Nov 2018",
      "appointment": "Permanent",
      "department": "NIMS Institute of Tourism & Aviation Management",
      "portrait": "images/ravi_kumar.webp",
      "sourceRow": 1,
      "generated": false
    },
    {
      "id": "rajiv-kumar",
      "name": "Rajiv Kumar",
      "role": "Associate Professor (Travel & Tourism)",
      "qualification": "Ph.D., Master of Hotel Management (MHM)",
      "specialisation": "Travel & Tourism, Hotel Industry",
      "experience": "14 years (13 Years Teaching, 1 Year Industry)",
      "metrics": [
        {
          "label": "Publications",
          "value": "8"
        },
        {
          "label": "Teaching Exp.",
          "value": "13 Years"
        },
        {
          "label": "Industry Exp.",
          "value": "1 Year"
        }
      ],
      "achievement": "Awarded UGC NET JRF & SRF from Central University of Himachal Pradesh (2012 to 2017) in Tourism Administration and Management.",
      "research": "Ph.D. on 'Work-Life-Balance: A Study on Hotel Industry' from Central University of Himachal Pradesh (Awarded December 2018). PG: Master of Hotel Management from Kurukshetra University, Kurukshetra. Author of 8 publications.",
      "joined": "3 Sep 2015",
      "appointment": "Permanent",
      "department": "NIMS Institute of Tourism & Aviation Management",
      "portrait": "images/rajiv_kumar.webp",
      "sourceRow": 2,
      "generated": false
    }
  ];


  // Application Form.
  function initResponsiveApplicationSection() {
    const panel = document.querySelector('#apply');
    const desktopRegion = document.querySelector('.hero-application-region');
    const mobileSection = document.querySelector('#mobile-application');
    if (!panel || !desktopRegion || !mobileSection) return;
    const mobile = window.matchMedia('(max-width: 899px)');
    const update = () => {
      (mobile.matches ? mobileSection : desktopRegion).append(panel);
      mobileSection.hidden = !mobile.matches;
    };
    mobile.addEventListener('change', update);
    update();
  }

  function initApplicationForm() {
    const form = document.querySelector('#application-form');
    const state = document.querySelector('#state');
    const city = document.querySelector('#city');
    const status = document.querySelector('#form-status');
    const summary = document.querySelector('.form-error-summary');
    const config = window.NIMS_CONFIG || {};
    const states = {
      'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
      'Arunachal Pradesh': ['Itanagar'],
      'Assam': ['Guwahati', 'Dibrugarh'],
      'Bihar': ['Patna', 'Gaya', 'Muzaffarpur'],
      'Chhattisgarh': ['Raipur', 'Bilaspur'],
      'Goa': ['Panaji', 'Margao'],
      'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
      'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Hisar'],
      'Himachal Pradesh': ['Shimla', 'Dharamshala'],
      'Jharkhand': ['Ranchi', 'Jamshedpur'],
      'Karnataka': ['Bengaluru', 'Mysuru', 'Mangaluru'],
      'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
      'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur'],
      'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      'Manipur': ['Imphal'],
      'Meghalaya': ['Shillong'],
      'Mizoram': ['Aizawl'],
      'Nagaland': ['Kohima', 'Dimapur'],
      'Odisha': ['Bhubaneswar', 'Cuttack'],
      'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar'],
      'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar'],
      'Sikkim': ['Gangtok'],
      'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
      'Telangana': ['Hyderabad', 'Warangal'],
      'Tripura': ['Agartala'],
      'Uttar Pradesh': ['Lucknow', 'Noida', 'Ghaziabad', 'Kanpur', 'Agra', 'Varanasi'],
      'Uttarakhand': ['Dehradun', 'Haridwar'],
      'West Bengal': ['Kolkata', 'Siliguri'],
      'Andaman and Nicobar Islands': ['Port Blair'],
      'Chandigarh': ['Chandigarh'],
      'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Silvassa'],
      'Delhi': ['New Delhi', 'Delhi'],
      'Jammu and Kashmir': ['Jammu', 'Srinagar'],
      'Ladakh': ['Leh', 'Kargil'],
      'Lakshadweep': ['Kavaratti'],
      'Puducherry': ['Puducherry']
    };
    Object.keys(states).sort().forEach(name => state.add(new Option(titleCaseLabel(name), name)));
    state.addEventListener('change', () => {
      city.replaceChildren(new Option('Select City *', ''));
      (states[state.value] || []).concat(state.value ? ['Other city'] : []).forEach(name => city.add(new Option(titleCaseLabel(name),
        name)));
      city.disabled = !state.value;
    });
    document.querySelectorAll('[data-programme]').forEach(button => {
      button.addEventListener('click', () => {
        const disc = document.querySelector('#discipline');
        if (disc && disc.options.length > 1) disc.selectedIndex = 1;
        const prog = document.querySelector('#programme');
        if (prog) prog.value = button.dataset.programme;
        const applyEl = document.querySelector('#apply');
        if (applyEl) {
          applyEl.scrollIntoView({
            behavior: motionPreference.matches ? 'instant' : 'smooth',
            block: 'center'
          });
        }
        const studentName = document.querySelector('#student-name');
        if (studentName) {
          studentName.focus({
            preventScroll: true
          });
        }
      });
      button.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          button.click();
        }
      });
    });
    form.addEventListener('input', event => {
      if (event.target.matches('input,select')) event.target.removeAttribute('aria-invalid');
      if (status.hidden === false) status.hidden = true;
    });
    form.addEventListener('submit', async event => {
      event.preventDefault();
      summary.hidden = true;
      status.hidden = true;
      form.classList.add('was-validated');
      const invalid = Array.from(form.elements).filter(el => el.willValidate && !el.checkValidity());
      invalid.forEach(el => el.setAttribute('aria-invalid', 'true'));
      if (invalid.length) {
        summary.replaceChildren();
        const intro = document.createElement('p');
        intro.className = 'mb-1';
        intro.textContent = 'Please check the highlighted fields.';
        summary.append(intro);
        const list = document.createElement('ul');
        invalid.forEach(el => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#' + el.id;
          a.textContent = el.parentElement.querySelector('.invalid-feedback')?.textContent ||
            'Complete this field';
          a.addEventListener('click', ev => {
            ev.preventDefault();
            el.focus();
          });
          li.append(a);
          list.append(li);
        });
        summary.append(list);
        summary.hidden = false;
        summary.focus();
        return;
      }
      const details = Object.fromEntries(new FormData(form));
      const submit = form.querySelector('[type="submit"]');
      if (config.applicationEndpoint) {
        submit.disabled = true;
        submit.textContent = 'Sending…';
        try {
          const response = await fetch(config.applicationEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
          });
          if (!response.ok) throw new Error('Request failed');
          status.textContent = 'Your details have been sent. The admissions team will contact you.';
        } catch (_) {
          status.textContent = 'Your details could not be sent. Please try again or call +91 9240038097.';
        } finally {
          submit.disabled = false;
          submit.textContent = 'Apply Now';
        }
      } else {
        status.replaceChildren();
        const message = document.createElement('p');
        message.textContent = 'Your details are ready. Call admissions to complete your application.';
        message.className = 'mb-2';
        const call = document.createElement('a');
        call.href = 'tel:+919240038097';
        call.textContent = 'Call +91 9240038097';
        const save = document.createElement('button');
        save.type = 'button';
        save.className = 'btn btn-sm btn-outline-success d-block mt-2';
        save.textContent = 'Save My Application Details';
        save.addEventListener('click', () => {
          const text = 'NIMS University — Application details\n\n' + Object.entries(details).map(([k, v]) => k +
            ': ' + v).join('\n') +
            '\n\nContact admissions: +91 9240038097\nThis summary has not been submitted to the university.';
          const url = URL.createObjectURL(new Blob([text], {
            type: 'text/plain;charset=utf-8'
          }));
          const link = document.createElement('a');
          link.href = url;
          link.download = 'nims-application-details.txt';
          link.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        });
        status.append(message, call, save);
      }
      status.hidden = false;
      status.focus();
    });
  }

  // Video Dialog.
  function initVideoDialog() {
    const config = window.NIMS_CONFIG || {};
    const modalElement = document.querySelector('#story-modal');
    const modal = new bootstrap.Modal(modalElement);
    const media = document.querySelector('#story-media');
    let storyTrigger;
    const youtubeId = url => {
      try {
        const parsed = new URL(url, location.href);
        const host = parsed.hostname.toLowerCase();
        const id = host === 'youtu.be' ? parsed.pathname.slice(1) : ['youtube.com', 'www.youtube.com', 'm.youtube.com']
          .includes(host) ? parsed.searchParams.get('v') : null;
        return /^[\w-]{11}$/.test(id || '') ? id : null;
      } catch (_) {
        return null;
      }
    };
    const stories = document.querySelector('#stories');
    if (stories) {
      const thumbnailSizes = ['maxresdefault', 'sddefault', 'hqdefault'];
      const setThumbnail = (image, size) => {
        image.dataset.youtubeThumbnailSize = String(size);
        const src = `https://i.ytimg.com/vi/${image.dataset.youtubeId}/${thumbnailSizes[size]}.jpg?v=20261102-1`;
        image.closest('[data-video]').dataset.poster = src;
        if (image.getAttribute('src') !== src) image.src = src;
      };
      const fallback = image => {
        if (!(image instanceof HTMLImageElement) || !image.dataset.youtubeId) return;
        const next = Number(image.dataset.youtubeThumbnailSize) + 1;
        if (next < thumbnailSizes.length) setThumbnail(image, next);
      };
      // Capture image events so the infinite slider's copied cards also recover.
      stories.addEventListener('error', event => fallback(event.target), true);
      stories.addEventListener('load', event => {
        if (event.target instanceof HTMLImageElement && event.target.naturalWidth <= 120) fallback(event.target);
      }, true);
      stories.querySelectorAll('[data-video]').forEach(button => {
        const id = youtubeId(button.dataset.video);
        const image = button.querySelector('img');
        if (!id || !image) return;
        if (button.dataset.fallbackPoster) {
          button.dataset.poster = button.dataset.fallbackPoster;
          image.src = button.dataset.fallbackPoster;
          return;
        }
        image.dataset.youtubeId = id;
        setThumbnail(image, 0);
        if (image.complete && image.naturalWidth <= 120) fallback(image);
      });
    }
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-story]');
      if (!button) return;
      const title = button.dataset.story;
      const url = button.dataset.video || config.videos?.[title];
      const id = youtubeId(url);
      // Some videos are unavailable in embeds; use their original watch page.
      if (id && button.dataset.videoTarget === 'youtube') {
        window.open(url, '_blank', 'noopener,noreferrer');
        return;
      }
      storyTrigger = button;
      document.querySelector('#story-modal-title').textContent = titleCaseLabel(title);
      media.replaceChildren();
      if (id) {
        const frame = document.createElement('iframe');
        const start = new URL(url, location.href).searchParams.get('t')?.match(/^(\d+)s?$/)?.[1];
        frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start ? `&start=${Number(start)}` : ''}`;
        frame.title = title;
        frame.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        media.append(frame);
      } else if (url) {
        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'metadata';
        video.src = url;
        video.poster = button.dataset.poster;
        media.append(video);
      } else {
        const poster = document.createElement('img');
        poster.src = button.dataset.poster;
        poster.alt = title;
        media.append(poster);
      }
      document.querySelector('#story-caption').textContent = url ? '' : title;
      modal.show(button);
    });
    modalElement.addEventListener('hide.bs.modal', () => media.replaceChildren());
    modalElement.addEventListener('hidden.bs.modal', () => {
      storyTrigger?.focus({
        preventScroll: true
      });
    });
  }

  // Industry Leaders.
  function initLeaderCarousel() {
    const root = document.querySelector('#leaders');
    const track = root?.querySelector('.leader-cards');
    if (!track?.firstElementChild) return;
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal[open], #story-modal.show, #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const slide = direction => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = track.firstElementChild.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      const pageJump = step * visibleCards;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 2) return;
      const pages = [0];
      for (let left = pageJump; left < maxScroll - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maxScroll);
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const next = (current + direction + pages.length) % pages.length;
      track.scrollTo({ left: pages[next], behavior: motionPreference.matches ? 'instant' : 'smooth' });
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked()) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        slide(1);
      }, 5500);
    };

    root.querySelectorAll('[data-leader-direction]').forEach(button => {
      button.addEventListener('click', () => {
        slide(Number(button.dataset.leaderDirection));
        restartTimer();
      });
    });

    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        slide(event.key === 'ArrowRight' ? 1 : -1);
        restartTimer();
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        track.scrollTo({
          left: event.key === 'Home' ? 0 : track.scrollWidth,
          behavior: motionPreference.matches ? 'instant' : 'smooth'
        });
        restartTimer();
      }
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);
    restartTimer();
  }

  function initLawEngagementShowcase() {
    const root = document.querySelector('.law-engagement-showcase');
    if (!root) return;
    const slides = [...root.querySelectorAll('.law-engagement-slide')];
    const position = root.querySelector('[data-engagement-position]');
    const announcement = root.querySelector('[data-engagement-announcement]');
    let index = 0;
    let pointer = null;
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal[open], #story-modal.show, #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && root.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    function select(next, announce = true) {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-current', i === index);
        slide.setAttribute('aria-hidden', String(i !== index));
        slide.inert = i !== index;
      });
      if (position) position.textContent = `${index + 1} / ${slides.length}`;
      if (announce && announcement) announcement.textContent = slides[index].getAttribute('aria-label');
    }

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || slides.length < 2) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        select(index + 1);
      }, 5500);
    };

    root.querySelectorAll('[data-engagement-direction]').forEach(button => {
      button.addEventListener('click', () => {
        select(index + Number(button.dataset.engagementDirection));
        restartTimer();
      });
    });

    root.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        select(index + (event.key === 'ArrowRight' ? 1 : -1));
        restartTimer();
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        select(event.key === 'Home' ? 0 : slides.length - 1);
        restartTimer();
      }
    });

    root.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    root.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    root.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    root.addEventListener('focusout', () => {
      focused = root.contains(document.activeElement);
      restartTimer();
    });

    root.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
      if (event.pointerType === 'mouse' || event.target.closest('button')) return;
      pointer = { x: event.clientX, y: event.clientY };
    });
    root.addEventListener('pointerup', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
      if (!pointer) return;
      const dx = event.clientX - pointer.x;
      const dy = event.clientY - pointer.y;
      pointer = null;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.25) {
        select(index + (dx < 0 ? 1 : -1));
        restartTimer();
      }
    });
    root.addEventListener('touchstart', pauseTouch, { passive: true });
    root.addEventListener('touchend', pauseTouch, { passive: true });
    root.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(root);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);
    select(0, false);
    restartTimer();
  }

  function initLawEventDetails() {
    const source = document.querySelector('#law-events-data');
    const dialog = document.querySelector('#law-event-dialog');
    if (!source || !dialog) return;
    const events = new Map(JSON.parse(source.textContent).map(event => [event.id, event]));
    const image = dialog.querySelector('[data-event-image]');
    const frame = dialog.querySelector('.law-event-photo-frame');
    const thumbnails = dialog.querySelector('[data-event-thumbnails]');
    const noPhoto = dialog.querySelector('[data-event-no-photo]');
    const galleryControls = dialog.querySelector('[data-event-gallery-controls]');
    let selected = null;
    let photoIndex = 0;
    let trigger = null;
    const sizePhoto = () => {
      frame.style.setProperty('--event-frame-height', `${frame.clientHeight}px`);
      frame.style.setProperty('--event-frame-width', `${frame.clientWidth}px`);
    };
    new ResizeObserver(sizePhoto).observe(frame);

    function showPhoto(index) {
      if (!selected) return;
      const photos = selected.images;
      image.hidden = !photos.length;
      noPhoto.hidden = photos.length > 0;
      galleryControls.hidden = photos.length < 2;
      thumbnails.hidden = photos.length < 2;
      if (!photos.length) {
        image.removeAttribute('src');
        image.alt = '';
        return;
      }
      photoIndex = (index + photos.length) % photos.length;
      const photo = photos[photoIndex];
      image.src = photo.src;
      image.alt = photo.alt;
      image.classList.toggle('is-rotated', Boolean(photo.rotate));
      dialog.querySelector('[data-event-photo-count]').textContent = `${photoIndex + 1} / ${photos.length}`;
      thumbnails.querySelectorAll('button').forEach((button, i) => {
        button.setAttribute('aria-pressed', String(i === photoIndex));
      });
      sizePhoto();
    }

    document.querySelectorAll('[data-law-event]').forEach(button => {
      button.addEventListener('click', () => {
        selected = events.get(button.dataset.lawEvent);
        if (!selected) return;
        trigger = button;
        dialog.querySelector('#law-event-dialog-title').textContent = selected.title;
        dialog.querySelector('[data-event-type]').textContent = selected.type;
        const date = dialog.querySelector('[data-event-date]');
        date.textContent = selected.date;
        date.hidden = !selected.date;
        dialog.querySelector('[data-event-speaker]').textContent = selected.speaker;
        dialog.querySelector('[data-event-description]').textContent = selected.description;
        dialog.querySelector('[data-event-takeaway]').textContent = selected.significance;
        const areas = dialog.querySelector('[data-event-areas]');
        areas.replaceChildren(...selected.areas.map(text => {
          const item = document.createElement('li');
          item.textContent = text;
          return item;
        }));
        thumbnails.replaceChildren(...selected.images.map((photo, index) => {
          const thumbnail = document.createElement('button');
          thumbnail.type = 'button';
          thumbnail.className = 'law-event-thumbnail';
          thumbnail.setAttribute('aria-label', `Show event photograph ${index + 1}`);
          const preview = document.createElement('img');
          preview.src = photo.src;
          preview.alt = '';
          if (photo.rotate) preview.className = 'is-rotated';
          thumbnail.append(preview);
          thumbnail.addEventListener('click', () => showPhoto(index));
          return thumbnail;
        }));
        showPhoto(0);
        dialog.showModal();
        document.body.classList.add('law-event-modal-open');
        dialog.scrollTop = 0;
        requestAnimationFrame(sizePhoto);
      });
    });
    dialog.querySelector('[data-event-photo-prev]').addEventListener('click', () => showPhoto(photoIndex - 1));
    dialog.querySelector('[data-event-photo-next]').addEventListener('click', () => showPhoto(photoIndex + 1));
    dialog.querySelector('[data-event-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      document.body.classList.remove('law-event-modal-open');
      trigger?.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('keydown', event => {
      if (!selected?.images.length) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        showPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
  }

  // Show the floating CTA between the site header and final admissions section.
  function initStickyAdmissionsCTA() {
    const cta = document.querySelector('.sticky-admissions-cta');
    const banner = document.querySelector('#admissions-banner');
    const header = document.querySelector('.site-header');
    if (!cta || !banner) return;
    let frame;
    const update = () => {
      frame = undefined;
      const headerVisible = header && header.getBoundingClientRect().bottom > 0;
      const mobile = window.matchMedia('(max-width: 700px)').matches;
      const hide = !mobile && (headerVisible || banner.getBoundingClientRect().top < window.innerHeight);
      cta.hidden = hide;
      document.body.classList.toggle('sticky-cta-hidden', hide);
    };
    const schedule = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    update();
  }

  // Back To Top.
  function initBackToTop() {
    const topButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      topButton.hidden = window.scrollY < 900;
    }, {
      passive: true
    });
    topButton.addEventListener('click', () => window.scrollTo({
      top: 0,
      behavior: motionPreference.matches ? 'instant' : 'smooth'
    }));
  }

  // Industry Benefits.
  function initIndustryBenefits() {
    const root = document.querySelector('#industry');
    if (!root) return;
    const track = root.querySelector('.industry-benefit-cards');
    if (!track?.firstElementChild) return;
    const controls = root.querySelector('.industry-benefit-controls');
    const previous = controls?.querySelector('[data-benefit-previous]');
    const next = controls?.querySelector('[data-benefit-next]');
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = track.firstElementChild.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const move = direction => {
      const { pages, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked()) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 5500);
    };

    const update = () => {
      const maximum = track.scrollWidth - track.clientWidth;
      if (controls) {
        controls.hidden = maximum < 2;
      }
      if (previous) previous.disabled = false;
      if (next) next.disabled = false;
    };

    if (previous) {
      previous.addEventListener('click', () => {
        move(-1);
        restartTimer();
      });
    }
    if (next) {
      next.addEventListener('click', () => {
        move(1);
        restartTimer();
      });
    }

    track.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
      restartTimer();
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
    restartTimer();
  }

  // Hero And Recognition Panels.
  function initHeroAndRecognition() {
    const preference = motionPreference;
    const cycles = [];
    const paused = () => preference.matches;
    const modalOpen = () => !!document.querySelector('.modal.show');
    const rootClass = document.documentElement;

    function refreshMotion() {
      rootClass.classList.toggle('motion-paused', paused());
      cycles.forEach(c => {
        if (paused()) c.finish();
        c.schedule();
      });
    }
    preference.addEventListener('change', refreshMotion);
    document.addEventListener('visibilitychange', () => cycles.forEach(c => c.schedule()));
    document.addEventListener('shown.bs.modal', () => cycles.forEach(c => c.schedule()));
    document.addEventListener('hidden.bs.modal', () => cycles.forEach(c => c.schedule()));

    function cycle(root, interval, advance, finish = () => { }, pauseOnHover = true) {
      let timer;
      const state = {
        visible: false,
        hovered: false,
        focused: false,
        notBefore: 0
      };
      const blocked = () => paused() || document.hidden || modalOpen() || !state.visible || state.hovered || state
        .focused;

      function schedule() {
        clearTimeout(timer);
        if (blocked()) return;
        timer = setTimeout(async () => {
          if (blocked()) return;
          await advance(1, false);
          schedule();
        }, Math.max(interval, state.notBefore - Date.now()));
      }
      const controller = {
        schedule,
        finish,
        manual(direction) {
          state.notBefore = Date.now() + 2000;
          advance(direction, true);
          schedule();
        }
      };
      root.addEventListener('pointerenter', e => {
        if (e.pointerType !== 'touch' && pauseOnHover) {
          state.hovered = true;
          schedule();
        }
      });
      root.addEventListener('pointerleave', () => {
        state.hovered = false;
        schedule();
      });
      root.addEventListener('focusin', () => {
        state.focused = true;
        schedule();
      });
      root.addEventListener('focusout', () => queueMicrotask(() => {
        state.focused = root.contains(document.activeElement);
        schedule();
      }));
      root.addEventListener('pointerdown', () => {
        state.notBefore = Date.now() + 2000;
        schedule();
      }, {
        passive: true
      });
      new IntersectionObserver(entries => {
        state.visible = entries[0].isIntersecting;
        schedule();
      }, {
        threshold: .08
      }).observe(root);
      cycles.push(controller);
      return controller;
    }

    function announce(root, index, total, label, manual) {
      root.dataset.activeIndex = String(index);
      const count = root.querySelector('.gallery-position');
      if (count) count.textContent = `${index + 1} / ${total}`;
      const live = root.querySelector('.gallery-announcement');
      if (live && manual) live.textContent = `${label}. ${index + 1} of ${total}.`;
    }

    function arrows(root, controller) {
      root.querySelector('.gallery-previous')?.addEventListener('click', () => controller.manual(-1));
      root.querySelector('.gallery-next')?.addEventListener('click', () => controller.manual(1));
    }

    function current(slides, index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-current', i === index);
        slide.setAttribute('aria-hidden', String(i !== index));
        slide.inert = i !== index;
      });
    }
    async function ready(slide) {
      const photo = slide.querySelector('img');
      if (photo && !photo.complete) {
        photo.loading = 'eager';
        try {
          await photo.decode();
        } catch (_) {
          return false;
        }
      }
      return !photo || photo.naturalWidth > 0;
    }
    const hero = document.querySelector('.hero');
    const heroInner = hero.querySelector('.hero-inner');
    const heroBenefits = hero.querySelector('.hero-benefits');
    const alignMobilePortrait = () => {
      const base = heroInner.getBoundingClientRect().bottom - heroBenefits.getBoundingClientRect().top;
      hero.style.setProperty('--mobile-portrait-base', `${base}px`);
    };
    const heroLayoutObserver = new ResizeObserver(alignMobilePortrait);
    heroLayoutObserver.observe(heroInner);
    heroLayoutObserver.observe(heroBenefits);
    alignMobilePortrait();
    const portraits = [...hero.querySelectorAll('.portrait-slide')];
    let portraitIndex = 0;
    let portraitRequest = 0;
    if (portraits.length > 1) {
      cycle(hero, 1500, async (direction, manual) => {
        const generation = ++portraitRequest;
        const target = (portraitIndex + direction + portraits.length) % portraits.length;
        if (!await ready(portraits[target]) || generation !== portraitRequest || (!manual && paused())) return;
        portraitIndex = target;
        current(portraits, portraitIndex);
        hero.dataset.activeIndex = String(portraitIndex);
      }, () => { }, false); // 1.5s per slide; keeps rotating while the mouse is over the hero
      current(portraits, 0);
    }
    hero.dataset.activeIndex = '0';
    const ranking = document.querySelector('.recognition-carousel');
    const rankingTrack = ranking.querySelector('.recognition-pages');
    const panels = [...rankingTrack.children];
    let panelIndex = 0;
    const sizeRecognitionPanel = () => {
      ranking.style.setProperty('--recognition-first-panel-height', `${Math.ceil(panels[0].getBoundingClientRect().height)}px`);
      ranking.style.setProperty('--recognition-panel-height', `${Math.ceil(panels[panelIndex].getBoundingClientRect().height)}px`);
    };
    const recognitionResizeObserver = new ResizeObserver(sizeRecognitionPanel);
    panels.forEach(panel => recognitionResizeObserver.observe(panel));
    sizeRecognitionPanel();
    const rankCycle = cycle(ranking, 5500, (direction, manual) => {
      panelIndex = (panelIndex + direction + panels.length) % panels.length;
      rankingTrack.style.transform = `translateX(-${100 * panelIndex}%)`;
      panels.forEach((panel, i) => {
        panel.inert = i !== panelIndex;
        panel.setAttribute('aria-hidden', String(i !== panelIndex));
      });
      sizeRecognitionPanel();
      announce(ranking, panelIndex, panels.length, panels[panelIndex].dataset.label, manual);
    });
    arrows(ranking, rankCycle);
    announce(ranking, 0, panels.length, panels[0].dataset.label, false);

    function fadeGallery(root, selector, delay) {
      if (!root) return null;
      const slides = [...root.querySelectorAll(selector)];
      let index = 0;
      let request = 0;
      const controller = cycle(root, delay, async (direction, manual) => {
        const generation = ++request;
        const target = (index + direction + slides.length) % slides.length;
        if (!await ready(slides[target]) || generation !== request || (!manual && paused())) return;
        index = target;
        current(slides, index);
        announce(root, index, slides.length, slides[index].dataset.label, manual);
        root.dispatchEvent(new CustomEvent('slidechange', { detail: { index, slide: slides[index] } }));
      });
      current(slides, 0);
      arrows(root, controller);
      announce(root, 0, slides.length, slides[0].dataset.label, false);
      root.dispatchEvent(new CustomEvent('slidechange', { detail: { index: 0, slide: slides[0] } }));
      return controller;
    }
    fadeGallery(document.querySelector('.industry-visit-gallery:not(.fashion-events-gallery)'), '.visit-slide', 4700);

    const fashionGallery = document.querySelector('.fashion-events-gallery');
    if (fashionGallery) {
      const fashionCycle = fadeGallery(fashionGallery, '.visit-slide', 5500);
      fashionGallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        fashionCycle.manual(event.key === 'ArrowRight' ? 1 : -1);
      });

      const copy = document.getElementById('fashion-events-copy');
      if (copy) {
        let currentEvent = null;
        fashionGallery.addEventListener('slidechange', e => {
          const slide = e.detail.slide;
          const eventIdx = slide ? (slide.dataset.event || '0') : '0';
          if (eventIdx === currentEvent) return;

          const prevCard = copy.querySelector('.fashion-event-card.is-active');
          const nextCard = copy.querySelector(`.fashion-event-card[data-event="${eventIdx}"]`);

          if (!prevCard) {
            if (nextCard) {
              nextCard.hidden = false;
              nextCard.classList.add('is-active');
            }
            currentEvent = eventIdx;
            return;
          }

          prevCard.classList.remove('is-active');
          window.setTimeout(() => {
            prevCard.hidden = true;
            if (nextCard) {
              nextCard.hidden = false;
              void nextCard.offsetWidth;
              nextCard.classList.add('is-active');
            }
            currentEvent = eventIdx;
          }, 200);
        });
      }
    }
    document.querySelectorAll('.law-activity-gallery').forEach(gallery => {
      const activityCycle = fadeGallery(gallery, '.law-activity-slide', 6500);
      gallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        activityCycle.manual(event.key === 'ArrowRight' ? 1 : -1);
      });
    });
    const degreeGallery = document.querySelector('.degree-photo-gallery');
    if (degreeGallery) {
      const degreeCycle = fadeGallery(degreeGallery, '.degree-photo-slide', 5000);
      degreeGallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        degreeCycle.manual(event.key === 'ArrowRight' ? 1 : -1);
      });
    }
    refreshMotion();
  }

  // Campus Photo Gallery.
  function initCampusGallery() {
    const gallery = document.getElementById('mbaFacilitiesGallery');
    if (!gallery) return;
    const cards = [...gallery.querySelectorAll('.gallery-image')];
    const section = gallery.closest('#facilities');
    const close = gallery.querySelector('.nims-campus-close');
    const modalPrev = gallery.querySelector('.nims-campus-modal-arrow--prev');
    const modalNext = gallery.querySelector('.nims-campus-modal-arrow--next');
    if (!cards.length || !close) return;
    const campusCounter = section.querySelector('.campus-gallery-position');
    const updateCampusCounter = () => {
      if (!campusCounter || !cards.length) return;
      let activeIdx = 0;
      if (galleryWidth < 768) {
        const scrollStep = cardWidth + 16;
        activeIdx = Math.max(0, Math.min(cards.length - 1, Math.round(gallery.scrollLeft / scrollStep)));
      } else {
        activeIdx = expanded ? current : wrap(Math.round(phase));
      }
      campusCounter.textContent = `${activeIdx + 1} / ${cards.length}`;
    };
    gallery.addEventListener('scroll', updateCampusCounter, { passive: true });
    const framedPhotos = new Map();
    cards.forEach(card => {
      const image = card.querySelector('img');
      if (!image || card.querySelector('.gallery-image-backdrop')) return;
      image.classList.add('gallery-image-content');
      image.draggable = false;
      const backdrop = image.cloneNode(false);
      backdrop.className = 'gallery-image-backdrop';
      backdrop.alt = '';
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.loading = 'lazy';
      image.insertAdjacentElement('afterend', backdrop);
      if (image.dataset.wideSrc) framedPhotos.set(card, {
        image, backdrop, portraitSrc: image.getAttribute('src'), portraitWidth: Number(image.getAttribute('width')), portraitHeight: Number(image.getAttribute('height')),
        wideSrc: image.dataset.wideSrc, wideWidth: Number(image.dataset.wideWidth), wideHeight: Number(image.dataset.wideHeight)
      });
    });
    const motion = motionPreference;
    const hoverPreference = window.matchMedia('(hover: hover) and (pointer: fine)');
    let hoveredIndex = null;
    let phase = Math.min(2, cards.length - 1);
    let current = Math.round(phase);
    let expanded = false,
      transitioning = false,
      inView = true,
      focused = false;
    let frame = null,
      lastTime = 0,
      transitionTimer = null,
      pointer = null,
      touchPointer = null;
    let suppressClickUntil = 0,
      cardWidth = 380,
      spacing = 404;
    let galleryWidth = 0,
      nearby = false;
    let hovered = false,
      interacting = false,
      interactionTimer = null;
    const setStyle = (card, property, value) => {
      if (card.style[property] !== value) card.style[property] = value;
    };
    const wrap = value => (value % cards.length + cards.length) % cards.length;
    const visibility = new Map();
    const accessible = (card, visible, selected) => {
      if (nearby && visible) card.querySelector('img').loading = 'eager';
      const key = `${visible}:${selected}:${expanded}`;
      if (visibility.get(card) === key) return;
      visibility.set(card, key);
      card.inert = !visible;
      card.tabIndex = visible ? 0 : -1;
      card.setAttribute('aria-hidden', String(!visible));
      card.setAttribute('aria-expanded', String(expanded && selected));
      card.setAttribute('aria-pressed', String(selected));
      card.style.pointerEvents = visible ? 'auto' : 'none';
      card.classList.toggle('is-open', expanded && selected);
    };
    const render = () => {
      if (galleryWidth < 768) return;
      const width = galleryWidth;
      const bannerWidth = width - (width < 768 ? 32 : 64);
      const previewWidth = Math.max(cardWidth, width * .5);
      current = expanded ? current : wrap(Math.round(phase));
      updateCampusCounter();
      const widePhoto = width >= 768;
      // Hover preview: the hovered card grows in place and its neighbours slide outward by the same amount, so nothing is covered.
      const previewIndex = !expanded && hoveredIndex !== null ? hoveredIndex : null;
      let previewOffset = 0, previewDisplacement = 0;
      if (previewIndex !== null) {
        previewOffset = wrap(previewIndex - phase + cards.length / 2) - cards.length / 2;
        const clamped = Math.max(previewWidth / 2 + 16, Math.min(width - previewWidth / 2 - 16, width / 2 + previewOffset * spacing));
        previewDisplacement = clamped - (width / 2 + previewOffset * spacing);
      }
      cards.forEach((card, index) => {
        const offset = wrap(index - phase + cards.length / 2) - cards.length / 2;
        const selected = index === current;
        const photo = framedPhotos.get(card);
        const preview = !expanded && index === hoveredIndex;
        if (photo) {
          const useWide = expanded && selected && widePhoto;
          const src = useWide ? photo.wideSrc : photo.portraitSrc;
          if (photo.image.getAttribute('src') !== src) {
            photo.image.src = src;
            photo.image.width = useWide ? photo.wideWidth : photo.portraitWidth;
            photo.image.height = useWide ? photo.wideHeight : photo.portraitHeight;
            photo.backdrop.src = src;
          }
        }
        const visible = expanded ? selected : Math.abs(offset * spacing) < width / 2 + cardWidth;
        accessible(card, visible, selected);
        card.classList.toggle('is-preview', preview);
        setStyle(card, 'opacity', visible ? '1' : '0');
        setStyle(card, 'zIndex', String((expanded && selected) || preview ? 30 : 10 - Math.min(9, Math.round(Math.abs(
          offset)))));
        const previewCenter = Math.max(previewWidth / 2 + 16, Math.min(width - previewWidth / 2 - 16, width / 2 + offset * spacing));
        const sideShift = previewIndex === null || preview ? 0 : previewDisplacement + (offset > previewOffset ? 1 : -1) * (previewWidth - cardWidth) / 2;
        const x = expanded && selected ? -bannerWidth / 2 : preview ? previewCenter - width / 2 - previewWidth / 2 : offset * spacing - cardWidth / 2 + sideShift;
        const y = expanded && selected ? 0 : 24 - Math.min(3, Math.abs(offset)) * 12;
        const angle = (expanded && selected) || preview ? 0 : -offset * 5;
        setStyle(card, 'width', `${expanded && selected ? bannerWidth : preview ? previewWidth : cardWidth}px`);
        card.style.transform =
          `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateY(${angle.toFixed(2)}deg)`;
      });
    };
    const stop = () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = null;
      lastTime = 0;
      gallery.dataset.moving = 'false';
      if (galleryWidth < 768) gallery.style.removeProperty('scroll-snap-type');
    };
    const tick = time => {
      frame = null;
      const elapsed = lastTime ? Math.min(time - lastTime, 50) : 0;
      lastTime = time;
      if (galleryWidth < 768) {
        if (elapsed) {
          const maxScroll = gallery.scrollWidth - gallery.clientWidth;
          if (maxScroll > 2) {
            gallery.scrollLeft += elapsed * 0.052;
            if (gallery.scrollLeft >= maxScroll - 2) {
              gallery.scrollLeft = 0;
            }
          }
        }
        updateCampusCounter();
      } else {
        if (elapsed) phase = wrap(phase + elapsed * 0.052 / spacing);
        render();
      }
      frame = window.requestAnimationFrame(tick);
    };
    const start = () => {
      stop();
      if (!inView || expanded || (hovered && gallery.matches(':hover')) || interacting || hoveredIndex !== null || transitioning || focused || pointer || touchPointer || motion.matches || document.documentElement
        .classList.contains('motion-paused') || document.hidden) return;
      gallery.dataset.moving = 'true';
      if (galleryWidth < 768) gallery.style.scrollSnapType = 'none';
      frame = window.requestAnimationFrame(tick);
    };
    const pauseInteraction = () => {
      interacting = true;
      if (galleryWidth < 768) gallery.style.removeProperty('scroll-snap-type');
      stop();
      window.clearTimeout(interactionTimer);
      interactionTimer = window.setTimeout(() => {
        interacting = false;
        start();
      }, 2000);
    };
    const clearPreview = () => {
      window.clearTimeout(transitionTimer);
      transitioning = false;
      hoveredIndex = null;
      gallery.classList.remove('is-transitioning');
    };
    const transition = change => {
      stop();
      window.clearTimeout(transitionTimer);
      transitioning = true;
      gallery.classList.add('is-transitioning');
      void gallery.offsetWidth;
      change();
      render();
      transitionTimer = window.setTimeout(() => {
        transitioning = false;
        gallery.classList.remove('is-transitioning');
        start();
      }, motion.matches ? 0 : 550);
    };
    const expand = index => {
      if (expanded && current === index) return;
      transition(() => {
        current = index;
        hoveredIndex = null;
        expanded = true;
        gallery.classList.add('is-expanded');
        close.hidden = false;
        if (modalPrev) modalPrev.hidden = false;
        if (modalNext) modalNext.hidden = false;
      });
      close.focus({
        preventScroll: true
      });
    };
    const collapse = () => {
      if (!expanded) return;
      transition(() => {
        expanded = false;
        phase = current;
        gallery.classList.remove('is-expanded');
        close.hidden = true;
        if (modalPrev) modalPrev.hidden = true;
        if (modalNext) modalNext.hidden = true;
      });
      gallery.focus({
        preventScroll: true
      });
      focused = false;
    };
    const step = direction => {
      if (expanded) {
        transition(() => {
          current = wrap(current + direction);
          phase = current;
          updateCampusCounter();
        });
        return;
      }
      const visibleColumns = Math.max(1, Math.floor(galleryWidth / spacing));
      if (galleryWidth < 768) {
        pauseInteraction();
        const pageJump = spacing * visibleColumns;
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        if (maxScroll <= 2) return;
        let nextLeft = gallery.scrollLeft + direction * pageJump;
        if (direction > 0 && gallery.scrollLeft >= maxScroll - 5) {
          nextLeft = 0;
        } else if (direction < 0 && gallery.scrollLeft <= 5) {
          nextLeft = maxScroll;
        }
        gallery.scrollTo({ left: nextLeft, behavior: motion.matches ? 'auto' : 'smooth' });
        updateCampusCounter();
        return;
      }
      transition(() => {
        phase = wrap(Math.round(phase) + direction * visibleColumns);
        updateCampusCounter();
      });
    };
    const resize = () => {
      galleryWidth = gallery.clientWidth;
      if (galleryWidth < 768 || !hoverPreference.matches) hoveredIndex = null;
      cardWidth = galleryWidth < 768 ? Math.min(320, Math.round(galleryWidth * .8)) : galleryWidth < 1200 ? 340 : 380;
      spacing = cardWidth + (galleryWidth < 768 ? 16 : 24);
      gallery.classList.toggle('is-native-scroll', galleryWidth < 768);
      if (galleryWidth < 768) {
        cards.forEach(card => {
          card.inert = false;
          card.tabIndex = 0;
          card.setAttribute('aria-hidden', 'false');
          card.style.pointerEvents = 'auto';
          card.style.opacity = '1';
        });
        updateCampusCounter();
        start();
        return;
      }
      render();
      start();
    };
    cards.forEach(card => {
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Expand ${card.querySelector('img').alt}`);
      card.addEventListener('pointerenter', event => {
        if (event.pointerType !== 'mouse' || !hoverPreference.matches || galleryWidth < 768 || expanded || pointer || interacting) return;
        transition(() => { hoveredIndex = cards.indexOf(card); });
      });
      card.addEventListener('pointerleave', () => {
        if (pointer || expanded || hoveredIndex !== cards.indexOf(card)) return;
        transition(() => { hoveredIndex = null; });
      });
      card.addEventListener('click', () => {
        if (galleryWidth < 768) return;
        if (!card.hidden && window.performance.now() >= suppressClickUntil) expand(cards.indexOf(card));
      });
      card.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        expand(cards.indexOf(card));
      });
    });
    gallery.tabIndex = 0;
    gallery.setAttribute('aria-label', 'NIMS campus photo gallery');
    close.addEventListener('click', collapse);
    if (modalPrev) {
      modalPrev.addEventListener('click', event => {
        event.stopPropagation();
        step(-1);
      });
    }
    if (modalNext) {
      modalNext.addEventListener('click', event => {
        event.stopPropagation();
        step(1);
      });
    }
    section.querySelectorAll('.life-prev').forEach(button => button.addEventListener('click', () => step(-1)));
    section.querySelectorAll('.life-next').forEach(button => button.addEventListener('click', () => step(1)));
    section.addEventListener('keydown', event => {
      if (event.key === 'Escape' && expanded) {
        event.preventDefault();
        collapse();
      }
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      step(event.key === 'ArrowRight' ? 1 : -1);
    });
    // Use direct mouse events on desktop. Listening for movement on `window`
    // keeps the drag alive even when the pointer leaves the visible card.
    gallery.addEventListener('mousedown', event => {
      if (event.button !== 0 || event.target.closest('button')) return;
      pointer = {
        x: event.clientX,
        y: event.clientY,
        phase,
        left: gallery.scrollLeft,
        current,
        dx: 0,
        dragged: false
      };
      stop();
    });
    window.addEventListener('mousemove', event => {
      if (!pointer) return;
      const dx = event.clientX - pointer.x,
        dy = event.clientY - pointer.y;
      pointer.dx = dx;
      if (!pointer.dragged && Math.abs(dx) < 7) return;
      if (!pointer.dragged && Math.abs(dx) < Math.abs(dy)) return;
      pointer.dragged = true;
      clearPreview();
      gallery.classList.add('is-dragging');
      if (event.cancelable) event.preventDefault();
      if (galleryWidth < 768) {
        gallery.style.scrollSnapType = 'none';
        gallery.scrollLeft = pointer.left - dx;
      }
      else if (!expanded) {
        phase = wrap(pointer.phase - dx / spacing);
        render();
      }
    });
    const release = () => {
      if (!pointer) return;
      const drag = pointer;
      if (drag.dragged) suppressClickUntil = window.performance.now() + 350;
      pointer = null;
      gallery.classList.remove('is-dragging');
      if (!drag.dragged) {
        start();
        return;
      }
      pauseInteraction();
      if (galleryWidth < 768) return;
      if (expanded) {
        if (Math.abs(drag.dx) >= 40) step(drag.dx < 0 ? 1 : -1);
        else start();
        return;
      }
      render();
    };
    window.addEventListener('mouseup', release);
    window.addEventListener('blur', release);
    gallery.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'mouse') return;
      hovered = true;
      stop();
    });
    gallery.addEventListener('pointerleave', () => {
      hovered = false;
      start();
    });
    // Match the video rows: horizontal wheels / trackpads and Shift + wheel
    // move the gallery, while a normal vertical wheel still scrolls the page.
    gallery.addEventListener('wheel', event => {
      if (event.ctrlKey || expanded || pointer || touchPointer) return;
      if (!event.shiftKey && Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      const delta = event.deltaX || (event.shiftKey ? event.deltaY : 0);
      if (!delta) return;
      if (event.cancelable) event.preventDefault();
      pauseInteraction();
      clearPreview();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? galleryWidth : 1;
      if (galleryWidth < 768) gallery.scrollLeft += delta * unit;
      else {
        phase = wrap(phase + delta * unit / spacing);
        render();
      }
    }, { passive: false });
    gallery.addEventListener('touchstart', event => {
      if (event.touches.length !== 1 || event.target.closest('button')) return;
      pauseInteraction();
      if (galleryWidth >= 768) {
        const touch = event.touches[0];
        touchPointer = {
          x: touch.clientX,
          y: touch.clientY,
          phase,
          current,
          dx: 0,
          dragged: false
        };
        stop();
      }
    }, { passive: true });
    gallery.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseInteraction();
      }
    }, { passive: true });
    gallery.addEventListener('touchmove', event => {
      if (galleryWidth < 768) {
        pauseInteraction();
        return;
      }
      if (!touchPointer || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const dx = touch.clientX - touchPointer.x;
      const dy = touch.clientY - touchPointer.y;
      touchPointer.dx = dx;
      if (!touchPointer.dragged && Math.abs(dx) < 7) return;
      if (!touchPointer.dragged && Math.abs(dx) <= Math.abs(dy)) return;
      touchPointer.dragged = true;
      hoveredIndex = null;
      gallery.classList.add('is-dragging');
      if (event.cancelable) event.preventDefault();
      if (!expanded) {
        phase = wrap(touchPointer.phase - dx / spacing);
        render();
      }
    }, { passive: false });
    const releaseTouch = () => {
      if (!touchPointer) return;
      const drag = touchPointer;
      touchPointer = null;
      gallery.classList.remove('is-dragging');
      if (!drag.dragged) {
        start();
        return;
      }
      suppressClickUntil = window.performance.now() + 350;
      if (expanded) {
        if (Math.abs(drag.dx) >= 36) step(drag.dx < 0 ? 1 : -1);
        else start();
        return;
      }
      transition(() => { phase = wrap(Math.round(phase)); });
    };
    const releaseMobileOrTouch = () => {
      if (galleryWidth < 768) {
        pauseInteraction();
      } else {
        releaseTouch();
      }
    };
    gallery.addEventListener('touchend', releaseMobileOrTouch, { passive: true });
    gallery.addEventListener('touchcancel', releaseMobileOrTouch, { passive: true });
    gallery.addEventListener('dragstart', event => event.preventDefault());
    gallery.querySelectorAll('img').forEach(image => { image.draggable = false; });
    section.addEventListener('focusin', () => {
      focused = true;
      stop();
    });
    section.addEventListener('focusout', () => {
      focused = section.contains(document.activeElement);
      if (!focused) start();
    });
    new window.MutationObserver(start).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    document.addEventListener('visibilitychange', start);
    motion.addEventListener('change', start);
    window.addEventListener('resize', resize);
    if ('IntersectionObserver' in window) {
      const preload = new window.IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        nearby = true;
        render();
        preload.disconnect();
      }, {
        rootMargin: '1000px 0px'
      });
      preload.observe(gallery);
      new window.IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        start();
      }, {
        threshold: 0
      }).observe(gallery);
    } else inView = true;
    resize();
    start();
  }

  // Faculty Profiles.
  function initFacultyProfiles() {
    const section = document.getElementById('faculty');
    if (!section) return;
    const people = facultyProfiles,
      track = section.querySelector('.mentor-track');
    const cards = [...section.querySelectorAll('[data-mentor]')],
      dialog = document.getElementById('mentor-dialog');
    const portraitImages = cards.map(card => card.querySelector('img'));
    const shell = dialog.querySelector('.mentor-dialog-shell'),
      photo = dialog.querySelector('[data-mentor-photo]'),
      close = dialog.querySelector('.mentor-close');
    const thumbs = [...dialog.querySelectorAll('[data-mentor-thumb]')],
      motion = motionPreference;
    const animations = new Set();
    let portraitsReady = true,
      portraitLoad = 0;
    let selected = 0,
      phase = 0,
      request = 0,
      flight = null,
      hiddenSource = null,
      closing = false,
      watchdog = null;
    let frame = null,
      lastTime = 0,
      inView = true,
      keyboardFocus = false,
      manualTimer = null,
      manualPending = false,
      pointer = null,
      suppressClickUntil = 0;
    let layout = {
      slots: 5,
      step: 250,
      width: 226,
      viewport: 1250
    };
    const wrap = index => (index % people.length + people.length) % people.length;
    const announce = () => {
      section.querySelector('[data-mentor-announcement]').textContent =
        `${people[selected].name}, ${people[selected].role}.`;
    };

    function render() {
      if (cards.length <= 2) {
        cards.forEach((card, i) => {
          card.style.transform = '';
          card.style.zIndex = '';
          card.dataset.outside = 'false';
          card.inert = false;
          card.tabIndex = 0;
          card.removeAttribute('aria-hidden');
          const active = String(i === selected),
            expanded = String(dialog.open && i === selected);
          if (card.getAttribute('aria-pressed') !== active) card.setAttribute('aria-pressed', active);
          if (card.getAttribute('aria-expanded') !== expanded) card.setAttribute('aria-expanded', expanded);
        });
        const counter = section.querySelector('[data-lineup-counter]');
        if (counter) counter.textContent = '01 / 02';
        return;
      }
      const {
        slots,
        step,
        width,
        viewport
      } = layout, half = people.length / 2;
      if (!dialog.open) selected = wrap(Math.round(phase));
      cards.forEach((card, i) => {
        const offset = wrap(i - phase + half) - half,
          distance = Math.abs(offset);
        const outside = slots === 1 ? distance > .55 : Math.abs(offset * step) > viewport / 2 + width / 2;
        const top = Math.max(0, slots === 1 ? 8 : slots === 5 ? 36 - distance * 16 : slots === 3 ?
          24 - distance * 12 : 16 - distance * 10);
        card.style.transform = `translate3d(${(offset * step).toFixed(2)}px, ${top.toFixed(2)}px, 0) rotateY(${(slots === 1 ? 0 : offset * -5).toFixed(2)}deg)`;
        card.style.zIndex = String(10 - Math.round(distance));
        if (card.dataset.outside !== String(outside)) {
          card.dataset.outside = String(outside);
          card.inert = outside;
          card.tabIndex = outside ? -1 : 0;
          card.setAttribute('aria-hidden', String(outside));
        }
        const active = String(i === selected),
          expanded = String(dialog.open && i === selected);
        if (card.getAttribute('aria-pressed') !== active) card.setAttribute('aria-pressed', active);
        if (card.getAttribute('aria-expanded') !== expanded) card.setAttribute('aria-expanded', expanded);
      });
      const counter = section.querySelector('[data-lineup-counter]');
      const label = `${String(selected + 1).padStart(2, '0')} / ${String(people.length).padStart(2, '0')}`;
      if (counter.textContent !== label) counter.textContent = label;
    }

    function measure() {
      if (cards.length <= 2) {
        render();
        return;
      }
      const slots = innerWidth <= 575 ? 1 : track.clientWidth >= 1100 ? 5 : track.clientWidth >= 700 ? 3 : 2.1,
        step = track.clientWidth / slots;
      layout = {
        slots,
        step,
        width: Math.min(310, step - (slots === 1 ? 40 : slots === 2.1 ? 8 : 24)),
        viewport: track.clientWidth
      };
      if (slots === 1) phase = wrap(Math.round(phase));
      track.style.setProperty('--mentor-width', `${layout.width}px`);
      render();
      startAuto();
    }

    let isHovered = false;
    let isTouching = false;
    let touchIdleTimer = null;

    function stopAuto() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      lastTime = 0;
      track.dataset.moving = 'false';
    }

    function tick(time) {
      frame = null;
      if (lastTime) phase = wrap(phase + Math.min(time - lastTime, 50) * .032 / layout.step);
      lastTime = time;
      render();
      frame = requestAnimationFrame(tick);
    }

    function startAuto() {
      stopAuto();
      if (cards.length <= 2) return;
      if (!portraitsReady || !inView || dialog.open || closing || keyboardFocus || pointer || (isHovered && track.matches(':hover')) || isTouching ||
        manualPending || motion.matches || document.hidden || document.documentElement.classList.contains('motion-paused')
      ) return;
      track.dataset.moving = 'true';
      frame = requestAnimationFrame(tick);
    }

    const getVisibleSlots = () => Math.max(1, Math.floor(layout.slots));
    const stepMentor = direction => {
      const visibleSlots = getVisibleSlots();
      browse(selected + direction * visibleSlots);
    };

    function select(index) {
      selected = wrap(index);
      phase = selected;
      render();
    }

    function preparePortraits() {
      const version = ++portraitLoad;
      portraitsReady = false;
      stopAuto();
      Promise.allSettled(portraitImages.map(image => {
        image.loading = 'eager';
        return image.decode();
      })).then(() => {
        if (version !== portraitLoad) return;
        portraitsReady = true;
        startAuto();
      });
    }

    function browse(index) {
      stopAuto();
      clearTimeout(manualTimer);
      manualPending = true;
      select(index);
      announce();
      manualTimer = setTimeout(() => {
        manualPending = false;
        startAuto();
      }, motion.matches ? 0 : 760);
    }

    function education(value) {
      let depth = 0,
        start = 0;
      const parts = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i] === '(') depth++;
        if (value[i] === ')') depth--;
        if (value[i] === ',' && depth === 0) {
          parts.push(value.slice(start, i).trim());
          start = i + 1;
        }
      }
      parts.push(value.slice(start).trim());
      const rank = part => /^Ph\.?\s*D\.?/i.test(part) ? 0 : /^M\.?\s*Phil\b/i.test(part) ? 1 : /^MBA\b/i.test(part) ? 2 :
        /^M\.?\s*Com\b/i.test(part) ? 3 : /^(M\.?\s*A|MTTM)\b/i.test(part) ? 4 : /^(PG|Postgraduate)/i.test(part) ? 5 : 6;
      const hasHigher = parts.some(part => rank(part) < 6);
      return parts.filter(part => part && !(hasHigher && /^B\.?\s*(?:Com|BA|A|Sc|Tech|E|Ed|CA|TM)\b/i.test(part))).sort((a,
        b) => rank(a) - rank(b)).join(', ');
    }
    const setText = (selector, value) => {
      dialog.querySelector(selector).textContent = value;
    };

    function item(label, value) {
      const div = document.createElement('div'),
        dt = document.createElement('dt'),
        dd = document.createElement('dd');
      dt.textContent = titleCaseLabel(label);
      const pending = value.match(/^(\d+)\s+(In process)$/i);
      if (pending) {
        dd.textContent = pending[1];
        const note = document.createElement('small');
        note.textContent = titleCaseLabel(pending[2]);
        dd.append(note);
      } else dd.textContent = value;
      div.append(dt, dd);
      return div;
    }

    // The source distinguishes overall publications from publications at NIMS.
    // Show positive publication counts and experience for experienced faculty.
    function populateFacultyPresentation(p) {
      const summary = dialog.querySelector('[data-mentor-summary]'),
        metrics = p.metrics.filter(metric => metric && metric.value && metric.value !== '0' && metric.value !== 0),
        experience = p.experience && !/fresher/i.test(p.experience) && parseFloat(p.experience) > 0 ? p.experience : '';
      summary.replaceChildren(...metrics.map(metric => item(metric.label, metric.value)));
      summary.hidden = metrics.length === 0;
      summary.style.setProperty('--mentor-summary-columns', Math.max(1, metrics.length));
      setText('[data-mentor-experience-text]', experience);
      dialog.querySelector('[data-mentor-experience-text]').closest('div').hidden = !experience;
      const credentials = dialog.querySelector('.mentor-credentials'),
        visibleFields = [...credentials.children].filter(field => !field.hidden).length;
      credentials.hidden = visibleFields === 0;
      credentials.style.setProperty('--credential-columns', Math.min(3, Math.max(1, visibleFields)));
      dialog.classList.toggle('is-compact-profile', !metrics.length);
      dialog.classList.toggle('is-minimal-profile', !visibleFields && !metrics.length);
      dialog.querySelector('[data-mentor-feature-award]').hidden = true;
      dialog.querySelector('.mentor-library').hidden = true;
      const honours = dialog.querySelector('.mentor-honours');
      if (honours) {
        if (p.achievement) {
          setText('[data-mentor-achievements]', p.achievement);
          honours.hidden = false;
        } else {
          honours.hidden = true;
        }
      }
    }

    function populate() {
      const p = people[selected],
        prefix = p.name.match(/^(?:Prof\.\s*\(Dr\.\)|Dr\.|Mr\.|Ms\.)\s*/)?.[0] || '';
      dialog.classList.toggle('is-leadership-profile', /Dean|Principal|HoD|Head of Department/i.test(p.role));
      setText('[data-mentor-prefix]', prefix.trim());
      setText('[data-mentor-name]', p.name.slice(prefix.length));
      setText('[data-mentor-role]', p.role);
      setText('[data-mentor-role-photo]', p.role);
      setText('[data-mentor-qualification]', education(p.qualification));
      setText('[data-mentor-specialisation]', p.specialisation);
      setText('[data-mentor-research]', p.research);
      dialog.querySelector('[data-mentor-qualification]').closest('div').hidden = !p.qualification;
      dialog.querySelector('[data-mentor-specialisation]').closest('div').hidden = !p.specialisation;
      dialog.querySelector('.mentor-profile-evidence').hidden = !p.research;
      const activeCard = cards.find(c => c.dataset.mentor == selected) || cards[wrap(selected)] || cards[0];
      const portrait = activeCard.querySelector('img');
      photo.src = p.portrait || portrait.currentSrc || portrait.src;
      photo.alt = portrait.alt || p.name;
      const fullSource = activeCard.dataset.profileSrc || p.portrait,
        profileRequest = request;
      if (fullSource) {
        const highResolution = new Image();
        highResolution.decoding = 'async';
        highResolution.src = fullSource;
        highResolution.decode().then(() => {
          if (request === profileRequest && dialog.open && !closing) photo.src = highResolution.src;
        }).catch(() => { });
      }
      photo.width = portrait.getAttribute('width');
      photo.height = portrait.getAttribute('height');
      photo.parentElement.classList.add('is-cutout');
      populateFacultyPresentation(p);
      thumbs.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(i === selected)));
      const roster = dialog.querySelector('.mentor-roster'),
        activeThumb = thumbs[selected];
      roster.scrollLeft = Math.max(0, activeThumb.offsetLeft - roster.offsetLeft - (roster.clientWidth - activeThumb.offsetWidth) / 2);
      setText('[data-mentor-counter]',
        `${String(selected + 1).padStart(2, '0')} / ${String(people.length).padStart(2, '0')}`);
      dialog.scrollTop = 0;
    }

    function cleanup() {
      clearTimeout(watchdog);
      watchdog = null;
      animations.forEach(animation => animation.cancel());
      animations.clear();
      flight?.remove();
      flight = null;
      if (hiddenSource) hiddenSource.style.visibility = '';
      hiddenSource = null;
      photo.style.visibility = '';
      shell.style.visibility = '';
      shell.style.opacity = '';
      shell.style.transform = '';
    }

    function animate(element, keyframes, options) {
      if (motion.matches || !element.animate) return Promise.resolve();
      let animation;
      try {
        animation = element.animate(keyframes, options);
      } catch {
        return Promise.resolve();
      }
      animations.add(animation);
      let timeout;
      const deadline = new Promise(resolve => {
        timeout = setTimeout(resolve, Number(options.duration || 0) + Number(options.delay || 0) + 180);
      });
      return Promise.race([animation.finished.catch(() => { }), deadline]).finally(() => {
        clearTimeout(timeout);
        animation.cancel();
        animations.delete(animation);
      });
    }

    function imageReady(image) {
      if (image.complete) return Promise.resolve(image.naturalWidth > 0);
      return new Promise(resolve => {
        let timeout;
        const finish = () => {
          clearTimeout(timeout);
          image.removeEventListener('load', finish);
          image.removeEventListener('error', finish);
          resolve(image.complete && image.naturalWidth > 0);
        };
        image.addEventListener('load', finish);
        image.addEventListener('error', finish);
        timeout = setTimeout(finish, 180);
      });
    }
    const pose = rect => ({
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`
    });

    function createFlight(src, start) {
      const image = document.createElement('img');
      image.className = 'mentor-flight';
      image.src = src;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      Object.assign(image.style, pose(start));
      dialog.append(image);
      flight = image;
      return image;
    }

    function finishOpen(token, focus) {
      if (token !== request || !dialog.open || closing) return;
      cleanup();
      dialog.dataset.state = 'open';
      if (focus) close.focus({
        preventScroll: true
      });
      announce();
    }
    async function show(index, origin) {
      const token = ++request;
      stopAuto();
      cleanup();
      closing = false;
      const alreadyOpen = dialog.open,
        activeCard = cards.find(c => c.dataset.mentor == index) || cards[wrap(index)] || cards[0],
        source = origin?.querySelector('img') || activeCard.querySelector('img'),
        start = source.getBoundingClientRect();
      select(index);
      populate();
      if (!alreadyOpen) dialog.showModal();
      document.body.classList.add('mentor-modal-open');
      dialog.dataset.state = 'opening';
      render();
      watchdog = setTimeout(() => finishOpen(token, !alreadyOpen), 1500);
      if (motion.matches) {
        finishOpen(token, !alreadyOpen);
        return;
      }
      const image = createFlight(source.currentSrc || source.src, start);
      const ready = await imageReady(image);
      if (token !== request || closing) return;
      if (!ready) {
        finishOpen(token, !alreadyOpen);
        return;
      }
      hiddenSource = source;
      source.style.visibility = 'hidden';
      photo.style.visibility = 'hidden';
      const target = photo.getBoundingClientRect(),
        height = Math.min(390, innerHeight * .55),
        width = height * 2 / 3;
      const centre = {
        left: (innerWidth - width) / 2,
        top: (innerHeight - height) / 2,
        width,
        height
      };
      const reveal = animate(shell, [{
        opacity: .72,
        transform: 'translateY(8px)'
      }, {
        opacity: 1,
        transform: 'translateY(0)'
      }], {
        duration: 420,
        easing: 'cubic-bezier(.22,1,.36,1)'
      });
      await animate(image, [{
        ...pose(start),
        offset: 0
      }, {
        ...pose(centre),
        offset: .4
      }, {
        ...pose(centre),
        offset: .48
      }, {
        ...pose(target),
        offset: 1
      }], {
        duration: 820,
        easing: 'cubic-bezier(.4,0,.2,1)',
        fill: 'forwards'
      });
      await reveal;
      finishOpen(token, !alreadyOpen);
    }

    function finishClose(token) {
      if (token !== request) return;
      cleanup();
      dialog.close();
      closing = false;
      document.body.classList.remove('mentor-modal-open');
      phase = selected;
      render();
      cards[selected].focus({
        preventScroll: true
      });
      startAuto();
    }
    async function hide() {
      if (!dialog.open || closing) return;
      closing = true;
      const token = ++request;
      cleanup();
      dialog.dataset.state = 'closing';
      watchdog = setTimeout(() => finishClose(token), 760);
      if (motion.matches) {
        finishClose(token);
        return;
      }
      const activeCard = cards.find(c => c.dataset.mentor == selected) || cards[wrap(selected)] || cards[0],
        source = activeCard.querySelector('img'),
        start = photo.getBoundingClientRect(),
        target = source.getBoundingClientRect(),
        image = createFlight(photo.currentSrc || photo.src, start);
      const ready = await imageReady(image);
      if (token !== request) return;
      if (!ready) {
        finishClose(token);
        return;
      }
      hiddenSource = source;
      source.style.visibility = 'hidden';
      photo.style.visibility = 'hidden';
      const fade = animate(shell, [{
        opacity: 1
      }, {
        opacity: .45
      }], {
        duration: 340,
        fill: 'forwards'
      });
      await animate(image, [pose(start), pose(target)], {
        duration: 430,
        fill: 'forwards',
        easing: 'cubic-bezier(.4,0,.2,1)'
      });
      await fade;
      finishClose(token);
    }
    cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        const mentorIndex = card.dataset.mentor !== undefined ? parseInt(card.dataset.mentor, 10) : i;
        if (performance.now() >= suppressClickUntil) show(mentorIndex, card);
      });
      card.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const visibleSlots = getVisibleSlots();
        browse(event.key === 'Home' ? 0 : event.key === 'End' ? people.length - 1 : selected + (event.key ===
          'ArrowRight' ? visibleSlots : -visibleSlots));
        cards[selected]?.focus({
          preventScroll: true
        });
      });
    });
    section.querySelector('[data-mentor-prev]')?.addEventListener('click', () => stepMentor(-1));
    section.querySelector('[data-mentor-next]')?.addEventListener('click', () => stepMentor(1));
    section.addEventListener('keydown', event => {
      if (dialog.open) return;
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      if (event.target.closest('button, input, textarea, select')) return;
      event.preventDefault();
      stepMentor(event.key === 'ArrowRight' ? 1 : -1);
    });
    const pauseTouch = () => {
      isTouching = true;
      clearTimeout(touchIdleTimer);
      stopAuto();
      touchIdleTimer = setTimeout(() => {
        isTouching = false;
        startAuto();
      }, 2000);
    };
    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        isHovered = true;
        stopAuto();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        isHovered = false;
        startAuto();
      }
    });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => show(i, thumb)));
    dialog.querySelector('.mentor-detail-prev').addEventListener('click', () => show(selected - 1, thumbs[wrap(selected -
      1)]));
    dialog.querySelector('.mentor-detail-next').addEventListener('click', () => show(selected + 1, thumbs[wrap(selected +
      1)]));
    close.addEventListener('click', hide);
    dialog.addEventListener('cancel', event => {
      event.preventDefault();
      hide();
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const b = dialog.getBoundingClientRect();
      if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom)
        hide();
    });
    dialog.addEventListener('close', () => {
      ++request;
      cleanup();
      closing = false;
      document.body.classList.remove('mentor-modal-open');
      phase = selected;
      render();
      startAuto();
    });
    track.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.isPrimary === false) return;
      stopAuto();
      pointer = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        phase,
        dragged: false
      };
    });
    track.addEventListener('pointermove', event => {
      if (!pointer || event.pointerId !== pointer.id) return;
      const dx = event.clientX - pointer.x,
        dy = event.clientY - pointer.y;
      if (!pointer.dragged && (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy))) return;
      pointer.dragged = true;
      if (!track.hasPointerCapture(event.pointerId)) track.setPointerCapture(event.pointerId);
      if (event.cancelable) event.preventDefault();
      track.dataset.moving = 'true';
      phase = wrap(pointer.phase - dx / layout.step);
      render();
    });
    const release = event => {
      if (!pointer || event.pointerId !== pointer.id) return;
      if (pointer.dragged) suppressClickUntil = performance.now() + 350;
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      if (layout.slots === 1) {
        const dx = event.clientX - pointer.x;
        const direction = event.type !== 'pointercancel' && pointer.dragged && Math.abs(dx) > 40 ? (dx < 0 ? 1 : -1) :
          0;
        phase = wrap(Math.round(pointer.phase) + direction);
        render();
      }
      pointer = null;
      startAuto();
    };
    track.addEventListener('pointerup', release);
    track.addEventListener('pointercancel', release);
    track.addEventListener('pointerleave', event => {
      if (pointer && !pointer.dragged) release(event);
    });
    track.addEventListener('dragstart', event => event.preventDefault());
    section.addEventListener('focusin', event => {
      if (!dialog.contains(event.target)) {
        keyboardFocus = true;
        stopAuto();
      }
    });
    section.addEventListener('focusout', () => queueMicrotask(() => {
      keyboardFocus = section.contains(document.activeElement) && !dialog.contains(document.activeElement);
      if (!keyboardFocus) startAuto();
    }));
    document.addEventListener('visibilitychange', startAuto);
    new MutationObserver(startAuto).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    motion.addEventListener('change', () => {
      if (motion.matches) animations.forEach(animation => animation.finish());
      startAuto();
    });
    new ResizeObserver(measure).observe(track);
    window.addEventListener('resize', () => {
      measure();
      preparePortraits();
      if (dialog.open && dialog.dataset.state === 'opening') finishOpen(request, false);
      else if (closing) finishClose(request);
    });
    const preloadObserver = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      portraitImages.forEach(image => {
        image.fetchPriority = 'high';
      });
      preloadObserver.disconnect();
    }, {
      rootMargin: '1400px 0px'
    });
    preloadObserver.observe(section);
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      startAuto();
    }, {
      threshold: 0
    }).observe(track);
    measure();
    preparePortraits();
    requestAnimationFrame(() => track.classList.add('is-ready'));
    startAuto();
  }

  // Founder Stories.
  function initFounderStories() {
    document.querySelectorAll('[data-founder-rotation]').forEach(card => {
      const slides = [...card.querySelectorAll('[data-venture]')];
      const dots = [...card.querySelectorAll('[data-venture-select]')];
      const pause = card.querySelector('.nims-venture-pause');
      const progress = card.querySelector('.nims-venture-progress span');
      const currentLabel = card.querySelector('[data-venture-current]');
      const rotationName = card.classList.contains('nims-founder-story--cofounders') ? 'co-founder' : 'venture';
      card.querySelectorAll('[data-venture-total]').forEach(label => {
        label.textContent = String(slides.length);
      });
      if (slides.length < 2 || !pause || !progress) return;
      const duration = 5000;
      let current = 0;
      let timer = null;
      const preference = motionPreference;
      let paused = preference.matches;
      let visible = true;
      let hovered = false;
      let touching = false;
      let touchTimer = null;
      const pauseTouch = () => {
        touching = true;
        clearTimeout(touchTimer);
        schedule();
        touchTimer = setTimeout(() => {
          touching = false;
          schedule();
        }, 2000);
      };
      const updatePause = () => {
        pause.setAttribute('aria-pressed', String(paused));
        pause.setAttribute('aria-label', `${paused ? 'Resume' : 'Pause'} ${rotationName} rotation`);
        pause.firstElementChild.textContent = paused ? '\u25b6' : '\u2161';
      };
      const resetProgress = () => {
        progress.style.animation = 'none';
        void progress.offsetWidth;
        progress.style.animation = `nims-venture-countdown ${duration}ms linear forwards`;
        progress.style.animationPlayState = paused || document.hidden || !visible || hovered || touching ? 'paused' : 'running';
      };
      const show = index => {
        current = index;
        slides[index].querySelectorAll('img').forEach(image => {
          image.loading = 'eager';
        });
        if (currentLabel) currentLabel.textContent = String(current + 1);
        slides.forEach((slide, i) => {
          const active = i === current;
          slide.classList.toggle('is-active', active);
          slide.setAttribute('aria-hidden', String(!active));
          slide.inert = !active;
        });
        dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
        resetProgress();
      };
      const schedule = () => {
        window.clearInterval(timer);
        timer = null;
        if (!paused && !document.hidden && visible && !hovered && !touching) {
          resetProgress();
          timer = window.setInterval(() => show((current + 1) % slides.length), duration);
        } else {
          progress.style.animationPlayState = 'paused';
        }
      };
      dots.forEach((dot, i) => dot.addEventListener('click', () => {
        show(i);
        schedule();
      }));
      pause.addEventListener('click', () => {
        paused = !paused;
        updatePause();
        schedule();
      });
      card.addEventListener('pointerenter', e => {
        if (e.pointerType === 'mouse') {
          hovered = true;
          schedule();
        }
      });
      card.addEventListener('pointerleave', e => {
        if (e.pointerType === 'mouse') {
          hovered = false;
          schedule();
        }
      });
      card.addEventListener('pointerdown', e => {
        if (e.pointerType === 'touch') {
          pauseTouch();
        }
      }, { passive: true });
      card.addEventListener('touchstart', pauseTouch, { passive: true });
      card.addEventListener('touchend', pauseTouch, { passive: true });
      card.addEventListener('touchcancel', pauseTouch, { passive: true });
      document.addEventListener('visibilitychange', schedule);
      new window.IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        schedule();
      }, {
        threshold: 0
      }).observe(card);
      preference.addEventListener('change', () => {
        paused = preference.matches;
        updatePause();
        schedule();
      });
      updatePause();
      show(0);
      schedule();
    });
  }

  // Keep Abhishek's portrait fixed while his three internship details rotate.
  function initInternshipRotators() {
    document.querySelectorAll('[data-internship-rotator]').forEach(card => {
      const slides = [...card.querySelectorAll('[data-internship-detail]')],
        buttons = [...card.querySelectorAll('[data-internship-select]')],
        toggle = card.querySelector('[data-internship-pause]');
      if (slides.length < 2 || !toggle) return;
      let index = 0, timer = null, visible = true, paused = motionPreference.matches;
      let hovered = false, touching = false, touchTimer = null;
      const pauseTouch = () => {
        touching = true;
        clearTimeout(touchTimer);
        schedule();
        touchTimer = setTimeout(() => {
          touching = false;
          schedule();
        }, 2000);
      };
      slides.forEach(slide => slide.querySelectorAll('img').forEach(photo => { photo.loading = 'eager'; }));
      const show = next => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
          slide.classList.toggle('is-active', i === index);
          slide.setAttribute('aria-hidden', String(i !== index));
          slide.inert = i !== index;
        });
        buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
        card.dataset.activeIndex = String(index);
      };
      const schedule = () => {
        clearInterval(timer);
        timer = null;
        toggle.classList.toggle('is-paused', paused);
        const label = `${paused ? 'Play' : 'Pause'} internship rotation`;
        toggle.setAttribute('aria-label', label);
        toggle.title = label;
        if (!paused && visible && !document.hidden && !hovered && !touching && !card.querySelector('.law-internship-organisation:focus')) {
          timer = setInterval(() => show(index + 1), 5000);
        }
      };
      buttons.forEach((button, i) => button.addEventListener('click', () => { show(i); schedule(); }));
      toggle.addEventListener('click', () => { paused = !paused; schedule(); });
      card.addEventListener('pointerenter', e => {
        if (e.pointerType === 'mouse') {
          hovered = true;
          schedule();
        }
      });
      card.addEventListener('pointerleave', e => {
        if (e.pointerType === 'mouse') {
          hovered = false;
          schedule();
        }
      });
      card.addEventListener('pointerdown', e => {
        if (e.pointerType === 'touch') {
          pauseTouch();
        }
      }, { passive: true });
      card.addEventListener('touchstart', pauseTouch, { passive: true });
      card.addEventListener('touchend', pauseTouch, { passive: true });
      card.addEventListener('touchcancel', pauseTouch, { passive: true });
      card.addEventListener('focusin', schedule);
      card.addEventListener('focusout', () => setTimeout(schedule, 0));
      document.addEventListener('visibilitychange', schedule);
      motionPreference.addEventListener('change', event => { paused = event.matches; schedule(); });
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        schedule();
      }, { threshold: 0 }).observe(card);
      show(0);
      schedule();
    });
  }

  // Student Placement Stories.
  function initPlacementStories() {
    const root = document.querySelector('#career');
    if (!root) return;
    const track = root.querySelector('.career-profiles-track');
    if (!track?.firstElementChild) return;
    const cards = [...track.querySelectorAll('.career-profile-card')];
    const announcement = root.querySelector('.career-profiles-announcement');
    const counter = root.querySelector('.career-slider-counter');
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = (cards[0] || track.firstElementChild)?.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const updateCareerCounter = () => {
      if (!counter || !cards.length) return;
      const { pages } = getPages();
      if (!pages.length) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      counter.textContent = `${current + 1} / ${pages.length}`;
    };

    const move = direction => {
      const { pages, step, visibleCards, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
      if (counter) counter.textContent = `${nextIndex + 1} / ${pages.length}`;
      if (announcement) {
        const startCard = Math.min(cards.length - 1, Math.round(pages[nextIndex] / step));
        announcement.textContent = `Showing internship stories from ${cards[startCard]?.querySelector('h3')?.textContent || 'students'}.`;
      }
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || cards.length <= 1) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 3500);
    };

    root.querySelector('[data-career-previous]')?.addEventListener('click', () => {
      move(-1);
      restartTimer();
    });
    root.querySelector('[data-career-next]')?.addEventListener('click', () => {
      move(1);
      restartTimer();
    });

    track.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
      restartTimer();
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', updateCareerCounter, { passive: true });
    new ResizeObserver(updateCareerCounter).observe(track);
    updateCareerCounter();
    restartTimer();
  }

  // Auto-scroll video rows while preserving manual and vertical page scrolling.
  function initStoryCarousels() {
    const section = document.querySelector('#stories');
    if (!section) return;
    const rows = [];
    let frame = null;
    let lastTime = null;
    let modalActive = false;
    const canMove = row => row.distance > 0 && row.visible && !row.hovered && !row.focused && !row.touching && !row.interacting &&
      !motionPreference.matches && !document.hidden && !modalActive &&
      !document.documentElement.classList.contains('motion-paused');
    const tick = time => {
      frame = null;
      const elapsed = lastTime === null ? 0 : Math.min((time - lastTime) / 1000, .05);
      lastTime = time;
      rows.forEach(row => {
        if (!canMove(row)) return;
        row.position = row.distance + ((row.position - row.distance + row.speed * elapsed) % row.distance + row.distance) % row.distance;
        row.root.scrollLeft = row.position;
      });
      if (rows.some(canMove)) frame = requestAnimationFrame(tick);
      else lastTime = null;
    };
    const refresh = () => {
      rows.forEach(row => row.position = row.root.scrollLeft);
      if (rows.some(canMove)) {
        if (frame === null) frame = requestAnimationFrame(tick);
      } else {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        lastTime = null;
      }
    };
    section.querySelectorAll('.featured-stories, .story-thumbnails').forEach((root, index) => {
      const originals = [...root.children];
      if (!originals.length) return;
      root.classList.add('story-scroller');
      root.tabIndex = 0;
      root.setAttribute('role', 'region');
      if (!root.hasAttribute('aria-label')) root.setAttribute('aria-label', 'Featured university videos');
      const track = document.createElement('div');
      track.className = 'story-scroll-track';
      track.append(...originals);
      // Copies on either side let native swipes and dragging cross the seam.
      // Only the original buttons participate in keyboard and screen reader navigation.
      const makeCopy = (button, index) => {
        const copy = button.cloneNode(true);
        copy.dataset.storyCopy = String(index);
        copy.tabIndex = -1;
        copy.setAttribute('aria-hidden', 'true');
        copy.addEventListener('pointerdown', event => {
          if (event.pointerType === 'mouse') event.preventDefault();
        });
        return copy;
      };
      const leading = originals.map(makeCopy);
      track.prepend(...leading);
      track.append(...originals.map(makeCopy));
      root.replaceChildren(track);
      root.querySelectorAll('img').forEach(image => image.draggable = false);
      const main = originals.find(button => button.classList.contains('main-story'));
      const row = {
        root, position: 0, distance: 0, speed: index === 0 ? 36 : 42,
        visible: true, hovered: false, focused: false, touching: false, interacting: false
      };
      rows.push(row);
      let pointer = null;
      const normalize = () => {
        const left = root.scrollLeft;
        const distance = row.distance;
        if (!distance || (left >= distance - 1 && left < distance * 2)) return;
        const wrapped = distance + ((left - distance) % distance + distance) % distance;
        const shift = wrapped - left;
        row.position += shift;
        if (pointer) pointer.left += shift;
        root.scrollLeft = wrapped;
      };
      const measure = () => {
        const previous = row.distance;
        const progress = previous ? ((root.scrollLeft - previous) % previous + previous) % previous / previous : 0;
        row.distance = originals[0].getBoundingClientRect().left - leading[0].getBoundingClientRect().left;
        root.scrollLeft = previous ? row.distance * (1 + progress) : main ?
          main.offsetLeft - (root.clientWidth - main.offsetWidth) / 2 : row.distance;
        row.position = root.scrollLeft;
        normalize();
        refresh();
      };
      root.addEventListener('scroll', normalize, { passive: true });
      new ResizeObserver(measure).observe(root);
      measure();
      let resumeTimer;
      const pauseInteraction = () => {
        row.interacting = true;
        clearTimeout(resumeTimer);
        refresh();
        resumeTimer = setTimeout(() => {
          row.interacting = false;
          refresh();
        }, 2000);
      };
      new IntersectionObserver(entries => {
        row.visible = entries[0].isIntersecting;
        refresh();
      }).observe(root);
      root.addEventListener('pointerenter', event => {
        if (event.pointerType !== 'mouse') return;
        row.hovered = true;
        refresh();
      });
      root.addEventListener('pointerleave', () => {
        row.hovered = false;
        refresh();
      });
      root.addEventListener('focusin', event => {
        row.focused = event.target.matches(':focus-visible');
        refresh();
      });
      root.addEventListener('focusout', () => queueMicrotask(() => {
        row.focused = root.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
        refresh();
      }));
      root.addEventListener('touchstart', () => {
        row.touching = true;
        refresh();
      }, { passive: true });
      const releaseTouch = () => {
        row.touching = false;
        pauseInteraction();
      };
      root.addEventListener('touchend', releaseTouch, { passive: true });
      root.addEventListener('touchcancel', releaseTouch, { passive: true });

      // Horizontal wheels and touchpad swipes use native scrolling. Shift also
      // lets a conventional vertical mouse wheel move across the row.
      root.addEventListener('wheel', event => {
        pauseInteraction();
        if (event.ctrlKey || !event.shiftKey || event.deltaX || !event.deltaY) return;
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? root.clientWidth : 1;
        const next = Math.max(0, Math.min(root.scrollWidth - root.clientWidth, root.scrollLeft + event.deltaY * unit));
        if (next === root.scrollLeft) return;
        event.preventDefault();
        root.scrollLeft = next;
      }, { passive: false });

      let suppressClickUntil = 0;
      root.addEventListener('pointerdown', event => {
        // Touch and pen retain native swiping, inertia, and page scrolling.
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, left: root.scrollLeft, dragged: false };
        row.touching = true;
        refresh();
      });
      root.addEventListener('pointermove', event => {
        if (!pointer || event.pointerId !== pointer.id) return;
        const dx = event.clientX - pointer.x;
        const dy = event.clientY - pointer.y;
        if (!pointer.dragged && (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy))) return;
        pointer.dragged = true;
        root.classList.add('is-dragging');
        if (!root.hasPointerCapture(pointer.id)) root.setPointerCapture(pointer.id);
        event.preventDefault();
        root.scrollLeft = pointer.left - dx;
      });
      const release = () => {
        if (!pointer) return;
        const { id, dragged } = pointer;
        pointer = null;
        row.touching = false;
        pauseInteraction();
        if (dragged) suppressClickUntil = performance.now() + 350;
        root.classList.remove('is-dragging');
        if (root.hasPointerCapture(id)) root.releasePointerCapture(id);
      };
      root.addEventListener('pointerup', release);
      root.addEventListener('pointercancel', release);
      root.addEventListener('lostpointercapture', release);
      window.addEventListener('pointerup', release);
      root.addEventListener('click', event => {
        if (performance.now() < suppressClickUntil) {
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        const copy = event.target.closest('[data-story-copy]');
        if (copy) {
          event.preventDefault();
          event.stopImmediatePropagation();
          originals[Number(copy.dataset.storyCopy)].click();
        }
      }, true);
      root.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        pauseInteraction();
        event.preventDefault();
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const cardWidth = originals[0].getBoundingClientRect().width;
        const step = cardWidth + gap;
        const visibleCards = Math.max(1, Math.floor((root.clientWidth + gap) / step));
        const pageJump = step * visibleCards;
        root.scrollBy({
          left: event.key === 'ArrowRight' ? pageJump : -pageJump,
          behavior: motionPreference.matches ? 'auto' : 'smooth'
        });
      });
    });
    motionPreference.addEventListener('change', refresh);
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('resize', refresh);
    document.addEventListener('show.bs.modal', () => {
      modalActive = true;
      refresh();
    });
    document.addEventListener('hidden.bs.modal', () => {
      modalActive = false;
      refresh();
    });
    new MutationObserver(refresh).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }

  // Placement Highlights.
  function initPlacementHighlights() {
    const highlight = document.querySelector('.placement-highlight');
    const packages = highlight?.querySelector('.package-grid');
    if (highlight && packages) {
      const alignBackground = () => {
        const cards = packages.getBoundingClientRect();
        const section = highlight.getBoundingClientRect();
        highlight.style.setProperty('--placement-split', `${cards.top - section.top + cards.height / 2}px`);
      };
      const observer = new ResizeObserver(alignBackground);
      observer.observe(highlight);
      observer.observe(packages);
      alignBackground();
    }
    const featured = highlight?.querySelector('[data-placement-feature]');
    const featuredCards = Array.from(document.querySelectorAll('.management-placements .law-placement-card'));
    if (featured && featuredCards.length) {
      const person = featured.querySelector('[data-placement-feature-person]');
      const logo = featured.querySelector('[data-placement-feature-logo]');
      const name = featured.querySelector('[data-placement-feature-name]');
      const role = featured.querySelector('[data-placement-feature-role]');
      const organisation = featured.querySelector('[data-placement-feature-organisation]');
      const position = featured.querySelector('[data-placement-feature-position]');
      const announcement = featured.querySelector('[data-placement-feature-announcement]');
      const readableText = element => {
        if (!element) return '';
        const copy = element.cloneNode(true);
        copy.querySelectorAll('br').forEach(lineBreak => lineBreak.replaceWith(' '));
        return copy.textContent.replace(/\s+/g, ' ').trim();
      };
      const candidateData = featuredCards.map(card => {
        const candidatePerson = card.querySelector('.placement-card-person');
        const candidateLogo = card.querySelector('.law-placement-badge img');
        return {
          name: readableText(card.querySelector('h3')),
          role: readableText(card.querySelector('.law-placement-role')),
          organisation: readableText(card.querySelector('.law-placement-organisation')),
          personSrc: candidatePerson?.getAttribute('src') || '',
          personAlt: candidatePerson?.getAttribute('alt') || '',
          logoSrc: candidateLogo?.getAttribute('src') || '',
          logoAlt: candidateLogo?.getAttribute('alt') || ''
        };
      });
      let featuredIndex = 0;
      let featuredTimer = 0;
      let featuredSwapTimer = 0;
      const renderFeatured = (nextIndex, manual = false) => {
        featuredIndex = (nextIndex + candidateData.length) % candidateData.length;
        const candidate = candidateData[featuredIndex];
        clearTimeout(featuredSwapTimer);
        featured.classList.add('is-changing');
        featuredSwapTimer = setTimeout(() => {
          person.src = candidate.personSrc;
          person.alt = candidate.personAlt;
          logo.src = candidate.logoSrc;
          logo.alt = candidate.logoAlt;
          name.textContent = candidate.name;
          role.textContent = candidate.role;
          organisation.textContent = candidate.organisation;
          position.textContent = `${featuredIndex + 1} / ${candidateData.length}`;
          if (manual) announcement.textContent = `${candidate.name}, ${candidate.role}, ${candidate.organisation}.`;
          requestAnimationFrame(() => featured.classList.remove('is-changing'));
          const following = candidateData[(featuredIndex + 1) % candidateData.length];
          if (following.personSrc) new Image().src = following.personSrc;
          if (following.logoSrc) new Image().src = following.logoSrc;
        }, motionPreference.matches ? 0 : 220);
      };
      const scheduleFeatured = () => {
        clearInterval(featuredTimer);
        if (motionPreference.matches) return;
        featuredTimer = setInterval(() => {
          if (!document.hidden && !featured.matches(':hover') && !featured.contains(document.activeElement)) {
            renderFeatured(featuredIndex + 1);
          }
        }, 4800);
      };
      featured.querySelector('[data-placement-feature-previous]')?.addEventListener('click', () => {
        renderFeatured(featuredIndex - 1, true);
        scheduleFeatured();
      });
      featured.querySelector('[data-placement-feature-next]')?.addEventListener('click', () => {
        renderFeatured(featuredIndex + 1, true);
        scheduleFeatured();
      });
      document.addEventListener('visibilitychange', scheduleFeatured);
      renderFeatured(0);
      scheduleFeatured();
    }
    const slider = document.querySelector('.management-placements');
    if (!slider || slider.hidden) return;
    const track = slider.querySelector('.placement-cards');
    if (!track?.firstElementChild) return;
    const cards = Array.from(track.querySelectorAll('.placement-card'));
    const announcement = slider.querySelector('[role="status"]');
    const counter = slider.querySelector('.placement-slider-counter');
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching || dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = (cards[0] || track.firstElementChild)?.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const updatePlacementCounter = () => {
      if (!counter || !cards.length) return;
      const { pages } = getPages();
      if (!pages.length) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      counter.textContent = `${current + 1} / ${pages.length}`;
    };

    const move = direction => {
      const { pages, step, visibleCards, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
      if (counter) counter.textContent = `${nextIndex + 1} / ${pages.length}`;
      if (announcement) {
        const startCard = Math.min(cards.length - 1, Math.round(pages[nextIndex] / step));
        announcement.textContent = cards.slice(startCard, startCard + visibleCards)
          .map(card => card.querySelector('h3')?.textContent.trim()).filter(Boolean).join(', ');
      }
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || cards.length <= 1) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 3500);
    };

    slider.querySelector('[data-placement-prev]')?.addEventListener('click', () => {
      move(-1);
      restartTimer();
    });
    slider.querySelector('[data-placement-next]')?.addEventListener('click', () => {
      move(1);
      restartTimer();
    });

    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
        restartTimer();
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const { maximum } = getPages();
        track.scrollTo({
          left: event.key === 'Home' ? 0 : maximum,
          behavior: motionPreference.matches ? 'instant' : 'smooth'
        });
        restartTimer();
      }
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', updatePlacementCounter, { passive: true });
    new ResizeObserver(updatePlacementCounter).observe(track);
    updatePlacementCounter();
    restartTimer();
  }

  // Animate selected statistics once when they enter the viewport.
  function initCountUpNumbers() {
    const counters = [...document.querySelectorAll('[data-count-up]')];
    if (!counters.length || motionPreference.matches || !('IntersectionObserver' in window)) return;
    const active = new Map();

    const finish = element => {
      const animation = active.get(element);
      if (animation) {
        cancelAnimationFrame(animation.frame);
        animation.value.textContent = animation.finalText;
        active.delete(element);
      }
      element.dataset.countState = 'complete';
    };

    const start = element => {
      const finalText = element.textContent.trim();
      if (!/^\d[\d,]*(?:\.\d+)?$/.test(finalText)) return;
      const target = Number(finalText.replaceAll(',', ''));
      const decimals = finalText.split('.')[1]?.length || 0;
      const format = new Intl.NumberFormat('en-IN', {
        useGrouping: finalText.includes(','),
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
      const sizer = document.createElement('bdi');
      sizer.className = 'count-up-sizer';
      sizer.setAttribute('aria-hidden', 'true');
      sizer.textContent = finalText;
      const value = document.createElement('bdi');
      value.className = 'count-up-value';
      value.setAttribute('aria-hidden', 'true');
      value.textContent = format.format(0);
      const accessible = document.createElement('span');
      accessible.className = 'visually-hidden';
      accessible.textContent = finalText;
      element.replaceChildren(sizer, value, accessible);
      element.dataset.countState = 'running';
      const animation = { value, finalText, frame: 0 };
      active.set(element, animation);
      const duration = target < 10 ? 1900 : 2900;
      let started;
      const tick = now => {
        if (started === undefined) started = now;
        const progress = Math.min(1, (now - started) / duration);
        if (progress === 1) {
          finish(element);
          return;
        }
        const eased = 1 - Math.pow(1 - progress, 3);
        value.textContent = format.format(target * eased);
        animation.frame = requestAnimationFrame(tick);
      };
      animation.frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < .6) return;
        observer.unobserve(entry.target);
        start(entry.target);
      });
    }, { threshold: .6, rootMargin: '0px 0px -24px 0px' });
    counters.forEach(element => {
      element.dataset.countState = 'pending';
      observer.observe(element);
    });
    motionPreference.addEventListener('change', event => {
      if (!event.matches) return;
      observer.disconnect();
      counters.forEach(finish);
    });
  }

  function initAchieversHeroSlider() {
    const hero = document.querySelector('.law-achievements-hero');
    if (!hero) return;
    const slides = [...hero.querySelectorAll('.law-hero-slide')];
    const dots = [...hero.querySelectorAll('.law-hero-dot')];
    const doodleText = hero.querySelector('.law-hero-doodle-text');
    const statCards = [...document.querySelectorAll('.law-achievements-stats article')];
    if (slides.length <= 1) return;

    let currentIndex = 0;
    let timer = null;
    let isHovered = false;
    let isTouching = false;
    let inView = true;

    const goToSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        const active = i === currentIndex;
        slide.classList.toggle('is-active', active);
        if (active && doodleText && slide.dataset.doodle) {
          doodleText.innerHTML = slide.dataset.doodle;
        }
      });

      dots.forEach((dot, i) => {
        const active = i === currentIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      statCards.forEach((card, i) => {
        card.classList.toggle('is-active', i === currentIndex);
      });
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
    };

    const startTimer = () => {
      clearInterval(timer);
      if (isHovered || isTouching || !inView || document.hidden || motionPreference?.matches) return;
      timer = setInterval(nextSlide, 2500);
    };

    const stopTimer = () => {
      clearInterval(timer);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startTimer();
      });
    });

    statCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        goToSlide(index);
        startTimer();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToSlide(index);
          startTimer();
        }
      });
    });

    hero.addEventListener('mouseenter', () => {
      isHovered = true;
      stopTimer();
    });

    hero.addEventListener('mouseleave', () => {
      isHovered = false;
      startTimer();
    });

    let touchStartX = 0;
    let touchEndX = 0;

    hero.addEventListener('touchstart', (e) => {
      isTouching = true;
      stopTimer();
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    hero.addEventListener('touchend', (e) => {
      isTouching = false;
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 40) {
        goToSlide(currentIndex + 1);
      } else if (touchEndX - touchStartX > 40) {
        goToSlide(currentIndex - 1);
      }
      startTimer();
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        if (inView) {
          startTimer();
        } else {
          stopTimer();
        }
      }, { threshold: 0.2 }).observe(hero);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    });

    if (motionPreference) {
      motionPreference.addEventListener('change', () => {
        if (motionPreference.matches) stopTimer();
        else startTimer();
      });
    }

    goToSlide(0);
    startTimer();
  }

  function initAchievementGallery() {
    const root = document.querySelector('#student-achievements');
    if (!root) return;
    const track = root.querySelector('.law-achievements-track');
    if (!track?.firstElementChild) return;
    const previous = root.querySelector('[data-achievement-previous]');
    const next = root.querySelector('[data-achievement-next]');
    const counter = root.querySelector('.achievement-slider-counter');
    const cards = [...track.querySelectorAll('.law-achievement-card')];
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = (cards[0] || track.firstElementChild)?.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const update = () => {
      if (previous) previous.disabled = false;
      if (next) next.disabled = false;
      if (!counter || !cards.length) return;
      const { pages } = getPages();
      if (!pages.length) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      counter.textContent = `${current + 1} / ${pages.length}`;
    };

    const move = direction => {
      const { pages, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
      if (counter) counter.textContent = `${nextIndex + 1} / ${pages.length}`;
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || cards.length <= 1) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 5500);
    };

    if (previous) {
      previous.addEventListener('click', () => {
        move(-1);
        restartTimer();
      });
    }
    if (next) {
      next.addEventListener('click', () => {
        move(1);
        restartTimer();
      });
    }

    track.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
      restartTimer();
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
    restartTimer();
  }

  // Initialize after the document is parsed (script is deferred).
  initResponsiveApplicationSection();
  initApplicationForm();
  initVideoDialog();
  initLeaderCarousel();
  initLawEngagementShowcase();
  initLawEventDetails();
  initBackToTop();
  initStickyAdmissionsCTA();
  initIndustryBenefits();
  initHeroAndRecognition();
  initCampusGallery();
  initFacultyProfiles();
  initFounderStories();
  initAchievementGallery();
  initAchieversHeroSlider();
  initPlacementStories();
  initInternshipRotators();
  initStoryCarousels();
  initPlacementHighlights();
  initCountUpNumbers();
})();
