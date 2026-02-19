import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import logoImg from './assets/logo ava.png';
import ascenceur1 from './assets/Ascenceur1.webp';
import ascenceur2 from './assets/Ascenceur2.jpg';
import ascenceur3 from './assets/Ascenceur3.webp';
import officeImg from './assets/office.png';
import monnaie1 from './assets/Monnaie1.png';
import monnaie2 from './assets/Monnaie2.png';
import monnaie3 from './assets/Monnaie3.png';
import hectolitre1 from './assets/hectolitre1.png';
import hectolitre2 from './assets/hectolitre2.png';
import hectolitre3 from './assets/hectolitre3.png';
import vanthiel1 from './assets/vanthiel1.png';
import vanthiel2 from './assets/vanthiel2.png';
import vanthiel3 from './assets/vanthiel3.png';
import couronne1 from './assets/couronne1.png';
import couronne2 from './assets/couronne2.png';
import couronne3 from './assets/couronne3.png';
import elevator1 from './assets/elevator-1.webp';
import elevator2 from './assets/elevator-2.webp';
import elevator3 from './assets/elevator-3.webp';
import elephant1 from './assets/elephant-1.png';
import elephant2 from './assets/elephant-2.png';
import elephant3 from './assets/elephant-3.png';
import porteVoix1 from './assets/porte voix 1.png';
import porteVoix2 from './assets/porte voix 2.png';
import porteVoix3 from './assets/Porte voix 3.png';
import kasimir1 from './assets/kasimir 1.png';
import kasimir2 from './assets/Kasimir 2.png';
import kasimir3 from './assets/kasimir 3.png';
import ear1 from './assets/ear-1.jpg';
import ear2 from './assets/ear-2.png';
import ear3 from './assets/ear-3.png';
import laCambre1 from './assets/la cambre-1.png';
import commisariat1 from './assets/Commisariat1.png';
import commisariat2 from './assets/commisariat2.png';
import commisariat3 from './assets/commisariat3.png';

// ============= DATA =============
const projects = [
  {
    id: "1",
    titre: "Le théâtre royal de la Monnaie",
    categorie: "architecture",
    imageVignette: monnaie1,
    imageHero: monnaie1,
    images: [
      monnaie1,
      monnaie2,
      monnaie3
    ],
    descriptionLongue: "Maître d'ouvrage: Ministère des Travaux Publics\nAssociation momentanée: URBAT-A2RC\nAuteurs de projet: Brigitte D'Helft, Marc Libois, Patrice Neirinck, Michel Verliefden\nBET: A2RC, NMSAGried & Partners\nBudget: 27 888 021,54 Eur\nColoriste: Cherton, Marie Dominique\n\nRestructuration du Théâtre Royal de la Monnaie comprenant la rénovation et l'extension du bâtiment.",
    slug: "maison-l",
    date: "1983-1986",
    lieu: "Bruxelles"
  },
  {
    id: "2",
    titre: "Ascenseur des Marolles",
    categorie: "espace-public",
    imageVignette: elevator1,
    imageHero: elevator1,
    images: [
      elevator1,
      elevator2,
      elevator3
    ],
    descriptionLongue: "Maître d'ouvrage: Ministère des Communications et Infrastructures\nArchitectes: Patrice Neirinck, Fred Smeets, Raphaël De Meerleer, Isabelle Corten\nColoriste: Marie-Dominique Cherton\nBudget: 991 574,10 Eur\n\nRéalisation d’une passerelle et d’un ascenseur doté d’un belvédère reliant le haut et le bas de la ville, depuis la place Poolaert jusqu’à la place de l’Epée dans les Marolles.",
    slug: "place-republique",
    date: "2002",
    lieu: "Bruxelles"
  },
  {
    id: "3",
    titre: "Pasionaria - Porte-voix",
    categorie: "art",
    imageVignette: porteVoix3,
    imageHero: porteVoix3,
    images: [
      porteVoix3,
      porteVoix1,
      porteVoix2
    ],
    descriptionLongue: "Maître d’ouvrage: Ville de Bruxelles\nAuteur de projet: Emilio López-Menchero, Patrice Neirinck\nDescription du projet: \nStade: Réalisé\nBudget: 92.132,65",
    slug: "installation-lumiere",
    date: "2006",
    lieu: "Bruxelles"
  },
  {
    id: "3b",
    titre: "Kasimir : Projections",
    categorie: "art",
    imageVignette: kasimir1,
    imageHero: kasimir1,
    images: [
      kasimir1,
      kasimir2,
      kasimir3
    ],
    descriptionLongue: "Artiste: Marin Kasimir\nArchitecte: Patrice Neirinck\n\nDescription du projet: Tel un triptyque, les trois sculptures de l’artiste Marin Kasimir ornent le parvis de la gare de Sint-Niklaas.",
    slug: "kasimir",
    date: "2004",
    lieu: "Sint Niklaas"
  },
  {
    id: "3c",
    titre: "The Whirling Ear",
    categorie: "art",
    imageVignette: ear1,
    imageHero: ear1,
    images: [
      ear1,
      ear2,
      ear3
    ],
    descriptionLongue: "Maître d’ouvrage: Ville de Bruxelles\nArtiste: Alexander Calder\nArchitecte: Patrice Neirinck\nCollaborateurs: Isabelle Corten, Benoît Errembault\nBudget: 545.365,75€\n\nConçue par Calder pour le pavillon américain de l’Expo 1958, The Whirling Ear était installée dans un bassin elliptique dont les jets d’eau faisaient tourner la partie supérieure.\nAprès l’exposition, l’œuvre est restée 10 ans dans le bassin sans entretien.\nSon implantation entre la place Royale, les musées et le Mont des Arts est un acte symbolique.",
    slug: "ear",
    date: "1997–2000",
    lieu: "Bruxelles"
  },
  {
    id: "4",
    titre: "La Cambre Architecture dans l'INR",
    categorie: "programmation",
    imageVignette: laCambre1,
    imageHero: laCambre1,
    images: [
      laCambre1
    ],
    descriptionLongue: "Maître d’ouvrage: Fonds des bâtiments scolaires\nActeur de projet: Patrice Neirinck, Francois Thiry, Frederic Smeets\nBudget prévisionnel: 5949444.59€\nSurface: 5000m²\n\nAvant projet de relocalisation de l'institut Supérieur d'architecture de la Communauté Francaise (ISAF-La Cambre Architecture) dans l'ancien batiment de l'institut National de Radioffusion (INR) construit en 1936 par Joseph Diongre, place Flagey Ixelles",
    slug: "bureaux-technopole",
    date: "2023",
    lieu: "Toulouse, France"
  },
  {
    id: "5",
    titre: "Immeubles de logements",
    categorie: "architecture",
    imageVignette: hectolitre1,
    imageHero: hectolitre1,
    images: [
      hectolitre1,
      hectolitre2,
      hectolitre3
    ],
    descriptionLongue: "Maître d'ouvrage: Bruxelloise de Rénovation\nMaître d'ouvrage délégué: Société de développement régional de Bruxelles\nArchitectes: Patrice Neirinck, Frédéric Vanhove\nBudget: 2 974 722,30 Eur\nSurface: 4800 m2\nImages: Agaajani Shahram",
    slug: "villa-moderne",
    date: "2002",
    lieu: "Rue de l'Hectolitre et de la Plume, Bruxelles"
  },
  {
    id: "5b",
    titre: "Maison Van Thiel",
    categorie: "architecture",
    imageVignette: vanthiel1,
    imageHero: vanthiel1,
    images: [
      vanthiel1,
      vanthiel2,
      vanthiel3
    ],
    descriptionLongue: "Commanditaire: M. Van Thiel\nArchitectes: Patrice Neirinck, Vincent Szpirer, Jean-Charles De Groote\nBudget: 247 893,52 Eur\nSurfaces: 300 m²\n\nRéalisation d'une maison unifamiliale à Uccle",
    slug: "van-thiel",
    date: "1998",
    lieu: "Bruxelles"
  },
  {
    id: "5c",
    titre: "Les Jardins de la Couronne",
    categorie: "architecture",
    imageVignette: couronne1,
    imageHero: couronne1,
    images: [
      couronne1,
      couronne2,
      couronne3
    ],
    descriptionLongue: "Maître d'ouvrage en association momentanée: BPI Batipont immobilier SA / Immomills L. De Waele Development SA\nArchitectes: Patrice Neirinck, Frederic Delarge, Jean-Charles De Groote, Frederic Van Hove, Jo Bitoun\nBudget: 15 741 238,82 Eur (+14 873 611,49 Eur)\nSurface: 23.000 m2 (+20.000m2)\n\nRéalisation de logements et de bureaux sur le site de l'ancien hôpital militaire, avenue de la Couronne, à Ixelles.",
    slug: "couronne",
    date: "2002",
    lieu: "Bruxelles"
  },
  {
    id: "5d",
    titre: "Commissariat de police",
    categorie: "architecture",
    imageVignette: commisariat3,
    imageHero: commisariat3,
    images: [
      commisariat3,
      commisariat1,
      commisariat2
    ],
    descriptionLongue: "Maître d'ouvrage: Ville de Bruxelles\nMaître d'ouvrage délégué: Société de développement régional de Bruxelles\nArchitectes: Patrice Neirinck, Frédéric Van Hove, Thierry Calcus\nColoriste: Marie-Dominique Cherton\nBudget: 1 412 993,09 Eur\nSurface: 1000 m²\n\nRéalisation d'un commissariat de police rue de l'Hectolitre, dans le quartier des Marolles à Bruxelles.",
    slug: "commisariat",
    date: "2000",
    lieu: "Bruxelles"
  },
  {
    id: "6",
    titre: "L’Eléphant de la Mémoire",
    categorie: "espace-public",
    imageVignette: elephant1,
    imageHero: elephant1,
    images: [
      elephant1,
      elephant2,
      elephant3
    ],
    descriptionLongue: "Maître d’ouvrage: Département du Nord\nAuteurs: Patrice Nierinck\nAssociation momentané: M.D. Cherton – JC Huet\navec la participation d’ABCD et de OTH-LIne.\nBudget: 10 411 152,80 Eur\n\nReconstitution de l’Éléphant de la Bastille pour le bicentenaire de la Révolution Française.\nCette animation itinérante et pédagogique circula dès le mois de juin 1989 dans les villes du nord de la France, de Paris et de Bruxelles.",
    slug: "jardin-partage",
    date: "1989",
    lieu: "France"
  }
];

const atelierData = {
  imageAtelier: officeImg,
  descriptionAtelier: `## Atelier d'Architecture

Texte placeholder pour la section atelier. Vous pouvez modifier ce contenu selon vos besoins.`
};

// ============= ROUTER =============
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    const pathWithoutHash = path.split('#')[0];
    const hash = path.split('#')[1];
    setCurrentPath(pathWithoutHash);
    
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return children({ currentPath, navigate });
};

// ============= HERO CAROUSEL =============
const heroImages = [
  ascenceur1,
  ascenceur2,
  ascenceur3
];

const logoUrl = logoImg; // Your logo

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-section">
      {/* Logo at top left */}
      <img 
        src={logoUrl} 
        alt="Logo" 
        style={{
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          width: '180px',
          height: 'auto',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      />
      
      {/* Simple full-screen image display */}
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <img
          src={heroImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.85) contrast(1.15) saturate(1.05)',
            transition: 'opacity 0.8s ease-in-out',
          }}
        />
      </div>

      {/* Caption */}
      <div style={{
        position: 'absolute',
        right: '2.5rem',
        bottom: '2.5rem',
        color: 'white',
        fontStyle: 'italic',
        fontSize: '1.1rem',
        textShadow: '0 2px 8px rgba(0,0,0,0.7)',
        zIndex: 12,
        letterSpacing: '0.01em',
        textAlign: 'right',
        fontFamily: "'Playfair Display', serif",
        fontWeight: 400,
      }}>
        Bruxelles, 2002<br/>Ascenseur des Marolles
      </div>
    </div>
  );
};

// ============= ATELIER SECTION =============
const AtelierSection = () => {
  return (
    <section className="atelier-section" id="atelier">
      <div className="container">
        <div className="atelier-grid">
          <div className="atelier-image">
            <img src={atelierData.imageAtelier} alt="Atelier" style={{ filter: 'grayscale(100%)' }} />
          </div>
          <div className="atelier-content">
            {atelierData.descriptionAtelier.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('##')) {
                return <h2 key={i} className="atelier-title">{paragraph.replace('## ', '')}</h2>;
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============= PORTFOLIO SECTION =============
const Portfolio = ({ navigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
      setActiveFilter(category);
    }
  }, [window.location.search]);

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'espace-public', label: 'Espace Public' },
    { id: 'art', label: 'Art' },
    { id: 'programmation', label: 'Programmation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categorie === activeFilter);

  const handleFilterChange = (filterId) => {
    if (filterId === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filterId);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title section-title--filters">Projets</h2>
        
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isAnimating ? 'animating' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => navigate(`/projet/${project.slug}`)}
            >
              <div
                className={`project-image-wrapper ${project.slug === 'ear' ? 'project-image-wrapper--contain' : ''}`}
                style={project.slug === 'ear' ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : undefined}
              >
                <img 
                  src={project.imageVignette} 
                  alt={project.titre}
                  loading="lazy"
                  className={`project-image ${project.slug === 'jardin-partage' ? 'project-image--blue' : ''} ${project.slug === 'ear' ? 'project-image--natural' : ''}`}
                  style={
                    project.slug === 'ear'
                      ? { width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }
                      : undefined
                  }
                />
                <div className="project-overlay">
                  <div className="project-ribbon">
                    <h3 className="project-title">
                      {project.titre}
                    </h3>
                    <span className="project-category">{project.categorie.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============= PROJECT DETAIL =============
const ProjectDetail = ({ slug, navigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (!isAutoPlay || !project || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAutoPlay, project]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
  };

  if (!project) {
    return (
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>Projet non trouvé</h2>
        <button className="back-button" onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    );
  }

  const isLastImage = currentImageIndex === project.images.length - 1;
  const imageStyle = {
    ...(project.slug === 'van-thiel' && isLastImage
      ? { objectFit: 'contain', backgroundColor: '#ffffff' }
      : {}),
    ...(project.slug === 'jardin-partage' && currentImageIndex === 1
      ? { objectPosition: '70% center' }
      : {}),
    ...(project.slug === 'jardin-partage' && currentImageIndex === 2
      ? { objectFit: 'contain', backgroundColor: '#ffffff' }
      : {}),
    ...(project.slug === 'installation-lumiere' && currentImageIndex === 1
      ? { objectPosition: '40% center' }
      : {}),
    ...(project.slug === 'installation-lumiere' && currentImageIndex === 2
      ? { objectPosition: '40% center' }
      : {})
  };

  return (
    <div className="project-detail">
      <button 
        className="category-tag floating category-button" 
        onClick={() => navigate(`/?category=${project.categorie}#portfolio`)}
        style={project.slug === 'ear' ? { background: 'rgba(80, 80, 80, 0.5)' } : (isLastImage ? { background: 'rgba(80, 80, 80, 0.5)' } : {})}
      >
        <span>{project.categorie.replace('-', ' ')}</span>
      </button>
      <div className="project-detail-layout">
        <div className="project-detail-left">
          <button 
            className="back-button floating" 
            onClick={() => navigate('/')}
            style={project.slug === 'ear' ? { background: 'rgba(80, 80, 80, 0.5)' } : (isLastImage ? { background: 'rgba(80, 80, 80, 0.5)' } : {})}
          >        <span>Accueil</span>
          </button>
          <img
            className="project-detail-image"
            src={project.images[currentImageIndex]}
            alt={`${project.titre} - Image ${currentImageIndex + 1}`}
            style={imageStyle}
          />
        </div>
        <div className="project-detail-right">
          <div className={`project-detail-card ${project.slug === 'ear' ? 'project-detail-card--ear-up' : ''} ${project.slug === 'bureaux-technopole' ? 'project-detail-card--laca' : ''}`}>
            <h1 className={`project-detail-title ${project.slug === 'commisariat' ? 'project-detail-title--small' : ''} ${project.slug === 'installation-lumiere' ? 'project-detail-title--small-art' : ''} ${project.slug === 'kasimir' ? 'project-detail-title--small-kasimir' : ''} ${project.slug === 'ear' ? 'project-detail-title--small-ear' : ''} ${project.slug === 'bureaux-technopole' ? 'project-detail-title--small-laca' : ''}`}>
              {project.titre}
            </h1>
            <div className="project-info">
              {project.slug === 'commisariat' ? (
                <span>Bruxelles, 2000</span>
              ) : project.slug === 'installation-lumiere' ? (
                <span>Bruxelles, 2006</span>
              ) : project.slug === 'kasimir' ? (
                <span>Sint Niklaas, 2004</span>
              ) : project.slug === 'ear' ? (
                <span>Bruxelles, 1997–2000</span>
              ) : project.slug === 'place-republique' ? (
                <span>Bruxelles, 2002</span>
              ) : project.slug === 'jardin-partage' ? (
                <span>France, 1989</span>
              ) : (
                <>
                  <span>{project.date}</span>
                  <span>•</span>
                  <span>{project.lieu}</span>
                </>
              )}
            </div>

            <div className="project-description">
              <p>{project.descriptionLongue.split('\n').map((line, idx) => {
                const isLabel = [
                  'Maître d\'ouvrage:',
                  'Maître d’ouvrage:',
                  'Association momentanée:',
                  'Association momentané:',
                  'Auteurs de projet:',
                  'Auteur de projet:',
                  'Description du projet:',
                  'Stade:',
                  'Auteurs:',
                  'BET:',
                  'Budget:',
                  'Coloriste:',
                  'Collaborateurs:',
                  'Maître d\'ouvrage délégué:',
                  'Architectes:',
                  'Surface:',
                  'Images:',
                  'Commanditaire:',
                  'Surfaces:',
                  'Maître d\'ouvrage en association momentanée:',
                  'Artiste:',
                  'Architecte:',
                  'Acteur de projet:',
                  'Budget prévisionnel:',
                  'Execution:'
                ].some(label => line.trim().startsWith(label));
                if (line.trim() === '') {
                  return <div key={idx} style={{height: '0.5rem'}}></div>;
                }
                return (
                  <div key={idx} style={{display: 'flex', gap: '0.5rem', alignItems: 'flex-start'}}>
                    {isLabel ? (
                      <>
                        <span style={{color: '#555', fontSize: '0.75em', marginTop: '0.3rem'}}>•</span>
                          <span>
                            <strong style={{color: '#1a1a1a', fontWeight: '600'}}>
                              {line.substring(0, line.indexOf(':') + 1)}
                            </strong>{' '}
                          <span style={{color: '#1a1a1a', fontWeight: '400', fontSize: '0.95em'}}>
                              {line.substring(line.indexOf(':') + 1).trim()}
                            </span>
                          </span>
                      </>
                    ) : (
                      <span style={project.slug === 'ear' ? { marginLeft: '1.3rem', fontSize: '0.98rem' } : { marginLeft: '1.3rem' }}>
                        {line}
                      </span>
                    )}
                  </div>
                );
              })}</p>
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="gallery-thumbnails">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={img} alt={`Miniature ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div> 
    </div>
  );
};

// ============= CONTACT SECTION =============
const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title section-title--filters">Contact</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Adresse Bureau</h3>
                <p className="contact-address">
                  2 rue du Magistrat
                  <br className="address-break" />
                  <span className="address-sep">, </span>
                  1050 Bruxelles, 9e étage
                </p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Adresse Courrier</h3>
                <p>Avenue Louise 251, Boite 8 1050 Bruxelles</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <a href="mailto:ava@skynet.be">ava@skynet.be</a>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Téléphone</h3>
                <a href="tel:+3225380442">+32 2 538 04 42</a>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              className="contact-map-embed"
              src="https://www.google.com/maps?q=2%20rue%20du%20Magistrat%2C%201050%20Bruxelles&output=embed"
              style={{ border: 0, width: '100%', height: '100%', minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              title="Localisation du studio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============= MAIN APP =============
export default function App() {
  return (
    <Router>
      {({ currentPath, navigate }) => {
        const pathWithoutQuery = currentPath.split('?')[0];
        const isHomePage = pathWithoutQuery === '/';
        const projectMatch = pathWithoutQuery.match(/^\/projet\/(.+)$/);
        const projectSlug = projectMatch ? projectMatch[1] : null;

        return (
          <div className="app">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Work+Sans:wght@300;400;500&display=swap');

              :root {
                --color-bg: #fafaf8;
                --color-text: #2a2a2a;
                --color-accent: #8b7355;
                --color-accent-light: #a68968;
                --color-border: #e0ddd8;
                --font-display: 'Cormorant Garamond', serif;
                --font-body: 'Work Sans', sans-serif;
                --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              }

              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              body {
                font-family: var(--font-body);
                background: var(--color-bg);
                color: var(--color-text);
                line-height: 1.6;
                -webkit-font-smoothing: antialiased;
              }

              .app {
                min-height: 100vh;
              }

              .container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem;
              }

              /* ===== HERO CAROUSEL ===== */
              .hero-section {
                height: 100vh;
                width: 100vw;
                position: relative;
                overflow: hidden;
                margin-bottom: 0;
              }

              .carousel-container {
                position: relative;
                width: 100vw;
                height: 100%;
              }

              .carousel-track {
                display: flex;
                height: 100%;
                transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
              }

              .carousel-slide {
                min-width: 100%;
                height: 100%;
                position: relative;
              }

              .carousel-slide img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: brightness(0.85);
              }

              .slide-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 4rem 2rem;
                background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
              }

              .slide-title {
                font-family: var(--font-display);
                font-size: clamp(2.5rem, 5vw, 4.5rem);
                font-weight: 300;
                color: white;
                max-width: 1400px;
                margin: 0 auto;
                letter-spacing: -0.02em;
              }

              .carousel-nav {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                border: none;
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: var(--transition);
                z-index: 10;
                color: white;
              }

              .carousel-nav:hover {
                background: rgba(255,255,255,0.15);
                transform: translateY(-50%) scale(1.05);
              }

              .carousel-prev { left: 2rem; }
              .carousel-next { right: 2rem; }

              .carousel-indicators {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                display: none;
                gap: 0.8rem;
                z-index: 10;
              }

              .indicator {
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: white;
                border: none;
                cursor: pointer;
                transition: var(--transition);
              }

              .indicator.active {
                background: white;
                transform: scale(1.2);
              }

              /* ===== ATELIER SECTION ===== */
              .atelier-section {
                padding: 6rem 0;
                background: white;
              }

              .atelier-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
                align-items: center;
              }

              .atelier-image img {
                width: 100%;
                height: 600px;
                object-fit: cover;
                filter: grayscale(0.3);
              }

              .atelier-content {
                padding: 2rem 0;
                text-align: center;
              }

              .atelier-title {
                font-family: var(--font-display);
                font-size: 3rem;
                font-weight: 300;
                margin-bottom: 2rem;
                color: #1e3a5f;
                letter-spacing: -0.02em;
              }

              .atelier-content p {
                font-family: 'Playfair Display', serif;
                font-size: 1.1rem;
                margin-bottom: 1.5rem;
                line-height: 1.8;
                font-weight: 300;
                color: #000;
              }

              /* ===== PORTFOLIO SECTION ===== */
              .portfolio-section {
                padding: 6rem 0;
                background: #fff;
              }

              .section-title {
                font-family: var(--font-display);
                font-size: 3.5rem;
                font-weight: 300;
                text-align: center;
                margin-bottom: 3rem;
                letter-spacing: -0.02em;
              }

              .section-title--filters {
                font-family: var(--font-display);
                font-size: 2.2rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: var(--color-text);
              }

              .filter-buttons {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                margin-bottom: 4rem;
                flex-wrap: wrap;
              }

              .filter-btn {
                background: none;
                border: 1px solid var(--color-border);
                padding: 0.8rem 2rem;
                font-family: var(--font-display);
                font-size: 0.95rem;
                font-weight: 400;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                cursor: pointer;
                transition: var(--transition);
                color: #000;
              }

              .filter-btn:hover {
                border-color: var(--color-accent);
                color: var(--color-accent);
              }

              .filter-btn.active {
                background: #1e3a5f;
                border-color: #1e3a5f;
                color: white;
              }

              .projects-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                gap: 2rem;
                opacity: 1;
                transition: opacity 0.3s;
              }

              .projects-grid.animating {
                opacity: 0;
              }

              .project-card {
                cursor: pointer;
                animation: fadeInUp 0.6s ease-out both;
              }

              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .project-image-wrapper {
                position: relative;
                overflow: hidden;
                aspect-ratio: 3/4;
              }

              .project-image-wrapper img {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                transition: var(--transition);
              }

              .project-image--blue {
                filter: brightness(0.9) sepia(0.1) saturate(1.2) hue-rotate(190deg);
              }

              .project-image--natural {
                width: auto !important;
                height: auto !important;
                max-width: 100% !important;
                max-height: 100% !important;
                object-fit: contain !important;
              }

              .project-image-wrapper--contain {
                background: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 16px;
                box-sizing: border-box;
              }

              .project-card:hover .project-image--contain {
                transform: none;
                filter: none;
              }

              .project-card:hover .project-image-wrapper img {
                transform: scale(1.08);
                filter: brightness(1.1);
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
              }

              .project-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 2rem;
                background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
                opacity: 0;
                transform: translateY(8px);
                transition: transform 0.2s ease;
              }

              .project-card:hover .project-overlay {
                opacity: 1;
                transform: translateY(0);
              }

              .project-ribbon {
                width: 100%;
                background: rgba(30, 58, 95, 0.25);
                padding: 0.75rem 1rem;
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
              }

              .project-title {
                font-family: var(--font-display);
                font-size: 1.4rem;
                font-weight: 300;
                color: white;
                margin-bottom: 0.5rem;
                display: block;
                width: 100%;
                max-width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }


              .project-category {
                font-size: 0.85rem;
                font-family: var(--font-display);
                color: rgba(255,255,255,0.7);
                text-transform: uppercase;
                letter-spacing: 0.1em;
              }

              /* ===== PROJECT DETAIL ===== */
              .project-detail {
                min-height: 100vh;
                position: relative;
              }

              .back-button {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                background: transparent;
                color: #fff;
                border: 1px solid rgba(255,255,255,0.35);
                padding: 0.7rem 1.2rem;
                font-family: var(--font-display);
                font-size: 0.95rem;
                cursor: pointer;
                transition: var(--transition);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                text-shadow: 0 2px 8px rgba(0,0,0,0.6);
              }

              .back-button:hover {
                border-color: rgba(255,255,255,0.65);
              }

              .back-button.floating {
                position: absolute;
                top: 2rem;
                right: 2rem;
                z-index: 100;
              }

              .category-tag {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0.7rem 1.2rem;
                background: transparent;
                color: #fff;
                font-size: 0.95rem;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                border: 1px solid rgba(255,255,255,0.35);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                text-shadow: 0 2px 8px rgba(0,0,0,0.6);
                font-family: var(--font-display);
                cursor: default;
              }

              .category-tag.floating {
                position: absolute;
                top: 2rem;
                left: 2rem;
                z-index: 100;
              }

              .project-detail-left .category-tag.floating {
                right: 2rem;
              }

              .category-button {
                cursor: pointer;
                gap: 0.5rem;
              }

              .category-button:hover {
                border-color: rgba(255,255,255,0.65);
              }

              .project-detail-layout {
                display: flex;
                min-height: 100vh;
                width: 100vw;
              }

              .project-detail-left {
                width: 50%;
                height: 100vh;
                padding: 0;
                position: relative;
              }

              .project-detail-right {
                width: 50%;
                padding: 4rem 0 4rem 4rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1.5rem;
              }

              .project-detail-card {
                width: 100%;
                max-width: 520px;
                margin-left: -5rem;
                background: #fff;
                border: 1px solid var(--color-border);
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.06);
              }

              .project-detail-card--ear-up {
                margin-top: -4rem;
              }

              .project-detail-card--laca {
                max-width: 680px;
                padding: 3rem;
              }

              .project-detail-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center 20%;
                display: block;
              }

              .project-detail-title {
                font-family: var(--font-display);
                font-size: 4rem;
                font-weight: 300;
                margin-bottom: 0.25rem;
                letter-spacing: -0.02em;
                text-align: left;
                width: 100%;
              }

              .project-detail-title--small {
                font-size: 3.2rem;
              }

              .project-detail-title--small-art {
                font-size: 3rem;
              }

              .project-detail-title--small-kasimir {
                font-size: 2.8rem;
              }

              .project-detail-title--small-ear {
                font-size: 2.6rem;
              }

              .project-detail-title--small-laca {
                font-size: 2.6rem;
              }

              .project-info {
                display: flex;
                gap: 1rem;
                font-size: 1.3rem;
                color: #666;
                font-family: var(--font-display);
                margin-bottom: 0.75rem;
              }

              .gallery-thumbnails {
                display: flex;
                gap: 1rem;
                overflow-x: auto;
                width: 100%;
                max-width: 520px;
                margin-left: -4.5rem;
                scrollbar-width: none;
                -ms-overflow-style: none;
              }

              .gallery-thumbnails::-webkit-scrollbar {
                display: none;
              }

              .thumbnail {
                border: none;
                padding: 0;
                cursor: pointer;
                opacity: 0.6;
                transition: var(--transition);
                flex-shrink: 0;
                background: transparent;
                outline: none;
                -webkit-tap-highlight-color: transparent;
              }

              .thumbnail:focus,
              .thumbnail:focus-visible {
                outline: none;
                box-shadow: none;
              }

              .thumbnail:active {
                outline: none;
                box-shadow: none;
              }

              .thumbnail:hover {
                opacity: 0.8;
              }

              .thumbnail.active {
                opacity: 1;
                outline: none;
                outline-offset: 0;
              }

              .thumbnail img {
                width: 170px;
                height: 165px;
                object-fit: cover;
                display: block;
                user-select: none;
                -webkit-user-drag: none;
              }

              .project-description {
                max-width: 700px;
                border-top: 1px solid #ddd;
                padding-top: 1.25rem;
                margin-top: 1.25rem;
              }

              .project-description p {
                font-family: var(--font-display);
                font-size: 1.15rem;
                line-height: 1.8;
                font-weight: 300;
                white-space: pre-wrap;
              }

              .project-description p strong {
                font-family: var(--font-display);
                font-weight: 600;
                font-size: 1.05rem;
              }

              /* ===== CONTACT SECTION ===== */
              .contact-section {
                padding: 6rem 0;
                background: white;
              }

              .contact-grid {
                display: grid;
                grid-template-columns: 1fr 1.5fr;
                gap: 4rem;
                margin-top: 4rem;
              }

              .contact-info {
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
              }

              .contact-item {
                display: flex;
                gap: 1.5rem;
                align-items: flex-start;
              }

              .contact-item svg {
                color: var(--color-accent);
                flex-shrink: 0;
                margin-top: 0.2rem;
              }

              .contact-item h3 {
                font-family: var(--font-display);
                font-size: 1.3rem;
                font-weight: 400;
                margin-bottom: 0.5rem;
              }

              .contact-item p,
              .contact-item a {
                color: #666;
                text-decoration: none;
                transition: var(--transition);
              }

              .contact-item a:hover {
                color: var(--color-accent);
              }

              .address-sep {
                display: none;
              }

              .contact-map {
                min-height: 500px;
                border: 1px solid var(--color-border);
              }

              .contact-map-embed {
                filter: grayscale(1) contrast(1.1) brightness(0.95);
                transition: filter 0.3s ease;
              }

              .contact-map-embed:hover {
                filter: none;
              }

              /* ===== RESPONSIVE ===== */
              @media (max-width: 1024px) {
                .atelier-grid,
                .contact-grid {
                  grid-template-columns: 1fr;
                  gap: 3rem;
                }

                .projects-grid {
                  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                }

                .project-detail-layout {
                  flex-direction: column;
                  width: 100%;
                  min-height: auto;
                }

                .project-detail-left {
                  width: 100%;
                  height: 60vh;
                }

                .project-detail-right {
                  width: 100%;
                  padding: 2.5rem 1.5rem;
                }

                .project-detail-card {
                  margin-left: 0;
                  max-width: 100%;
                }

                .gallery-thumbnails {
                  margin-left: 0;
                  max-width: 100%;
                }
              }

              @media (max-width: 768px) {
                .container {
                  padding: 0 1.5rem;
                }

                .hero-section {
                  height: 70vh;
                  margin-bottom: 0.25rem;
                }

                .slide-title {
                  font-size: 2rem;
                }

                .carousel-nav {
                  width: 50px;
                  height: 50px;
                }

                .carousel-prev { left: 1rem; }
                .carousel-next { right: 1rem; }

                .section-title {
                  font-size: 2.5rem;
                }

                .section-title--filters {
                  font-size: 1.6rem;
                  margin-bottom: 1.25rem;
                }

                .portfolio-section {
                  padding-bottom: 1.25rem;
                }

                .contact-section {
                  padding-top: 1.25rem;
                }

                .contact-grid {
                  margin-top: 1rem;
                }

                .contact-info {
                  gap: 1rem;
                }

                .address-break {
                  display: none;
                }

                .address-sep {
                  display: inline;
                }

                .contact-item h3 {
                  font-size: 0.95rem;
                  margin-bottom: 0.3rem;
                }

                .contact-item p,
                .contact-item a {
                  font-size: 0.88rem;
                }

                .contact-item {
                  gap: 0.75rem;
                }

                .contact-grid {
                  gap: 1rem;
                }

                .contact-content {
                  gap: 1rem;
                }

                .atelier-title,
                .project-detail-title {
                  font-size: 2rem;
                }

                .project-info {
                  font-size: 1.05rem;
                  flex-wrap: wrap;
                }

                .project-detail-card {
                  padding: 1.25rem;
                }

                .project-detail-card {
                  margin-left: -1.5rem;
                }

                .project-description {
                  max-width: 100%;
                  padding-top: 1.25rem;
                  margin-top: 1.25rem;
                }

                .project-description p {
                  font-size: 0.98rem;
                  line-height: 1.6;
                }

                .gallery-thumbnails {
                  gap: 0.75rem;
                }

                .thumbnail img {
                  width: 120px;
                  height: 115px;
                }

                .project-detail-left {
                  height: 50vh;
                }

                .project-detail .back-button.floating {
                  position: static;
                  margin: 0 0 0.5rem 0;
                  padding: 0.6rem 1rem;
                  font-size: 0.85rem;
                  width: 100%;
                  justify-content: center;
                }

                .project-detail .category-tag.floating {
                  position: static;
                  margin: 0 0 0.75rem 0;
                  padding: 0.6rem 1rem;
                  font-size: 0.85rem;
                  width: 100%;
                  justify-content: center;
                }

                .project-detail-right {
                  padding: 1.5rem 1rem;
                }

                .project-detail-card--ear-up {
                  margin-top: 0;
                }


                .projects-grid {
                  grid-template-columns: 1fr;
                  gap: 1.5rem;
                }

                .filter-buttons {
                  gap: 0.8rem;
                }

                .filter-btn {
                  padding: 0.6rem 1.2rem;
                  font-size: 0.85rem;
                }

                .back-button.floating {
                  position: static;
                  margin-bottom: 2rem;
                }

                .main-image img {
                  height: 50vh;
                }
              }
            `}</style>

            {isHomePage ? (
              <>
                <HeroCarousel />
                <Portfolio navigate={navigate} />
                <ContactSection />
              </>
            ) : projectSlug ? (
              <ProjectDetail slug={projectSlug} navigate={navigate} />
            ) : (
              <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h2>Page non trouvée</h2>
                <button className="back-button" onClick={() => navigate('/')}>
                  Retour à l'accueil
                </button>
              </div>
            )}
          </div>
        );
      }}
    </Router>
  );
}
