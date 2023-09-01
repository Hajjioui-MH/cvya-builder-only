import React from 'react'
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';

const styles = {
    body: {
        minWidth: '700px',
        maxWidth: '850px',
        flex: 1.2,
        height: 'fit-content',
        minHeight: '900px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: '#4f4f4f',
        lineHeight: '1.5',
        fontWeight: '400',
        fontSize: '0.8rem',
        webkitFontSmoothing: 'antialiased',
        paddingLeft: 22
    },
    header: {
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        paddingRight: 22,
    },
    header2: {
        paddingTop: 24,
        paddingBottom: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        paddingRight: 22,
    },
    borderLine: {
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
        borderColor: 'rgb(226, 226, 226)',
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid'
    },
    title: {
        fontSize: '2rem',
        color: '#54B689',
        fontWeight: '900',
        letterSpacing: '0.3rem',
        textTransform: 'uppercase'
    },
    resumeTagline: {
        fontSize: '1rem',
        fontWeight: '300'
    },
    paragraph: {
        fontSize: 12,
        margin: 0,
    },
    links: {
        color: '#4f4f4f',
        fontSize: 12,
        marginTop: 14
    },
    h3: {
        fontSize: '1rem',
        letterSpacing: '0.1rem',
        color: '#54B689',
        paddingLeft: '1rem',
        borderLeftWidth: '3px',
        borderLeftStyle: 'solid',
        borderLeftColor: '#54B689',
    },
    itemTitle: {
        fontSize: '.8rem',
        color: '#292929',
        fontWeight: 'bold'
    },
    itemMeta: { fontSize: '.7rem', color: 'rgba(41,41,41,0.75' },
    roundedImg: {
        borderRadius: '50%',
        marginRight: '3rem',
        objectFit: 'cover'
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        // paddingRight: 22,
    },
    rightSection: {
        width: '30%'
    },
    leftSection: {
        width: '65%'
    },
    VLine: {
        minHeight: 200,
        borderColor: 'rgb(226, 226, 226)',
        borderStyle: 'solid',
        borderWidth: '1px',
    },
    article: { marginBottom: '30px', marginTop: '30px' },
    dFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', marginTop: '1.2rem' }
}

function Template4({ userData, resumeRef }) {
    const VerticalLine = () => <div style={styles.VLine}></div>
    const Point = () => <span style={{ display: 'inline-block', height: 5, width: 5, borderRadius: '50%', backgroundColor: '#4F4F52', marginRight: 6, marginLeft: 6 }}></span>

    return (
        <div ref={resumeRef} style={styles.body}>
            <header style={{ ...styles.header, flexWrap: 'wrap' }}>
                <div>
                    <h1 style={styles.title}>{userData.title}</h1>
                    <div style={styles.resumeTagline}>{userData.post_title}</div>
                </div>
                <div style={styles.links}>
                    {!!userData.email && <div style={styles.mr15}> <EmailIcon sx={{ fontSize: 12, marginRight: '4px' }} /> {userData.email}</div>}
                    {!!userData.phone && <div style={styles.mr15}><PhoneIcon sx={{ fontSize: 12, marginRight: '4px' }} /> {userData.phone}</div>}
                    {!!userData.adress && <div style={styles.mr15}><PlaceIcon sx={{ fontSize: 12, marginRight: '4px' }} />{userData.adress}</div>}
                </div>
            </header>
            <header style={{ ...styles.header2, ...styles.borderLine }}>
                <div>
                    {!!userData.profile_image_source && <Image style={styles.roundedImg} src={userData.profile_image_source} alt='profile image' width={100} height={100} />}
                </div>
                <div>
                    <div>
                        {userData.summary}
                    </div>
                </div>
            </header>
            <div style={styles.flexContainer}>
                <section style={styles.leftSection}>
                    <article>
                        <h3 style={styles.h3}>Work Experiences</h3>
                        {
                            userData.experience.map((exp, index) => (
                                <div key={index}>
                                    <div style={styles.dFlex}>
                                        <h4 style={styles.itemTitle}>{exp.title}</h4>
                                        <div style={styles.itemMeta}>{`${exp.company_name} | ${exp.start_date} - ${exp.end_date}`}</div>
                                    </div>
                                    <div>
                                        {exp.description}
                                    </div>
                                    <div style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                        {
                                            !!exp.tasks.length && exp.tasks.filter(task => task !== "").map((task, index) => (
                                                <div key={index} style={{ display: 'flex', alignItems: 'baseline' }}>
                                                    <Point />
                                                    <div>{task}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </article>

                    <article style={styles.article}>
                        <h3 style={styles.h3}>Projects</h3>
                        {
                            userData.projects.map((prj, index) => (
                                <div key={index}>
                                    <div style={styles.dFlex}>
                                        <h4 style={styles.itemTitle}>{prj.title}</h4>
                                        <div style={styles.itemMeta}>{prj.type}</div>
                                    </div>
                                    <div>
                                        {prj.description}
                                    </div>
                                </div>
                            ))
                        }
                    </article>

                </section>

                <VerticalLine />

                <section style={styles.rightSection}>
                    <article>
                        <h3 style={styles.h3}>SKILLS</h3>
                        <div style={styles.dFlex}>
                            <h4 style={styles.itemTitle}>Technical</h4>
                        </div>
                        {userData.hardSkills.map((skill, index) => (
                            <div key={index}>{skill.name}</div>
                        ))}
                        <div style={styles.dFlex}>
                            <h4 style={styles.itemTitle}>Professional</h4>
                        </div>
                        {userData.softSkills.map((skill, index) => (
                            <div key={index}>{skill.name}</div>
                        ))}
                    </article>
                    <article style={styles.article}>
                        <h3 style={styles.h3}>EDUCATION</h3>
                        {
                            userData.education.map((ed, index) => (
                                <div key={index} style={{ marginTop: '1.2rem' }}>
                                    <div>{ed.title}</div>
                                    <div>{ed.etablissement}</div>
                                    <div>{ed.start_date} - {ed.end_date}</div>
                                </div>
                            ))
                        }
                    </article>
                    <article style={styles.article}>
                        <h3 style={styles.h3}>AWARDS</h3>
                        {userData.awards.map((award, index) => (
                            <div key={index} style={{ marginTop: '1.2rem' }}>
                                <div>{award.name}</div>
                                <div>{award.source}</div>
                            </div>
                        ))}
                    </article>
                    <article style={styles.article}>
                        <h3 style={styles.h3}>LANGUAGES</h3>
                        <div style={{ marginTop: '1.2rem' }}>
                            {userData.languages.map((lg, index) => (
                                <div key={index}>{lg.name}</div>
                            ))}
                        </div>
                    </article>
                    <article style={styles.article}>
                        <h3 style={styles.h3}>INTERESTS</h3>
                        <div style={{ marginTop: '1.2rem' }}>
                            {userData.interests.map((int, index) => (
                                <div key={index}>{int.name}</div>
                            ))}
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Template4