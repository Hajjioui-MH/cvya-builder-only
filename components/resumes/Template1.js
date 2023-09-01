import React from 'react'
import { styled } from '@mui/material/styles';

const P = styled('p')({
    margin: 0,
    padding: 0,
    fontSize: 12
});
const PStrong = styled('p')({
    margin: 0,
    marginTop: 6,
    padding: 0,
    fontWeight: 'bold',
    fontSize: 12
});
//styles
const container = {
    minWidth: '700px',
    maxWidth: '850px',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1.2,
    height: 'fit-content',
    minHeight: '900px',
    boxShadow: "1px 1px 3px 2px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "30px",
}
function Template1({ userData, resumeRef }) {
    return (
        <div ref={resumeRef}>
            <div style={{ backgroundColor: 'rgb(43, 135, 196)', height: 30, width: '100%' }}></div>
            <div style={{ padding: 16 }}>
                <h1 style={{ fontSize: '2em', color: 'rgb(43, 135, 196)' }}>{`${userData.title}`}</h1>
                <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    <div style={{ top: '114px', bottom: '52px', position: 'absolute', width: '28%', backgroundColor: 'rgb(242, 242, 242)', padding: 10 }}>
                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4 }}>Personal details</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        <PStrong>Name</PStrong>
                        <P>{`${userData.nom} ${userData.prenom}`}</P>
                        <PStrong>Email address</PStrong>
                        <P>{userData.email}</P>
                        <PStrong>Phone numbe</PStrong>
                        <P>{userData.phone}</P>
                        <PStrong>Adress</PStrong>
                        <P>{userData.adress}</P>
                        <PStrong>Age</PStrong>
                        <P>{userData.age}</P>

                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4, marginTop: 10 }}>Hard Skills</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        {
                            userData.hardSkills.map((skill, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'baseline' }}>
                                    <P style={{ width: '67.5%' }}>{skill.name}</P>
                                    <div>
                                        {[...Array(skill.level)].map((dot, index) => (
                                            <span key={index} style={{ display: 'inline-block', height: 7, width: 7, borderRadius: '50%', backgroundColor: 'rgb(43, 135, 196)', marginLeft: 6 }}></span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }

                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4, marginTop: 10 }}>Soft Skills</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        {
                            userData.softSkills.map((skill, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'baseline' }}>
                                    <P style={{ width: '67.5%' }}>{skill.name}</P>
                                    <div>
                                        {[...Array(skill.level)].map((dot, index) => (
                                            <span key={index} style={{ display: 'inline-block', height: 7, width: 7, borderRadius: '50%', backgroundColor: 'rgb(43, 135, 196)', marginLeft: 6 }}></span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div style={{ right: '12px', top: '114px', bottom: '52px', position: 'absolute', width: '62%' }}>
                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4, marginTop: 10 }}>Summary</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        <P>{userData.summary}</P>
                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4, marginTop: 10 }}>Work Experience</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        {
                            userData.experience.map((exp, index) => (
                                <div key={index}>
                                    <PStrong>{exp.title} <span style={{ float: 'right', color: 'rgb(43, 135, 196)' }}>{exp.start_date} - {exp.end_date}</span></PStrong>
                                    <P style={{ color: 'rgb(43, 135, 196)' }}>{exp.company_name}, {exp.city}</P>
                                    {
                                        !!exp.tasks.length && exp.tasks.map((task, index) => (
                                            !!task && <div key={index} style={{ display: 'flex', alignItems: 'baseline', marginTop: 1 }}>
                                                <span style={{ display: 'inline-block', height: 6, width: 6, borderRadius: '50%', backgroundColor: 'black', marginRight: 6 }}></span>
                                                <P>{task}</P>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }

                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4, marginTop: 10 }}>Education</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        {
                            userData.education.map((ed, index) => (
                                <div key={index}>
                                    <PStrong>{ed.title} <span style={{ float: 'right', color: 'rgb(43, 135, 196)' }}>{ed.start_date} - {ed.end_date}</span></PStrong>
                                    <P style={{ color: 'rgb(43, 135, 196)' }}>{ed.etablissement}, {ed.city}</P>
                                    {!!ed.description.length &&
                                        <div key={index} style={{ display: 'flex', alignItems: 'baseline', marginTop: 1 }}>
                                            <span style={{ display: 'inline-block', height: 6, width: 6, borderRadius: '50%', backgroundColor: 'black', marginRight: 6 }}></span>
                                            <P>{ed.description}</P>
                                        </div>}
                                </div>
                            ))
                        }

                        <h4 style={{ color: 'rgb(43, 135, 196)', marginBottom: 4, marginTop: 10 }}>Languages</h4>
                        <div style={{ width: '100%', backgroundColor: 'rgb(226, 226, 226)', height: '1px' }}></div>
                        {
                            userData.languages.map((lg, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                    <P style={{ width: '70%' }}>{lg.name}</P>
                                    <div>
                                        {[...Array(lg.level)].map((dot, index) => (
                                            <span key={index} style={{ display: 'inline-block', height: 7, width: 7, borderRadius: '50%', backgroundColor: 'rgb(43, 135, 196)', marginLeft: 6 }}></span>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            {/* <div style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgb(43, 135, 196)', height: 30, width: '100%' }}></div> */}
        </div>
    )
}

export default Template1