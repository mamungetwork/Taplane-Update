class Carousel {

    carousel = $('#carousel')
    categories = $('.categories')
    slick = null

    slides = [
        {
            title: 'Flutter',
            image: 'Flutter',
            category: 'mobile'
        },
        {
            title: 'Java',
            image: 'java',
            category: 'mobile'
        },
        {
            title: 'Kotlin',
            image: 'kotnil',
            category: 'mobile'
        },
        {
            title: 'Swift',
            image: 'swift',
            category: 'mobile'
        },
        {
            title: 'Unity',
            image: 'unity',
            category: 'mobile'
        },
        {
            title: 'C#',
            image: 'csharp',
            category: 'mobile'
        },
        {
            title: 'React Native',
            image: 'react-native',
            category: 'mobile'
        },
        {
            title: 'JavaScript',
            image: 'javaScript',
            category: 'web'
        },
        {
            title: 'TypeScript',
            image: 'TypeScript',
            category: 'web'
        },
        {
            title: 'React',
            image: 'react-native',
            category: 'web'
        },
        {
            title: 'Angular',
            image: 'Angular',
            category: 'web'
        },
        {
            title: 'Vue',
            image: 'Vue',
            category: 'web'
        },
        {
            title: 'Next.js',
            image: 'Next',
            category: 'web'
        },
        {
            title: 'CSS3',
            image: 'CSS',
            category: 'web'
        },
        {
            title: 'HTML5',
            image: 'HTML',
            category: 'web'
        },
        {
            title: 'Sass',
            image: 'Saas',
            category: 'web'
        },
        {
            title: 'Leaflet',
            image: 'Leaflet',
            category: 'web'
        },
        {
            title: 'Node.js',
            image: 'Node',
            category: 'web'
        },
        {
            title: 'Express.js',
            image: 'Express',
            category: 'web'
        },
        {
            title: 'PHP',
            image: 'php',
            category: 'web'
        },
        {
            title: 'Laravel',
            image: 'Laravel',
            category: 'web'
        },
        {
            title: 'Python',
            image: 'Python',
            category: 'web'
        },
        {
            title: 'Django',
            image: 'Django',
            category: 'web'
        },
        {
            title: 'Java',
            image: 'java',
            category: 'backend'
        },
        {
            title: 'Spring',
            image: 'Spring',
            category: 'backend'
        },
        {
            title: '.NET',
            image: 'Spring',
            category: 'backend'
        },
        {
            title: 'C++',
            image: 'C++',
            category: 'backend'
        },
        {
            title: 'Martin',
            image: 'Martin',
            category: 'backend'
        },
        {
            title: 'AWS',
            image: 'AWS',
            category: 'cloud'
        },
        {
            title: 'Azure',
            image: 'Azure',
            category: 'cloud'
        },
        {
            title: 'GCP',
            image: 'GCP',
            category: 'cloud'
        },
        {
            title: 'Docker Swarm',
            image: 'Docker',
            category: 'cloud'
        },
        {
            title: 'Apache Kafka',
            image: 'Kafka',
            category: 'cloud'
        },
        {
            title: 'Apache Spark',
            image: 'Spark',
            category: 'cloud'
        },
        {
            title: 'Apache Flink',
            image: 'Flink',
            category: 'cloud'
        },
        {
            title: 'Apache Hadoop',
            image: 'Hadoop',
            category: 'cloud'
        },
        {
            title: 'Apache Livy',
            image: 'Livy',
            category: 'cloud'
        },
        {
            title: 'Delta Lake',
            image: 'Delta-Lake',
            category: 'cloud'
        },
        {
            title: 'Jenkins',
            image: 'Jenkins',
            category: 'cloud'
        },
        {
            title: 'MySQL',
            image: 'MySQL',
            category: 'database'
        },
        {
            title: 'PostgreSQL',
            image: 'PostgreSQL',
            category: 'database'
        },
        {
            title: 'Oracle',
            image: 'Oracle',
            category: 'database'
        },
        {
            title: 'SQLite',
            image: 'SQLite',
            category: 'database'
        },
        {
            title: 'MongoDB',
            image: 'MongoDB',
            category: 'database'
        },
        {
            title: 'Cassandra',
            image: 'Cassandra',
            category: 'database'
        },
        {
            title: 'TimescaleDB',
            image: 'TimescaleDB',
            category: 'database'
        },
        {
            title: 'Supabase',
            image: 'Supabase',
            category: 'database'
        },
        {
            title: 'Firebase',
            image: 'Firebase',
            category: 'database'
        },
        {
            title: 'Redis',
            image: 'Redis',
            category: 'database'
        }
    ]

    constructor () {
        this.renderSlides()
        this.initCarousel()
    }

    initCarousel () {
        this.carousel.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 1500,
            cssEase: 'linear'
        })

        this.carousel.on('afterChange', () => {
            const slides = $('.slick-slide.slick-active')

            slides.each((i, slide) => {
                if (i === 2) {
                    const category = $(slide).data('category')
                    this.setActiveCategory(category)
                }
            })
        })

        this.initCategoriesNavigation()
    }

    initCategoriesNavigation () {
        this.categories.find('.category').each((i, categoryEl) => {
            $(categoryEl).on('click', () => {
                const category = $(categoryEl).data('category')
                const slides = this.carousel.find(`.slick-slide:not(.slick-cloned)`)
                slides.each((i, slideEl) => {
                    const slide = $(slideEl)
                    if (slide.data('category') === category) {
                        const index = slide.data('slickIndex')
                        this.carousel.slick('slickGoTo', index > 2 ? (index - 2) : index)
                        this.setActiveCategory(category)
                        return false
                    }
                })
            })
        })
    }

    setActiveCategory (category) {
        const categoryEl = this.categories.find(`.category.${category}`)
        if (categoryEl) {
            this.categories.find('.category').removeClass('active')
            categoryEl.addClass('active')
        }
    }

    renderSlides () {
        this.slides.forEach((slide) => {
            this.carousel.append(this.getSlideHtml(slide))
        })
    }

    getSlideHtml (slide) {
        return `
            <div class="slide" data-category="${ slide.category }">
                <img src="/images/client-logo/${ slide.category }/${ slide.image }-01.svg" class="primary" alt="${ slide.title }">
                <img src="/images/client-logo/${ slide.category }/${ slide.image }-02.svg" class="secondary" alt="${ slide.title }">
                <span class="title">${ slide.title }</span>
            </div>
        `
    }

}


$(document).ready(() => new Carousel())
