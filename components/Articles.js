import React from 'react'
import { Link } from 'react-scroll'

function Articles({ scrollTo = "cvya", bntText = "Tester votre cv gratuitement" }) {
    return (
        <div className='articles_container'>
            <h2>Derniers conseils de recherche d'emploi</h2>
            <div className='articles'>
                <article>
                    <div className='img_holder'>
                        <a href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>
                            <img
                                src='/images/bidjobs-article-img.png'
                            />
                        </a>
                    </div>
                    <div className='content_holder'>
                        <div>
                            <a href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>
                                <h3>Vous Cherchez Un Emploi, Vous Devez Connaitre C’est Quoi Un ATS !</h3>
                            </a>
                            <p>
                                Le recrutement est une tâche très compliquée, parce que l’entreprise investit un grand budget pour...
                            </p>
                        </div>
                        <a className='read_more' href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>Lire la suite</a>
                    </div>
                </article>

                <article>
                    <div className='img_holder'>
                        <a href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>
                            <img
                                src='/images/article-image-bidjobs-2.png'
                            />
                        </a>
                    </div>
                    <div className='content_holder'>
                        <div>
                            <a href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>
                                <h3>Les Tops 10 Erreurs À Éviter Pour Réussir L’entretien D’embauche !</h3>
                            </a>
                            <p>
                                Malgré le niveau intellectuel des candidats on trouve encore des fautes catastrophiques au niveau des CV professionnels, cela est dû...
                            </p>
                        </div>
                        <a className='read_more' href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>Lire la suite</a>
                    </div>
                </article>

                <article>
                    <div className='img_holder'>
                        <a href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>
                            <img
                                src='/images/article-image-bidjobs-3.png'
                            />
                        </a>
                    </div>
                    <div className='content_holder'>
                        <div>
                            <a href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>
                                <h3>6 Conseils Pour Créer Un CV Professionnel</h3>
                            </a>
                            <p>
                                La majorité des jeunes diplômées et les chômeurs en général ont des lacunes on ce qui concerne comment ATS fonctionne et...
                            </p>
                        </div>
                        <a className='read_more' href='https://bidjobs.ma/vous-cherchez-un-emploi-vous-devez-connaitre-cest-quoi-un-ats/'>Lire la suite</a>
                    </div>
                </article>

            </div>

            <Link
                style={{ marginLeft: "5%" }}
                className='start_now btn2'
                activeClass="active" to={scrollTo} spy={true} smooth={true} offset={50} duration={500}
            >
                {bntText}
            </Link>
        </div>
    )
}

export default Articles