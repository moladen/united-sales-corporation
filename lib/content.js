import {
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  Clapperboard,
  Briefcase,
  Settings2,
  Layers,
  ListChecks,
  Network,
  FileText,
  PackageCheck,
  CalendarClock,
} from 'lucide-react';

// Industry sectors are relevant environments for our services —
// not a list of confirmed customers or completed projects.
export const industries = [
  {
    slug: 'retail-fashion',
    title: 'Retail & Fashion',
    icon: ShoppingBag,
    text: 'Stores and brand outlets that need comfortable conditions, discreet services and fit-outs completed to tight opening dates.',
    needs: ['HVAC for sales floors and trial rooms', 'Sprinkler and detection coordination with feature ceilings', 'Fit-out services tied into mall systems'],
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    icon: UtensilsCrossed,
    text: 'Restaurants, cafés and food courts where kitchen ventilation, fresh air and fire protection must work together.',
    needs: ['Kitchen exhaust and fresh-air coordination', 'Fire protection around cooking areas', 'Maintenance planning for continuous operation'],
  },
  {
    slug: 'malls-commercial',
    title: 'Malls & Commercial Buildings',
    icon: Building2,
    text: 'Multi-tenant buildings with shared base-building systems and many interfaces between landlord and tenant works.',
    needs: ['Hydrant, sprinkler and fire alarm networks', 'Tenant tie-ins to base-building systems', 'Common-area HVAC and ventilation'],
  },
  {
    slug: 'entertainment-leisure',
    title: 'Entertainment & Leisure',
    icon: Clapperboard,
    text: 'Venues with high occupancy, large volumes and extended operating hours that place real demands on building services.',
    needs: ['Ventilation for high-occupancy spaces', 'Detection and alarm coverage for large areas', 'Planned maintenance around operating hours'],
  },
  {
    slug: 'offices-commercial',
    title: 'Offices & Commercial Premises',
    icon: Briefcase,
    text: 'Workplaces where comfort, safety and minimal disruption during works and maintenance are priorities.',
    needs: ['HVAC zoning for open-plan and cabins', 'Fire alarm and detection for office floors', 'MEP coordination for interior fit-outs'],
  },
  {
    slug: 'facilities-maintenance',
    title: 'Facilities & Maintenance',
    icon: Settings2,
    text: 'Facility teams responsible for keeping installed HVAC and fire-safety systems working reliably over time.',
    needs: ['Preventive maintenance and AMC', 'Fault diagnosis and troubleshooting', 'Service reporting for facility records'],
  },
];

export const strengths = [
  {
    icon: Layers,
    title: 'Integrated Technical Capabilities',
    text: 'HVAC, fire fighting, fire alarm, MEP coordination, civil works and fit-out support from one team, reducing hand-offs between contractors.',
  },
  {
    icon: ListChecks,
    title: 'Requirement-Based Planning',
    text: 'Work is planned around the site, the drawings and what the client actually needs — not a fixed package.',
  },
  {
    icon: Network,
    title: 'Coordination Across Building Systems',
    text: 'Attention to where services meet: ceiling voids, shafts, plant areas and the interfaces between trades.',
  },
  {
    icon: FileText,
    title: 'Clear Project Scope',
    text: 'Scope, responsibilities and interfaces agreed up front, so expectations are clear on both sides.',
  },
  {
    icon: PackageCheck,
    title: 'Execution and Handover Support',
    text: 'Support through installation, testing, snag closure and the records needed at handover.',
  },
  {
    icon: CalendarClock,
    title: 'Maintenance-Focused Thinking',
    text: 'Installations planned with access and serviceability in mind, so systems are easier to maintain later.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Understand',
    text: 'Review client requirements, drawings, site conditions, and project scope.',
  },
  {
    step: '02',
    title: 'Coordinate',
    text: 'Align relevant technical interfaces across HVAC, fire fighting, fire alarm, MEP, civil works, and interiors.',
  },
  {
    step: '03',
    title: 'Execute & Inspect',
    text: 'Support site execution, inspections, and testing relevant to the agreed scope.',
  },
  {
    step: '04',
    title: 'Document & Maintain',
    text: 'Support handover records, snag closure, maintenance schedules, and service reporting.',
  },
];

// Capability-based project categories. These describe the kinds of work we
// support — they are not claims of specific completed projects.
export const projectCapabilities = [
  {
    title: 'Retail Store Fit-Out Services',
    environment: 'Retail & Fashion',
    services: ['HVAC', 'Sprinklers', 'Fire alarm', 'MEP coordination'],
    text: 'Building-services coordination for retail interiors, including tie-ins to mall or building systems and documentation for handover.',
  },
  {
    title: 'Restaurant & Kitchen Services',
    environment: 'Food & Beverage',
    services: ['Ventilation', 'HVAC', 'Fire protection'],
    text: 'Kitchen exhaust, fresh air and HVAC alongside fire protection for dining and kitchen areas.',
  },
  {
    title: 'Fire Protection Networks',
    environment: 'Malls & Commercial Buildings',
    services: ['Hydrants', 'Hose reels', 'Sprinklers', 'Fire pumps'],
    text: 'Water-based fire protection systems including pump-room piping, risers and distribution networks.',
  },
  {
    title: 'Fire Alarm Installation & Testing',
    environment: 'Commercial premises',
    services: ['Addressable / conventional', 'Panels', 'Detectors', 'Testing'],
    text: 'Detection and alarm systems installed against agreed layouts, with testing and commissioning support.',
  },
  {
    title: 'Office & Commercial Interiors',
    environment: 'Offices & Commercial Premises',
    services: ['HVAC', 'MEP coordination', 'Civil works'],
    text: 'Coordinated services for workplace fit-outs, including associated openings, supports and making-good.',
  },
  {
    title: 'Maintenance & AMC Programmes',
    environment: 'Facilities & Maintenance',
    services: ['Preventive maintenance', 'Inspections', 'Service reports'],
    text: 'Planned maintenance for installed HVAC and fire-safety systems with documented service visits.',
  },
];

export const faqs = [
  {
    q: 'What services does United Sales Corporation provide?',
    a: 'We support HVAC systems, fire fighting systems, fire alarm and detection, MEP drawings and coordination, associated civil works, interiors and retail fit-outs, maintenance and AMC, fire-safety consultation, and project execution and handover. Each project is scoped to the client’s actual requirement.',
  },
  {
    q: 'Can you help with HVAC requirements for a commercial space?',
    a: 'Yes. We support HVAC installation and coordination, equipment and ducting interfaces, ventilation, inspections, troubleshooting and planned maintenance. Sharing your layout, the type of space and any existing equipment details helps us understand the requirement.',
  },
  {
    q: 'Do you work on both fire-fighting and fire-alarm systems?',
    a: 'Yes. On the fire-fighting side we support hydrant and hose-reel networks, sprinkler systems, fire pumps, piping and valves. On the fire-alarm side we support conventional and addressable systems, panels, detectors, manual call points, hooters, strobes, interface modules, and testing and commissioning support.',
  },
  {
    q: 'Do you support retail stores, restaurants and other commercial fit-outs?',
    a: 'Yes. We provide technical coordination for retail stores, showrooms, restaurants and commercial interiors — aligning HVAC, fire-safety and MEP services with the interior design and, where applicable, with the requirements of the mall or building.',
  },
  {
    q: 'Do you offer maintenance and Annual Maintenance Contracts (AMC)?',
    a: 'Yes. We support preventive maintenance, routine inspections, fault diagnosis, troubleshooting and service reporting. The systems covered, visit frequency and reporting format are agreed with each client.',
  },
  {
    q: 'How do I request a quotation?',
    a: 'Use the enquiry form on this website, email us, or call either of our phone numbers. Quotations are prepared after we understand the scope, drawings and site conditions, so the more detail you share, the more accurate the response.',
  },
  {
    q: 'What information should I include with a project enquiry?',
    a: 'Helpful details include the site location, type of premises, services required, drawings or layouts if available, approximate areas or equipment quantities, any landlord or building guidelines, and your expected timing.',
  },
  {
    q: 'Can one team handle multiple engineering requirements on the same project?',
    a: 'Yes. Our capabilities span HVAC, fire fighting, fire alarm, MEP coordination, civil works and fit-out support, so multiple requirements can be discussed together and coordinated within one agreed scope.',
  },
];
