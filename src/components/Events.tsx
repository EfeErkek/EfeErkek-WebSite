import '../styles/components/Events.css';

const Events = () => {
  const events = [
    {
      date: 'April 2026',
      title: 'IEEE 27th Aegean Regional Meeting',
      description: 'Successfully organized and hosted the 27th Aegean Regional Meeting at Yaşar University, coordinating IEEE student branches from all across the region.',
      image: '/event-ege.jpg'
    },
    {
      date: 'February 2026',
      title: "IEEE Summit'26",
      description: "Led the organization of Summit'26, a flagship event featuring industry leaders and tech-driven networking opportunities.",
      image: '/event-summit.jpg'
    },
    {
      date: 'March 2025',
      title: "IEEE DevSummit'25",
      description: "Directed the DevSummit'25, focusing on technical development, software workshops, and connecting student developers with the industry.",
      image: '/event-devsummit.jpg'
    }
  ];

  return (
    <section id="events" className="events-section">
      <h2 className="section-title">Professional Events & Leadership</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-date">{event.date}</div>
            <div className="event-card">
              <div className="event-image-container">
                <img src={event.image} alt={event.title} className="event-img" />
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="more-events">...and many more technical events and workshops organized under IEEE leadership.</p>
    </section>
  );
};

export default Events;
