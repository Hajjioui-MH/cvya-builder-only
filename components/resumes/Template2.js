import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
// AppRight

const theme = createTheme({
    palette: {
        neutral: {
            main: 'rgb(48, 56, 70)',
            contrastText: '#fff',
        },
    },
});
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
    },
    header: {
        backgroundColor: 'rgb(48, 56, 70)',
        padding: 24
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    links: {
        display: 'flex',
        color: 'rgb(151, 155, 162)',
        fontSize: 12,
        marginTop: 14
    },
    mr15: {
        marginRight: 15,
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 24,
    },
    h2: {
        color: 'rgb(48, 56, 70)',
        fontSize: 14,
        marginBottom: 12
    },
    paragraph: {
        fontSize: 12,
        margin: 0,
    },
    paragraphBold: {
        fontSize: 12,
        fontWeight: 'bold',
        margin: 0
    },
    paragraphLight: {
        fontSize: 12,
        color: 'rgb(136, 136, 136)',
        margin: 0
    },
    HLine: {
        width: '95%',
        height: 0,
        borderColor: 'rgb(226, 226, 226)',
        borderStyle: 'solid',
        borderWidth: '1px',
        // marginRight: 'auto',
        // marginLeft: 'auto',
        marginTop: 24,
        marginBottom: 24
    },
    VLine: {
        minHeight: 200,
        borderColor: 'rgb(226, 226, 226)',
        borderStyle: 'solid',
        borderWidth: '1px',
    },
    breakLine6: {
        height: 6
    },
    rightSection: {
        width: '30%'
    },
    leftSection: {
        width: '65%'
    }
}
function Template2({ userData, resumeRef }) {
    const HorizontalLine = () => <div style={styles.HLine}></div>
    const Point = () => <span style={{ display: 'inline-block', height: 5, width: 5, borderRadius: '50%', backgroundColor: 'black', marginRight: 6, marginLeft: 6 }}></span>
    const BreakLine6 = () => <div style={styles.breakLine6}></div>
    const VerticalLine = () => <div style={styles.VLine}></div>

    return (
        <div ref={resumeRef} style={styles.body}>
            <section style={styles.header}>
                <h1 style={styles.title}>{userData.title}</h1>
                <div style={styles.links}>
                    {!!userData.email && <div style={styles.mr15}> <EmailIcon sx={{ fontSize: 12, marginRight: '4px' }} /> {userData.email}</div>}
                    {!!userData.phone && <div style={styles.mr15}><PhoneIcon sx={{ fontSize: 12, marginRight: '4px' }} /> {userData.phone}</div>}
                    {!!userData.adress && <div style={styles.mr15}><PlaceIcon sx={{ fontSize: 12, marginRight: '4px' }} />{userData.adress}</div>}
                    {(userData.nom || userData.prenom || userData.age) && <div style={styles.mr15}><PersonIcon sx={{ fontSize: 12, marginRight: '4px' }} />{`${userData.nom} ${userData.prenom} ${!!userData.age ? userData.age + ' ans' : ""}`}</div>}
                </div>
            </section >

            <section style={styles.container}>
                <section style={styles.leftSection}>
                    <article>
                        <h2 style={styles.h2}>Summary</h2>
                        <p style={styles.paragraph}>{userData.summary}</p>
                        <HorizontalLine />
                    </article>
                    <article>
                        <h2 style={styles.h2}>Work Experience</h2>
                        {
                            userData.experience.map((exp, index) => (
                                <div key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p style={styles.paragraphBold}>{exp.title}</p>
                                        <p style={styles.paragraph}>{exp.start_date} - {exp.end_date}</p>
                                    </div>
                                    <p style={styles.paragraphLight}>{exp.company_name}, {exp.city}</p>
                                    {
                                        !!exp.tasks.length && exp.tasks.filter(task => task !== "").map((task, index) => (
                                            <div key={index} style={{ display: 'flex', alignItems: 'baseline' }}>
                                                <Point />
                                                <p style={styles.paragraph}>{task}</p>
                                            </div>
                                        ))
                                    }
                                    <BreakLine6 />
                                </div>
                            ))
                        }
                        <HorizontalLine />
                    </article>
                    <article>
                        <h2 style={styles.h2}>Education</h2>
                        {
                            userData.education.map((ed, index) => (
                                <div key={index}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p style={styles.paragraphBold}>{ed.title}</p>
                                        <p style={styles.paragraph}>{ed.start_date} - {ed.end_date}</p>
                                    </div>
                                    <p style={styles.paragraphLight}>{ed.etablissement}, {ed.city}</p>
                                    {!!ed.description.length && (
                                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                            <Point />
                                            <p style={styles.paragraph}>{ed.description}</p>
                                        </div>
                                    )}
                                    <BreakLine6 />
                                </div>
                            ))
                        }
                    </article>
                </section>

                <VerticalLine />

                <section style={styles.rightSection}>
                    <article>
                        <h2 style={styles.h2}>Hard Skills</h2>
                        {userData.hardSkills.map((skill, index) => (
                            <>
                                <p style={styles.paragraph}>{skill.name}</p>
                                <Box sx={{ width: '100%' }}>
                                    <ThemeProvider theme={theme}>
                                        <LinearProgress color="neutral" variant="determinate" value={(skill.level / 5) * 100} />
                                    </ThemeProvider>
                                </Box>
                                <BreakLine6 />
                            </>
                        ))}
                    </article>
                    <BreakLine6 />
                    <HorizontalLine />

                    <article>
                        <h2 style={styles.h2}>Soft Skills</h2>
                        {userData.softSkills.map((skill, index) => (
                            <>
                                <p style={styles.paragraph}>{skill.name}</p>
                                <Box sx={{ width: '100%' }}>
                                    <ThemeProvider theme={theme}>
                                        <LinearProgress color="neutral" variant="determinate" value={(skill.level / 5) * 100} />
                                    </ThemeProvider>
                                </Box>
                                <BreakLine6 />
                            </>
                        ))}
                    </article>
                    <HorizontalLine />

                    <article>
                        <h2 style={styles.h2}>Languages</h2>
                        {userData.languages.map((lg, index) => (
                            <>
                                <p style={styles.paragraph}>{lg.name}</p>
                                <Box sx={{ width: '100%' }}>
                                    <ThemeProvider theme={theme}>
                                        <LinearProgress color="neutral" variant="determinate" value={(lg.level / 5) * 100} />
                                    </ThemeProvider>
                                </Box>
                                <BreakLine6 />
                            </>
                        ))}
                    </article>
                </section>

            </section>
        </div >
    )
}

export default Template2