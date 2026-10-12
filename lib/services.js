import {
  Wind,
  FireExtinguisher,
  BellRing,
  DraftingCompass,
  BrickWall,
  Store,
  Wrench,
  ShieldCheck,
  ClipboardCheck,
} from 'lucide-react';

// Content source: United Sales Corporation company profile and approved brief.
// Keep descriptions factual; do not add approvals or certifications unless verified.

export const services = [
  {
    slug: 'hvac',
    title: 'HVAC Systems',
    navTitle: 'HVAC Systems',
    icon: Wind,
    art: 'hvac',
    summary:
      'HVAC installation and coordination support, equipment and ducting interfaces, ventilation, inspections, troubleshooting, and planned maintenance.',
    metaDescription:
      'HVAC installation and coordination support for commercial spaces — equipment and ducting interfaces, ventilation, inspections, troubleshooting and planned maintenance.',
    headline: 'Air-conditioning and ventilation support, coordinated with the rest of the building.',
    intro: [
      'HVAC is usually the largest building service in a commercial fit-out, and the one with the most interfaces: ceilings, structure, electrical supply, drainage, fire dampers and controls all meet it somewhere. United Sales Corporation supports HVAC work with attention to those interfaces from the start, so equipment, ducting and ventilation can be installed and maintained without conflict.',
      'Our work covers installation and coordination support, inspection and troubleshooting on existing systems, and planned maintenance that keeps equipment operating as intended.',
    ],
    scope: [
      { title: 'Installation & coordination support', text: 'Support for installing HVAC equipment and associated services in line with the agreed drawings and scope.' },
      { title: 'Equipment & ducting interfaces', text: 'Coordinating indoor and outdoor units, duct routes, supports, grilles and diffusers with ceilings, structure and adjacent services.' },
      { title: 'Ventilation', text: 'Fresh-air and exhaust arrangements for areas such as kitchens, toilets, back-of-house and plant spaces.' },
      { title: 'Inspections', text: 'Site inspections to review installed condition, access for maintenance and alignment with the agreed layout.' },
      { title: 'Troubleshooting', text: 'Fault finding on operating systems — airflow, cooling performance, drainage and control issues — with clear reporting.' },
      { title: 'Planned maintenance', text: 'Scheduled servicing to support reliable operation and a predictable maintenance record.' },
    ],
    focus: {
      title: 'Where coordination matters most',
      points: [
        'Duct routes against beams, sprinkler mains and cable trays in tight ceiling voids',
        'Condensate drainage falls and connection points',
        'Electrical supply and isolator positions for each unit',
        'Service access to filters, coils and valves after ceilings close',
      ],
    },
    enquiryInfo: ['Floor plans or HVAC layout (if available)', 'Area and type of space', 'Existing equipment details for service work', 'Site location and expected timing'],
    related: ['mep-coordination', 'maintenance-amc', 'interiors-retail-fitouts'],
  },
  {
    slug: 'fire-fighting',
    title: 'Fire Fighting Systems',
    navTitle: 'Fire Fighting Systems',
    icon: FireExtinguisher,
    art: 'fire',
    summary:
      'Fire hydrant and hose-reel networks, sprinkler systems, fire pumps, piping, valves, and associated equipment.',
    metaDescription:
      'Fire fighting system support for commercial buildings — hydrant and hose-reel networks, sprinkler systems, fire pumps, piping, valves and associated equipment.',
    headline: 'Water-based fire protection, from pump room to sprinkler head.',
    intro: [
      'Fire fighting systems are made up of many connected parts — pumps, risers, hydrant and hose-reel networks, sprinkler distribution, valves and fittings — and each has to work as part of one system. We support the installation and coordination of these systems within the scope agreed for each project.',
      'Our attention is on correct routing, sound supports, accessible valves and organised records, so the system can be tested, handed over and maintained properly.',
    ],
    scope: [
      { title: 'Hydrant networks', text: 'Internal and external hydrant piping, landing valves and associated fittings as per the agreed layout.' },
      { title: 'Hose-reel systems', text: 'Hose-reel drops and connections positioned for access and coverage within the design intent.' },
      { title: 'Sprinkler systems', text: 'Sprinkler mains, branch lines and heads coordinated with ceilings, lighting and HVAC.' },
      { title: 'Fire pumps', text: 'Support for pump-set installation and pump-room piping, including connections and associated valves.' },
      { title: 'Piping & valves', text: 'Pipe routing, supports, isolation and control valves, and associated equipment.' },
      { title: 'Testing support', text: 'Support for pressure testing and system checks relevant to the agreed scope, with records for handover.' },
    ],
    focus: {
      title: 'Points we check on site',
      points: [
        'Sprinkler head positions against ceiling grids, lights and diffusers',
        'Pipe supports and spacing along mains and branch lines',
        'Valve accessibility and identification',
        'Clearances around hydrant and hose-reel locations',
      ],
    },
    enquiryInfo: ['Fire fighting drawings or tender scope', 'Building type and floor areas', 'Existing system details (for modifications)', 'Site location'],
    related: ['fire-alarm-detection', 'fire-safety-consultation', 'project-execution'],
  },
  {
    slug: 'fire-alarm-detection',
    title: 'Fire Alarm & Detection',
    navTitle: 'Fire Alarm & Detection',
    icon: BellRing,
    art: 'alarm',
    summary:
      'Conventional and addressable systems, control panels, smoke/heat detectors, manual call points, hooters, strobes, interface modules, testing, and commissioning support.',
    metaDescription:
      'Fire alarm and detection support — conventional and addressable systems, control panels, smoke and heat detectors, manual call points, hooters, strobes, interface modules, testing and commissioning.',
    headline: 'Detection and alarm systems, installed, tested and documented.',
    intro: [
      'A fire alarm system is only as dependable as its wiring, device placement and cause-and-effect logic. We support conventional and addressable fire alarm installations — from devices and cabling through to panels, interfaces and testing.',
      'Each device and loop is installed against the agreed layout, and testing and commissioning support is documented so the building owner has a clear record of what was installed and checked.',
    ],
    scope: [
      { title: 'Conventional & addressable systems', text: 'Support for zone-based conventional systems and loop-based addressable systems, according to project requirements.' },
      { title: 'Control panels', text: 'Panel installation support, cable terminations and coordination of panel location and power supply.' },
      { title: 'Detectors', text: 'Smoke and heat detectors positioned in line with the agreed layout and ceiling conditions.' },
      { title: 'Manual call points, hooters & strobes', text: 'Call points along escape routes and audible/visual alarm devices for occupant warning.' },
      { title: 'Interface modules', text: 'Interfaces to other building systems — such as AHU shutdown, access control or lift signals — where included in scope.' },
      { title: 'Testing & commissioning support', text: 'Device-by-device testing support, loop checks and records for handover.' },
    ],
    focus: {
      title: 'What a clean handover includes',
      points: [
        'Device schedule matching the installed layout',
        'Loop and zone identification at the panel',
        'Record of device tests carried out',
        'Interface functions checked with the relevant trades',
      ],
    },
    enquiryInfo: ['Fire alarm layout or device schedule', 'Conventional or addressable preference', 'Interfaces required with other systems', 'Site location and floor count'],
    related: ['fire-fighting', 'fire-safety-consultation', 'maintenance-amc'],
  },
  {
    slug: 'mep-coordination',
    title: 'MEP Drawings & Coordination',
    navTitle: 'MEP Coordination',
    icon: DraftingCompass,
    art: 'mep',
    summary:
      'Mechanical, Electrical, and Plumbing drawing coordination, service-layout review, interface coordination, and project documentation support.',
    metaDescription:
      'MEP drawing coordination for commercial projects — mechanical, electrical and plumbing layout review, interface coordination and project documentation support.',
    headline: 'Resolving clashes on drawings, before they become rework on site.',
    intro: [
      'Most site rework traces back to services that were drawn separately and only met in the ceiling void. MEP coordination brings mechanical, electrical and plumbing layouts together so routes, levels and access are agreed before installation begins.',
      'We support drawing coordination, service-layout review and interface coordination between trades, alongside the documentation that keeps the project team working from the same information.',
    ],
    scope: [
      { title: 'Drawing coordination', text: 'Reviewing mechanical, electrical and plumbing layouts together to identify clashes and conflicts.' },
      { title: 'Service-layout review', text: 'Checking routes, levels and equipment positions against architectural and structural constraints.' },
      { title: 'Interface coordination', text: 'Agreeing responsibilities and connection points where systems meet — between trades and with the client team.' },
      { title: 'Fire services integration', text: 'Bringing fire fighting and fire alarm layouts into the coordinated set alongside HVAC and electrical.' },
      { title: 'Documentation support', text: 'Organising drawing revisions, coordination notes and records according to the agreed scope.' },
    ],
    focus: {
      title: 'Typical coordination questions',
      points: [
        'Which service takes priority at a congested crossing?',
        'Are access panels located where maintenance actually needs them?',
        'Do equipment positions suit the available electrical and drainage points?',
        'Is the latest revision the one being built on site?',
      ],
    },
    enquiryInfo: ['Architectural and services drawings', 'Current drawing revision status', 'Trades and systems involved', 'Project stage and site location'],
    related: ['hvac', 'project-execution', 'civil-works'],
  },
  {
    slug: 'civil-works',
    title: 'Civil Works',
    navTitle: 'Civil Works',
    icon: BrickWall,
    art: 'civil',
    summary:
      'Associated civil works, openings and making-good, supports, sleeves, foundations, and site coordination.',
    metaDescription:
      'Associated civil works for building-services projects — openings and making-good, supports, sleeves, equipment foundations and site coordination.',
    headline: 'The civil work that building services depend on.',
    intro: [
      'Building services rarely install cleanly without supporting civil work: openings through walls and slabs, sleeves for pipes, plinths for equipment, and making-good once services are in place. We handle these associated civil works so the services package is not held up waiting for another contractor.',
      'Civil works are a growing part of our capability, in line with the company’s plans to expand into broader civil and infrastructure work.',
    ],
    scope: [
      { title: 'Openings & making-good', text: 'Forming openings for ducts, pipes and cables, and making-good finishes after installation.' },
      { title: 'Supports', text: 'Supports and brackets for services where required by the agreed scope.' },
      { title: 'Sleeves', text: 'Sleeves through walls and slabs for pipe and cable penetrations.' },
      { title: 'Foundations', text: 'Equipment foundations and plinths for outdoor units, pumps and similar plant.' },
      { title: 'Site coordination', text: 'Sequencing civil activities with the services trades to avoid rework.' },
    ],
    focus: {
      title: 'Why it is handled with the services',
      points: [
        'Openings sized and located from the coordinated services layout',
        'Foundations ready before equipment arrives on site',
        'Making-good sequenced after testing, not before',
        'One point of contact for services and associated civil work',
      ],
    },
    enquiryInfo: ['Drawings showing openings or plinths required', 'Wall and slab construction type', 'Finish requirements for making-good', 'Site location'],
    related: ['mep-coordination', 'project-execution', 'interiors-retail-fitouts'],
  },
  {
    slug: 'interiors-retail-fitouts',
    title: 'Interiors & Retail Fit-Outs',
    navTitle: 'Interiors & Retail Fit-Outs',
    icon: Store,
    art: 'interiors',
    summary:
      'Technical coordination for retail stores, showrooms, restaurants, and commercial interiors.',
    metaDescription:
      'Technical coordination for retail stores, showrooms, restaurants and commercial interiors — aligning HVAC, fire safety and MEP services with the fit-out design.',
    headline: 'Building services that work with the interior design, not against it.',
    intro: [
      'Retail stores, showrooms, restaurants and commercial interiors run on tight programmes, often inside a mall or building with its own technical requirements. The services have to suit the design intent, the landlord’s standards and the opening date.',
      'We provide technical coordination for these fit-outs — aligning HVAC, fire fighting, fire alarm and MEP services with ceilings, fixtures and finishes.',
    ],
    scope: [
      { title: 'Retail stores', text: 'Services coordination for store layouts, ceilings, display lighting zones and back-of-house areas.' },
      { title: 'Showrooms', text: 'Coordinating services discreetly around feature ceilings, displays and open floor plates.' },
      { title: 'Restaurants', text: 'Kitchen exhaust, fresh air, HVAC and fire services coordination for dining and kitchen areas.' },
      { title: 'Commercial interiors', text: 'Office and commercial fit-outs where services must align with partitions, ceilings and furniture layouts.' },
      { title: 'Landlord interfaces', text: 'Coordinating tie-ins to base-building HVAC, fire and electrical systems where applicable.' },
    ],
    focus: {
      title: 'Fit-out priorities',
      points: [
        'Services positions that respect the ceiling and lighting design',
        'Tie-ins to mall or building systems planned early',
        'Work sequenced around other fit-out trades',
        'Testing and documentation ready for handover',
      ],
    },
    enquiryInfo: ['Store or interior layout drawings', 'Landlord or mall technical guidelines (if any)', 'Services included in your scope', 'Site location and target handover'],
    related: ['hvac', 'fire-fighting', 'mep-coordination'],
  },
  {
    slug: 'maintenance-amc',
    title: 'Maintenance & AMC',
    navTitle: 'Maintenance & AMC',
    icon: Wrench,
    art: 'maintenance',
    summary:
      'Preventive maintenance, routine inspections, fault diagnosis, troubleshooting, service reporting, and system upkeep.',
    metaDescription:
      'Maintenance and AMC support for commercial building services — preventive maintenance, routine inspections, fault diagnosis, troubleshooting and service reporting.',
    headline: 'Keeping installed systems working after handover.',
    intro: [
      'Systems that are well installed still need regular attention. Filters clog, devices age, and small faults become larger ones if they are not caught early. Maintenance and Annual Maintenance Contracts (AMC) give facilities a planned approach to keeping HVAC and fire-safety systems in working order.',
      'We support preventive maintenance, routine inspections and fault diagnosis, with service reports that give facility teams a clear record of what was checked and what needs attention.',
    ],
    scope: [
      { title: 'Preventive maintenance', text: 'Scheduled servicing of HVAC and fire-safety systems according to the agreed maintenance plan.' },
      { title: 'Routine inspections', text: 'Periodic checks on system condition, operation and any visible issues.' },
      { title: 'Fault diagnosis', text: 'Identifying the cause of system faults rather than only treating symptoms.' },
      { title: 'Troubleshooting', text: 'Responding to operational issues and restoring systems within the agreed scope.' },
      { title: 'Service reporting', text: 'Written records of each visit — work done, observations and recommended actions.' },
      { title: 'System upkeep', text: 'Ongoing attention to keep systems in good condition between scheduled visits.' },
    ],
    focus: {
      title: 'What a maintenance plan should define',
      points: [
        'Which systems and equipment are covered',
        'Visit frequency and checklist for each system',
        'How breakdown calls are raised and recorded',
        'Format and frequency of service reports',
      ],
    },
    enquiryInfo: ['List of systems and equipment to be covered', 'Approximate equipment count and age', 'Number of sites or floors', 'Preferred visit frequency'],
    related: ['hvac', 'fire-alarm-detection', 'fire-safety-consultation'],
  },
  {
    slug: 'fire-safety-consultation',
    title: 'Fire-Safety Consultation',
    navTitle: 'Fire-Safety Consultation',
    icon: ShieldCheck,
    art: 'consult',
    summary:
      'Fire-safety planning support, equipment selection, site reviews, coordination, and documentation support.',
    metaDescription:
      'Fire-safety consultation support — planning, equipment selection, site reviews, coordination with other trades and documentation support for commercial premises.',
    headline: 'Practical fire-safety input at the planning stage and on site.',
    intro: [
      'Fire-safety decisions made early — which systems are needed, where equipment goes, how it interfaces with the building — shape the cost and complexity of everything that follows. We provide practical consultation support to help clients plan fire-safety requirements for their premises.',
      'Our role is advisory and coordinating: reviewing sites, supporting equipment selection and helping organise the documentation that the project needs. Statutory approvals remain with the relevant authorities and the appointed consultants.',
    ],
    scope: [
      { title: 'Planning support', text: 'Helping clients understand the fire-safety systems relevant to their premises and project scope.' },
      { title: 'Equipment selection', text: 'Supporting selection of fire fighting and fire alarm equipment suited to the application.' },
      { title: 'Site reviews', text: 'Reviewing existing site conditions and installations to identify gaps and practical constraints.' },
      { title: 'Coordination', text: 'Coordinating fire-safety requirements with HVAC, electrical, interiors and civil works.' },
      { title: 'Documentation support', text: 'Helping organise drawings, schedules and records needed for the project.' },
    ],
    focus: {
      title: 'Useful at these stages',
      points: [
        'Before taking possession of a new commercial space',
        'When planning a fit-out or change of use',
        'When an existing installation needs review or upgrade',
        'Before handover, to check records are complete',
      ],
    },
    enquiryInfo: ['Type of premises and occupancy', 'Floor plans', 'Details of any existing fire-safety systems', 'What decision or stage you need support with'],
    related: ['fire-fighting', 'fire-alarm-detection', 'mep-coordination'],
  },
  {
    slug: 'project-execution',
    title: 'Project Execution & Handover',
    navTitle: 'Project Execution & Handover',
    icon: ClipboardCheck,
    art: 'execution',
    summary:
      'Site coordination, work planning, installation support, testing records, snag closure, and handover documentation.',
    metaDescription:
      'Project execution and handover support — site coordination, work planning, installation support, testing records, snag closure and handover documentation.',
    headline: 'From mobilisation to a documented, closed-out handover.',
    intro: [
      'Execution is where planning is tested. Materials, manpower, other trades and site access all have to line up, and the project is only complete once snags are closed and records handed over.',
      'We support site coordination and work planning through installation, testing and handover — so the client receives a working system and the documentation to operate and maintain it.',
    ],
    scope: [
      { title: 'Site coordination', text: 'Coordinating with the client team, other contractors and site management through the works.' },
      { title: 'Work planning', text: 'Sequencing activities, materials and manpower according to the agreed programme and scope.' },
      { title: 'Installation support', text: 'Supervising and supporting installation of building services on site.' },
      { title: 'Testing records', text: 'Recording tests carried out on installed systems for the handover file.' },
      { title: 'Snag closure', text: 'Tracking and closing out snag items raised during inspections.' },
      { title: 'Handover documentation', text: 'Assembling the records the client needs to operate and maintain the systems.' },
    ],
    focus: {
      title: 'Handover file contents (as agreed per project)',
      points: [
        'Installed-condition drawings or marked-up layouts',
        'Testing and inspection records',
        'Snag list with closure status',
        'Equipment details and maintenance information',
      ],
    },
    enquiryInfo: ['Project scope and drawings', 'Programme or target dates', 'Other contractors on site', 'Handover documentation requirements'],
    related: ['mep-coordination', 'civil-works', 'maintenance-amc'],
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
