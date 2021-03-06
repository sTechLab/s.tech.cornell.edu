var marked = require('marked');

var publications = [
  { 
    mobileInfo: 'Max Grusky, Mor Naaman, Yoav Artzi NEWSROOM: A Dataset of 1.3 Million Summaries with Diverse Extractive Strategies In Proceedings, North American Chapter of the Association for Computational Linguistics: Human Language Technologies. (NAACL 2018), June 2018, New Orleans, Louisiana.',
    title: 'NEWSROOM: A Dataset of 1.3 Million Summaries with Diverse Extractive Strategies',
    author: 'Max Grusky, Mor Naaman, Yoav Artzi',
    conference: 'NAACL 2018',
    type: 'Paper',
    image: '/assets/img/publication/newsroom.png',
    links: [
        ['PDF', '/assets/papers/newsroom.pdf'],
        ['Website', 'https://summari.es']
    ],
    abstract: 'We present NEWSROOM, a summarization dataset of 1.3 million articles and summaries written by authors and editors in newsrooms of 38 major news publications. Extracted from search and social media metadata between 1998 and 2017, these high-quality summaries demonstrate high diversity of summarization styles. In particular, the summaries combine abstractive and extractive strategies, borrowing words and phrases from articles at varying rates. We analyze the extraction strategies used in NEWSROOM summaries against other datasets to quantify the diversity and difficulty of our new data, and train existing methods on the data to evaluate its utility and challenges. The dataset is available online at summari.es'
  },
  { 
    mobileInfo: 'Matthew V. Law, Mor Naaman, and Nicola Dell. ShareBox: Designing A Physical System to Support Resource Exchange in Local Communities. In Proceedings, Designing Interactive Systems. (DIS 2018), June 2018, Hong Kong.',
    title: 'ShareBox: Designing A Physical System to Support Resource Exchange in Local Communities.',
    author: 'Matthew V. Law, Mor Naaman, and Nicola Dell',
    conference: 'DIS 2018',
    type: 'Paper',
    image: '/assets/img/publication/box.jpg',
    links: [['PDF', '/assets/papers/sharebox-local-communities.pdf']],
    abstract: 'ShareBox is a technology probe that facilitates local borrowing and lending of physical items using a chatbot and smart lockbox. We describe the design of ShareBox and evaluate a set of design guidelines, including the physical-virtual nature of the system, anonymity and asynchronous exchange, through three short deployments. Our findings, based on semi-structured interviews with community members, highlight the potential and remaining challenges in our design.'
  },
  { 
    mobileInfo: 'Xiao Ma, Megan Cackett, Leslie Park, Eric Chien, and Mor Naaman. Web-Based VR Experiments Powered by the Crowd. In Proceedings, International World Wide Web Conference. (WWW 2018), April 2018, Perth, Australia',
    title: 'Web-Based VR Experiments Powered by the Crowd',
    author: 'Xiao Ma, Megan Cackett, Leslie Park, Eric Chien, Mor Naaman',
    conference: 'WWW 2018',
    type: 'Paper',
    image: '/assets/img/publication/crowdvr.jpeg',
    links: [['PDF', 'https://arxiv.org/pdf/1802.08345.pdf']],
    abstract: 'We build on the increasing availability of Virtual Reality (VR) devices and Web technologies to conduct behavioral experiments in VR using crowdsourcing techniques. A new recruiting and validation method allows us to create a panel of eligible experiment participants recruited from Amazon Mechanical Turk. Using this panel, we ran three different crowdsourced VR experiments, each reproducing one of three VR illusions: place illusion, embodiment illusion, and plausibility illusion. Our experience and worker feedback on these experiments show that conducting Web-based VR experiments using crowdsourcing is already feasible, though some challenges---including scale---remain. Such crowdsourced VR experiments on the Web have the potential to finally support replicable VR experiments with diverse populations at a low cost.'
  },
  { 
  mobileInfo: 'Emily Sun and Mor Naaman. A Multi-site Investigation of Community Awareness Through Passive Location Sharing. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2018), April 2018, Montreal, Canada',
    title: 'A Multi-site Investigation of Community Awareness Through Passive Location Sharing',
    author: 'Emily Sun and Mor Naaman',
    conference: 'CHI 2018',
    type: 'Paper',
    image: '/assets/img/publication/location-sharing-sun.png',
    links: [
      ['PDF', '/assets/papers/location-sharing-sun.pdf'],
      ['Reviews', '/assets/reviews/chi-2018-location.txt'],
    ],
    abstract: 'We aim to understand if and how passive location sharing might be socially beneficial for communities. We conducted a deployment of MoveMeant (see Sun et al. CHI 2017) and 45 interviews with users of the system and community leaders across three different communities. We discuss the issues that communities face and the potential positive and negative repercussions of surfacing passive location information.'
  },
  { 
    mobileInfo: 'Xiao Ma, Trishala Neeraj, and Mor Naaman. A Computational Approach to Perceived Trustworthiness of Airbnb Host Profiles. In Proceedings, International AAAI Conference on Web and Social Media. (ICWSM 2017), May 2017, Montreal, Canada',
    title: 'A Computational Approach to Perceived Trustworthiness of Airbnb Host Profiles',
    author: 'Xiao Ma, Trishala Neeraj, Mor Naaman',
    conference: 'ICWSM 2017',
    type: 'Poster',
    image: '/assets/img/publication/computational-airbnb.jpg',
    links: [['Dataset', 'https://github.com/sTechLab/AirbnbHosts-Extended', 'arrow-down'], 
            ['PDF', 'http://maxiao.info/assets/computational-airbnb.pdf']],
    abstract: 'Building on our previous work (see below by Ma et al. CSCW 2017), we developed a novel computational framework to predict the perceived trustworthiness of host profile texts in the context of online lodging marketplaces. We developed a dataset of 4,180 Airbnb host profiles annotated with perceived trustworthiness, and also provide insights into the linguistic factors that contribute to higher and lower perceived trustworthiness for profiles of different lengths.'
  },
  { 
    mobileInfo: 'Max Grusky, Jeiran Jahani, Josh Schwartz, Dan Valente, Yoav Artzi, and Mor Naaman. Modeling Sub-Document Attention Using Viewport Time. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2017), May 2017, Denver, USA',
    title: 'Modeling Sub-Document Attention Using Viewport Time',
    author: 'Max Grusky, Jeiran Jahani, Josh Schwartz, Dan Valente, Yoav Artzi, and Mor Naaman',
    conference: 'CHI 2017',
    type: 'Note',
    image: '/assets/img/publication/viewport-time-chi2017.png',
    links: [
      ['PDF', '/assets/papers/viewport-time-chi2017.pdf'],
      ['Reviews', '/assets/reviews/chi-2017-viewport.txt'],
    ],
    abstract: 'Website measures of engagement captured from millions of users, such as in-page scrolling and viewport position, can provide deeper understanding of attention than possible with simpler measures, such as dwell time. Using data from 1.2M news reading sessions, we examine and evaluate three increasingly sophisticated models of sub-document attention computed from viewport time, the time a page component is visible on the user display. Our approach supports refined large-scale measurement of user engagement at a level previously available only from lab-based eye-tracking studies.'
  },
 { 
  mobileInfo: 'Emily Sun, Ross McLachlan, Mor Naaman. MoveMeant: Anonymously Building Community Through Shared Location Histories. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2017), May 2017, Denver, USA',
    title: 'MoveMeant: Anonymously Building Community Through Shared Location Histories',
    author: 'Emily Sun*, Ross McLachlan*, Mor Naaman (*authors contributed equally)',
    conference: 'CHI 2017',
    type: 'Note',
    image: '/assets/img/publication/movemeant.png',
    links: [
      ['PDF', '/assets/papers/movemeant-note-chi2017.pdf'],
      ['Reviews', '/assets/reviews/chi-2017-movemeant.txt'],
    ],
    abstract: 'We describe the design and implementation of MoveMeant, a system aimed to increase local community awareness through shared location traces. We report findings from interviews with residents in the Bronx, New York City who participated in a deployment of MoveMeant over a 6-week period.'
  },
 { 
  mobileInfo: 'Xiao Ma, Nazanin Andalibi, Louise Barkhuus, Mor Naaman. “People Are Either Too Fake or Too Real”: Opportunities and Challenges in Tie-Based Anonymity. In Proceedings, ACM International Conference on Human Factors in Computing Systems. (CHI 2017), May 2017, Denver, USA',
    title: '“People Are Either Too Fake or Too Real”: Opportunities and Challenges in Tie-Based Anonymity',
    author: 'Xiao Ma, Nazanin Andalibi, Louise Barkhuus, Mor Naaman',
    conference: 'CHI 2017',
    type: 'Paper',
    image: '/assets/img/publication/secret-qual.png',
    links: [
      ['PDF', '/assets/papers/secret-qual.pdf'],
      ['Reviews', '/assets/reviews/chi-2017-anonymity.txt'],
    ],
    abstract: 'We interviewed users of two anonymous social applications, Secret and Mimi, both of which allowed people to share information anonymously with friends. Our findings show that although users feel more comfortable sharing information on these “tie-based” anonymous applications, they are still concerned about being identified, and at the same time, engage in sometimes elaborate attempts to uncover the identities of others.'
  },
{ 
    mobileInfo: 'Nir Grinberg, Shankar Kalyanaraman, Lada Adamic, and Mor Naaman. Understanding Feedback Expectation on Facebook. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'Understanding Feedback Expectation on Facebook.',
    author: 'Nir Grinberg, Shankar Kalyanaraman, Lada Adamic, and Mor Naaman',
    conference: 'CSCW 2017',
    type: 'Paper',
    image: '/assets/img/publication/feedback_exp_thumb.jpg',
    links: [
      ['PDF', 'http://www.nirg.net/papers/feedback_exp.pdf'],
      ['Reviews', '/assets/reviews/cscw-2017-facebook.txt']
    ],
    abstract: 'In this study, we quantitatively examined the factors contributing to feedback expectations and find that fulfilling expectations is linked to connectedness, an important ingredient for well-being. By conducting two large surveys on Facebook.com we find that people report higher expectations on posts they evaluated as more important, and to a lesser extent more personal. Expectations varied across people and friendships, most notably by recency of communication, geographical proximity, and the type of relationship (e.g. family, co-worker). The study provides a conceptual framework for thinking about feedback expectations in social media settings and a computational model for utilizing expectations in the design of social systems.'
  },
 { 
    mobileInfo: 'Xiao Ma, Jeff Hancock, Kenneth Lim Mingjie, Mor Naaman. Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles',
    author: 'Xiao Ma, Jeff Hancock, Kenneth Lim Mingjie, Mor Naaman',
    conference: 'CSCW 2017',
    isAward: 'Best Paper Honorable Mention',
    type: 'Paper',
    image: '/assets/img/publication/airbnb.png',
    links: [
      ['Dataset', 'https://github.com/sTechLab/AirbnbHosts', 'arrow-down'], 
      ['PDF', '/assets/papers/ma2017airbnb.pdf'],
      ['Reviews', '/assets/reviews/cscw-2017-airbnb.txt'],
    ],
    abstract: 'We conducted the first large-scale mixed-method analysis of Airbnb host profiles, by categorizing the types of information hosts share in their profiles, and assessing how trustworthy their profiles are perceived to be. We found that hosts do not always follow the prompts by Airbnb website, but instead disclose information that reduces the uncertainty of anticipated future interaction. The language of hospitality, i.e., making direct promises to take care of guests, was found to be the most effective in establishing perceived trustworthiness.'
  },
 { 
    mobileInfo: 'Emily Sun, Ross McLachlan, Mor Naaman. TAMIES: A Study and Model of Adoption in P2P Resource Sharing and Indirect Exchange Systems. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'TAMIES: A Study and Model of Adoption in P2P Resource Sharing and Indirect Exchange Systems',
    author: 'Emily Sun*, Ross McLachlan*, Mor Naaman (*authors contributed equally)',
    conference: 'CSCW 2017',
    type: 'Paper',
    image: '/assets/img/publication/P2PTAM_CR.jpg',
    links: [
      ['PDF', '/assets/papers/tamies.pdf'],
      ['Reviews', '/assets/reviews/cscw-2017-p2p.txt']
    ],
    abstract: 'Peer-to-peer indirect exchange services, such as Peerby and NeighborGoods, do not seem to have been as widely adopted as direct exchange systems, such as Uber and AirBnb. Building upon the results of interviews with 37 residents of New York City, a survey with 195 respondents, previous technology acceptance models, critical mass theory, and prior research on peer economies, we propose a technology acceptance model for indirect exchange systems that includes generalized trust and ease of coordination.'
  },
 {  
    mobileInfo: 'Xiao Ma, Emily Sun, Mor Naaman. What Happens in happn: The Warranting Power of Location History in Online Dating. In Proceedings, ACM International Conference on Computer-Supported Cooperative Work. (CSCW 2017), February 2017, Portland, USA',
    title: 'What Happens in happn: The Warranting Power of Location History in Online Dating',
    author: 'Xiao Ma, Emily Sun, Mor Naaman',
    conference: 'CSCW 2017',
    type: 'Paper',
    image: '/assets/img/publication/happn_website.jpg',
    links: [
      ['PDF', '/assets/papers/making-sense-location_CR.pdf'],
      ['Reviews', '/assets/reviews/cscw-2017-happn.txt'],
    ],
    abstract: 'We interviewed users of a novel mobile dating application, happn, which shows users the number of times they crossed path with potential matches. We show that users assigned significant meaning to the minimal cues available from location history information. At the same time, users have concerns about security and recognition by known others as a result of sharing personal location history.'
  },

  {
    mobileInfo: 'Minsu Park, Mor Naaman, Jonah Berger. A Data-driven Study of View Duration on YouTube. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2016), May 2016, Cologne, Germany',
    title: 'A Data-driven Study of View Duration on YouTube',
    author: 'Minsu Park, Mor Naaman, Jonah Berger',
    conference: 'ICWSM 2016',
    type: 'Paper',
    image: '/assets/img/publication/publication-youtube.jpg',
    links: [['Dataset', 'https://github.com/sTechLab/YouTubeDurationData', 'arrow-down'], 
            ['PDF', '/assets/papers/ParkICWSM2016_YT.pdf']],
    abstract: 'Using two distinct YouTube datasets, we examine whether and how indicators of collective preferences and reactions are associated with view duration of videos.'
  },
  {
    mobileInfo: 'Xiao Ma, Jeff Hancock, Mor Naaman. Anonymity, Intimacy and Self-Disclosure in Social Media. In Proceedings, ACM Conference on Human Factors in Computing Systems. (CHI 2016), May 2015, San Jose, USA',
    title: 'Anonymity, Intimacy and Self-Disclosure in Social Media',
    author: 'Xiao Ma, Jeff Hancock, Mor Naaman',
    conference: 'CHI 2016',
    type: 'Paper',
    image: '/assets/img/publication/publication-Anonymity.jpg',
    video: '/assets/img/publication/publication-Anonymity.mp4',
    links: [['Dataset', 'https://github.com/sTechLab/SelfDisclosureItems', 'arrow-down'], 
            ['PDF', '/assets/papers/anonymity-intimacy-disclosure.pdf']],
    abstract: 'We conducted an experiment to study the relationship between content intimacy and self-disclosure in social media, and how anonymity and audience type (social ties vs. people nearby) moderate that relationship.'
  },
  {
    mobileInfo: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, and Mor Naaman. Changes in Engagement Before and After Posting to Facebook. In Proceedings, ACM Conference on Human Factors in Computing Systems. (CHI 2016), May 2015, San Jose, USA',
    title: 'Changes in Engagement Before and After Posting to Facebook',
    author: 'Nir Grinberg, P. Alex Dow, Lada A. Adamic, and Mor Naaman',
    conference: 'CHI 2016',
    isAward: 'Best Paper Honorable Mention',
    type: 'Paper',
    image: '/assets/img/publication/publication-08.png',
    links: [['PDF', 'http://www.nirg.net/papers/contribution2016grinberg.pdf']],
    abstract: 'The study identified a unique pattern of engagement that accompanies posting on Facebook. Using observational data analysis we show that after posting content, people visit the site more often, are more attentive to content from friends, and even interact more with friends content.'
  },
  {
    mobileInfo: 'Raz Schwarz, Mor Naaman, Rannie Teodoro. Editorial Algorithms: Using Social Media to Discover and Report Local News. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    title: 'Editorial Algorithms: Using Social Media to Discover and Report Local News',
    author: 'Raz Schwarz, Mor Naaman, Rannie Teodoro',
    conference: 'ICWSM 2015',
    type: 'Paper',
    image: '/assets/img/publication/publication-01.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Schwartz_ICWSM2015_CityBeat.pdf']],
    abstract: 'We discuss CityBeat, a large-screen visualization that builds on machine learning techniques to expose hyper-local events in New York City from social media data. We deployed it with some national and local media and describe the gap between the journalistic needs and what our algorithm could provide.'
  },
  {
    mobileInfo: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg. Understanding Musical Diversity via Online Social Media. In Proceedings, ACM International Conference on Web Logs and Social Media. (ICWSM 2015), May 2015, Cambridge, England',
    title: 'Understanding Musical Diversity via Online Social Media',
    author: 'Minsu Park, Ingmar Weber, Mor Naaman, Sarah Vieweg',
    conference: 'ICWSM 2015',
    type: 'Paper',
    image: '/assets/img/publication/publication-02.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Park_ICWSM2015_MusicalDiversity.pdf']],
    abstract: 'Using data from users of Last.fm and Twitter, we design and evaluate a novel measure for computing diversity of musical tastes, and investigate its relationships with socioeconomic status and personal traits such as openness and degree of interest in music.'
  },
  {
    mobileInfo: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza. On the Accuracy of Hyper-local Geotagging of Social Media Content. In Proceedings, the ACM International Conference on Web Search and Data Mining (WSDM 2015). March 2015, Shanghai, China.',
    title: 'On the Accuracy of Hyper-local Geotagging of Social Media Content',
    author: 'David Flatow, Mor Naaman, Ke Eddie Xie, Yana Volkovich, Yaron Kanza',
    conference: 'WSDM 2015',
    type: 'Paper',
    image: '/assets/img/publication/publication-03.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/flatow_wsdm2015_geocoding.pdf']],
    abstract: 'Can we use geotagged social media to identify phrases that correspond to hyper-local geographic features? Does the geographic spread of such phrases differ between services or device types? (the answer to both is yes).'
  },
  {
    mobileInfo: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman.Understanding Loneliness in Social Awareness Streams: Expressions and Responses. Eighth International AAAI Conference on Weblogs and Social Media. (ICWSM 2014)',
    title: 'Understanding Loneliness in Social Awareness Streams: Expressions and Responses',
    author: 'Funda Kivran-Swaine, Jeremy Ting, Jed Richards Brubaker, Rannie Teodoro, Mor Naaman',
    conference: 'ICWSM 2014',
    type: 'Paper',
    image: '/assets/img/publication/publication-04.png',
    links: [['PDF', 'http://www.aaai.org/ocs/index.php/ICWSM/ICWSM14/paper/view/8038/8126']],
    abstract: 'Content analysis of tweets expressing loneliness exposes some key patterns in how people talk about loneliness on Twitter, as well as when such posts are likely to receive a response from friends and followers. '
  },
  {
    mobileInfo: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist. The Motivations and Experiences of the On-demand Mobile Workforce. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    title: 'The Motivations and Experiences of the On-demand Mobile Workforce',
    author: 'Rannie Teodoro, Pinar Ozturk, Mor Naaman, Winter Mason, and Janne Lindqvist',
    conference: 'CSCW 2014',
    type: 'Paper',
    image: '/assets/img/publication/publication-05.png',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Teodoro_CSCW2014_mobile_workforce.pdf']],
    abstract: 'We performed semi-structured interviews with workers of on-demand mobile workforce applications that match users with physical world tasks to expose their motivations, practices, and experiences. '
  },
  {
    mobileInfo: 'Jessa Lingel, Mor Naaman and danah boyd. City, Self, Network: Transnational Migrants and Online Identity Work. In Proceedings, ACM Conference on Computer Supported Cooperative Work. (CSCW 2014), February 2014',
    title: 'City, Self, Network: Transnational Migrants and Online Identity Work',
    author: 'Jessa Lingel, Mor Naaman and danah boyd',
    conference: 'CSCW 2014',
    type: 'Paper',
    image: '/assets/img/publication/publication-06.jpg',
    links: [['PDF', 'https://people.jacobs.cornell.edu/mor/publications/thegoods/Lingel_CSCW2014_migrants.pdf']],
    abstract: 'What are the challenges new immigrants face in online self-presentation and use of Facebook? We did a qualitative study to find out. '
  },
  {
    mobileInfo: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan. "Extracting Diurnal Patterns of Real World Activity from Social Media." In ICWSM. 2013.',
    title: 'Extracting Diurnal Patterns of Real World Activity from Social Media',
    author: 'Grinberg, Nir, Mor Naaman, Blake Shaw, and Gilad Lotan',
    conference: 'ICWSM 2013',
    type: 'Paper',
    image: '/assets/img/publication/publication-07.png',
    links: [['PDF', 'http://www.nirg.net/papers/grinberg-icwsm2013-extracting.pdf']],
    abstract: 'We developed methods to identify how people talk about real-world activities on social media. By examining activities such as nightlife, food or shopping we peek at the fundamental rhythm of human behavior at a city level and observe how it was disrupted during Hurricane Sandy.'
  },
];

var projects = [
  {
    title: 'Locally-Connected Experiences',
    image: '/assets/img/project/project-1.jpg',
    desc: 'As part of the AOL [Connected Experiences Laboratory](http://connectedexperiences.org/), we look at how data from mobile devices, sensors, as well as new cryptographic techniques and protocols can enable a socio-technical infrastructure to provide awareness, trust and meaningful connections between physically co-located individuals, including buildings, offices, and public spaces. Such infrastructure will empower people to make better connections and communication in their local communities, with long term impact on participation and democracy.',
    link: '#'
  },
  {
    title: 'Attention to Online Media',
    image: '/assets/img/project/project-2.jpg',
    desc: 'The goal of this project is to advance our understanding of the psychological mechanisms behind people\'s attention, as reflected through their interactions with digital content. In particular, we focus on the context of actions that people take online without any experimental intervention and examine how context affects behavior. We draw on theories from a wide range of fields to address questions that pertain to individual\'s attention to content, expectations for attention from others and the value in getting that attention. To that end, we harness machine learning methods as well as language and statistical modeling to analyze signals of human attention as they occurs naturally outside of lab settings.',
    link: '#'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

var people = [
  {
    name: 'Mor Naaman',
    title: 'Associate Professor',
    link: 'https://people.jacobs.cornell.edu/mor/',
    image: '/assets/img/people/profile_pic_mor.jpg',
    email: 'mor@jacobs.cornell.edu',
    twitter: 'informor'
  },
  {
    name: 'Benedetta Piantella',
    title: 'Technologist in Residence',
    image: '/assets/img/people/benedetta.jpg',
    email: 'bpp23@cornell.edu',
    twitter: 'benedetoula'
  },
  {
    name: 'Doron Tal',
    title: 'Sr. Research Engineer',
    image: '/assets/img/people/doron.jpg',
    email: 'doron.tal@cornell.edu'
  },
  {
    name: 'Matthew Law',
    title: 'PhD Student',
    link:  'http://mattlaw.io',
    image: '/assets/img/people/matt.jpg',
    email:  'mvl24@cornell.edu'
  },
  {
    name: 'Max Grusky',
    title: 'PhD Student',
    link: 'https://www.cs.cornell.edu/~grusky/',
    image: '/assets/img/people/max.jpg',
    email: 'grusky@cs.cornell.edu',
  },
  {
    name: 'Maurice Jakesch',
    title: 'PhD Student',
    image: '/assets/img/people/maurice.jpg',
    email: 'mpj32@cornell.edu',
  },  
  {
    name: 'Xiao Ma',
    title: 'PhD Student',
    link: 'http://maxiao.info/',
    image: '/assets/img/people/profile_pic_xiao.jpg',
    email: 'xiao@jacobs.cornell.edu',
    twitter: 'infoxiao'
  },
  {
    name: 'Uzi Smadja',
    title: 'MSc Student',
    image: '/assets/img/people/uzi.jpg',
    email: 'uzi.smadja@gmail.com',
  },
];

var news = [
  { 
    title: 'Matt Law received an Honor Mention for an NSF Fellowship. Nice work!',
    date: '3/2017'
  },
  { 
    title: 'Received Google Research Award to support our work on attention to online media',
    date: '2/2017'
  },
  { 
    title: 'Xiao Ma recognized as a Facebook PhD Fellowship Finalist. Congrats!',
    date: '1/2017'
  },
/*  { 
    title: '“Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles” Honorable Mention for Best Paper at CSCW 2017',
    date: '1/2017'
  },
/*  { 
    title: 'Three papers from the lab were accepted to CHI. Check out the PDFs below!',
    date: '12/2016'
  },
/*  { 
    title: 'Five papers by lab authors accepted to CSCW 2017 -- PDF now available.',
    date: '9/2016'
  },
/*  {
    title:' “Changes in Engagement Before and After Posting to Facebook”  Honorable Mention for Best Paper at CHI 2016',
    date:'5/2016'
  },
    {
/*      title: 'Paper studying view duration of YouTube videos to appear in ICWSM; the paper and dataset are both available below',
      date: '4/2016'
    },
/*  {
    title: 'Mor gave a keynote at [SNOW](http://www.snow-workshop.org) in Montreal on April 12.',
    date: '4/2016'
  },
  {
    title: 'Mor is an invited speaker at the [9th International Conference on Web Search and Data Mining](http://www.wsdm-conference.org/2016/invited-speakers.html#pe-naaman) (WSDM 2016) in San Francisco on February 25.',
    date: '2/2016'
  },*/
].map(function(n) {
  n.title = marked(n.title);
  return n;
});

module.exports = {
  publications: publications,
  projects: projects,
  people: people,
  news: news,
};
