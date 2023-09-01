import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { makeStyles } from '@material-ui/core/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
    inputStyle: {
        backgroundColor: '#f2f5fa',
        border: '1px',
        borderColor: '#f2f5fa',
        borderStyle: 'solid',
        borderRadius: '5px',
    },
    multInputStyle: {
        backgroundColor: '#f2f5fa',
        border: '1px',
        borderColor: '#f2f5fa',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: 4
    },
}));

const emptyExp = {
    title: '',
    company_name: '',
    city: '',
    start_date: '',
    end_date: '',
    description: '',
    tasks: [],
    exp_tasks1: '',
    exp_tasks2: ''
}
const emptyPrj = {
    title: '',
    type: '',
    description: '',
}
const emptyEdc = {
    title: '',
    etablissement: '',
    city: '',
    start_date: '',
    end_date: '',
    description: '',
}
const emptySkill = { name: '' }
const emptyAward = { name: '', source: '' }

function Editor4({ setUserData, userData }) {
    const classes = useStyles();
    const [expEditor, setExpEditor] = useState({ ...emptyExp })
    const [projectEditor, setProjectEditor] = useState({ ...emptyPrj })
    const [eductaionEditor, setEducationEditor] = useState({ ...emptyEdc })
    const [hardSkillEditor, setHardSkillEditor] = useState(emptySkill)
    const [softSkillEditor, setSoftSkillEditor] = useState(emptySkill)
    const [languageEditor, setLanguageEditor] = useState(emptySkill)
    const [awardEditor, setAwardEditor] = useState(emptyAward)
    const [interestEditor, setInterestEditor] = useState(emptySkill)

    const [activeIndex, setActiveIndex] = useState(0)
    const [activeEdcIndex, setActiveEdcIndex] = useState(0)
    const [activeHardSkillIndex, setActiveHardSkillIndex] = useState(0)
    const [activeSoftSkillIndex, setActiveSoftSkillIndex] = useState(0)
    const [activeLanguageIndex, setActiveLanguageIndex] = useState(0)
    const [activeAwardIndex, setActiveAwardIndex] = useState(0)
    const [activeInterestIndex, setActiveInterestIndex] = useState(0)

    const storeExperiences = (e) => {
        e.preventDefault()
        if (expEditor.title && expEditor.company_name && expEditor.start_date && expEditor.end_date) {
            let experiences = [];
            if (userData.experience.length > 0) {
                experiences = userData.experience.map((exp, index) => {
                    return index !== activeIndex ? exp : { ...expEditor, tasks: [expEditor.exp_tasks1, expEditor.exp_tasks2] }
                })
                setUserData({ ...userData, experience: [...experiences] })

            } else {
                setUserData({ ...userData, experience: [{ ...expEditor, tasks: [expEditor.exp_tasks1, expEditor.exp_tasks2] }] })
            }
        }
    }
    const storeProjects = (e) => {
        e.preventDefault()
        if (projectEditor.title && projectEditor.type && projectEditor.description) {
            let projects = [];
            if (userData.projects.length > 0) {
                projects = userData.projects.map((exp, index) => {
                    return index !== activeIndex ? exp : { ...projectEditor }
                })
                setUserData({ ...userData, projects: [...projects] })

            } else {
                setUserData({ ...userData, projects: [{ ...projectEditor }] })
            }
        }
    }
    const deleteExp = (ExpIndex) => {
        const newExperiences = userData.experience.filter((exp, index) => index !== ExpIndex)
        setUserData({ ...userData, experience: [...newExperiences] })
        const newExperience = !!newExperiences.length ? newExperiences[0] : emptyExp
        setExpEditor(newExperience)
        setActiveIndex(0)
    }
    const deletePrj = (prjIndex) => {
        const newProjects = userData.projects.filter((exp, index) => index !== prjIndex)
        setUserData({ ...userData, projects: [...newProjects] })
        const newProject = !!newProjects.length ? newProjects[0] : emptyPrj
        setProjectEditor(newProject)
        setActiveIndex(0)
    }
    const deleteEducation = (EdcIndex) => {
        const newEducations = userData.education.filter((exp, index) => index !== EdcIndex)
        setUserData({ ...userData, education: [...newEducations] })
        const newEducation = !!newEducations.length ? newEducations[0] : emptyEdc
        setEducationEditor(newEducation)
        setActiveEdcIndex(0)
    }
    const deleteAward = (AwdIndex) => {
        const newAwards = userData.awards.filter((exp, index) => index !== AwdIndex)
        setUserData({ ...userData, awards: [...newAwards] })
        const newAward = !!newAwards.length ? newAwards[0] : emptyAward
        setAwardEditor(newAward)
        setActiveAwardIndex(0)
    }
    const storeEductaion = (e) => {
        e.preventDefault()
        if (eductaionEditor.title && eductaionEditor.etablissement && eductaionEditor.start_date && eductaionEditor.end_date) {
            let educations = [];
            if (userData.education.length > 0) {
                educations = userData.education.map((edc, index) => {
                    return index !== activeEdcIndex ? edc : { ...eductaionEditor }
                })
                setUserData({ ...userData, education: [...educations] })

            } else {
                setUserData({ ...userData, education: [{ ...eductaionEditor }] })
            }
        }
    }
    const storeHardSkill = (e) => {
        e.preventDefault()
        if (!userData.hardSkills.find(skill => skill.name === hardSkillEditor.name)) {
            if (userData.hardSkills.length > 0) {
                const hardSkills = userData.hardSkills.map((skill, index) => {
                    return index !== activeHardSkillIndex ? skill : { ...hardSkillEditor }
                })
                setUserData({ ...userData, hardSkills })

            } else {
                setUserData({ ...userData, hardSkills: [{ ...hardSkillEditor }] })
            }
        }
    }
    const deleteHardSkill = (skillIndex) => {
        const newHardSkills = userData.hardSkills.filter((skill, index) => index !== skillIndex)
        setUserData({ ...userData, hardSkills: [...newHardSkills] })
        const newHdSkill = !!newHardSkills.length ? newHardSkills[0] : emptySkill
        setHardSkillEditor(newHdSkill)
        setActiveHardSkillIndex(0)
    }
    const storeSoftSkill = (e) => {
        e.preventDefault()
        if (!userData.softSkills.find(skill => skill.name === softSkillEditor.name)) {
            if (userData.softSkills.length > 0) {
                const softSkills = userData.softSkills.map((skill, index) => {
                    return index !== activeSoftSkillIndex ? skill : { ...softSkillEditor }
                })
                setUserData({ ...userData, softSkills })

            } else {
                setUserData({ ...userData, softSkills: [{ ...softSkillEditor }] })
            }
        }
    }
    const deleteSoftSkill = (skillIndex) => {
        const newSoftSkills = userData.softSkills.filter((skill, index) => index !== skillIndex)
        setUserData({ ...userData, softSkills: [...newSoftSkills] })
        const newSfSkill = !!newSoftSkills.length ? newSoftSkills[0] : emptySkill
        setSoftSkillEditor(newSfSkill)
        setActiveSoftSkillIndex(0)
    }
    const storeLanguage = (e) => {
        e.preventDefault()
        if (!userData.languages.find(lg => lg.name === languageEditor.name)) {
            if (userData.languages.length > 0) {
                const languages = userData.languages.map((lg, index) => {
                    return index !== activeLanguageIndex ? lg : { ...languageEditor }
                })
                setUserData({ ...userData, languages })

            } else {
                setUserData({ ...userData, languages: [{ ...languageEditor }] })
            }
        }
    }
    const storeAward = (e) => {
        e.preventDefault()
        if (!userData.awards.find(award => (award.name === awardEditor.name) && (award.source === awardEditor.source))) {
            if (userData.awards.length > 0) {
                const awards = userData.awards.map((award, index) => {
                    return index !== activeAwardIndex ? award : { ...awardEditor }
                })
                setUserData({ ...userData, awards })
            } else {
                setUserData({ ...userData, awards: [{ ...awardEditor }] })
            }
        }
    }
    const storeInterest = (e) => {
        e.preventDefault()
        if (!userData.interests.find(interest => interest.name === interestEditor.name)) {
            if (userData.interests.length > 0) {
                const interests = userData.interests.map((interest, index) => {
                    return index !== activeInterestIndex ? interest : { ...interestEditor }
                })
                setUserData({ ...userData, interests })
            } else {
                setUserData({ ...userData, interests: [{ ...interestEditor }] })
            }
        }
    }
    const deleteInterest = (intIndex) => {
        const newInterests = userData.interests.filter((e, index) => index !== intIndex)
        setUserData({ ...userData, interests: [...newInterests] })
        const newInterest = !!newInterests.length ? newInterests[0] : emptySkill
        setInterestEditor(newInterest)
        setActiveInterestIndex(0)
    }
    const deleteLanguage = (lgIndex) => {
        const newLanguages = userData.languages.filter((e, index) => index !== lgIndex)
        setUserData({ ...userData, languages: [...newLanguages] })
        const newLanguage = !!newLanguages.length ? newLanguages[0] : emptyEdc
        setLanguageEditor(newLanguage)
        setActiveLanguageIndex(0)
    }
    const handleChangeLanguage = (event) => {
        setLanguageEditor({ ...languageEditor, level: event.target.value });
    };
    const valuetext = (value) => {
        return `${value}`;
    }
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log("e.target.result: ", e.target.result);
                setUserData({ ...userData, profile_image_source: e.target.result });
            };
            reader.readAsDataURL(file);
        }

    }

    const CustomInput = (label, name, userData, setUserChange) => {
        return <TextField
            value={userData[name]}
            size="small"
            id="outlined-basic" label={label} variant="filled"
            onChange={(e) => setUserChange({ ...userData, [name]: e.target.value })}
            InputProps={{
                classes: {
                    input: classes.inputStyle,
                },
            }}
        />
    }
    const CustomMultilineInput = (name, userData, setUserChange) => (
        <TextField
            id="outlined-basic" variant="standard"
            value={userData[name]}
            onChange={(e) => setUserChange({ ...userData, [name]: e.target.value })}
            multiline
            rows={4}
            InputProps={{
                classes: {
                    input: classes.multInputStyle
                },
            }}
        />
    )

    return (
        <>
            <label class="custom-image-input">
                <input type="file" id="fileInput" accept="image/*" onChange={handleImageUpload} />
                <span class="upload-icon"><CameraAltIcon /></span>
            </label>
            <Box
                style={{ marginBottom: 22, marginTop: 10, }}
                component="form"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& > :not(style)': {
                        width: '50%',
                        '&:first-child': {
                            marginRight: 2,
                        },
                    },
                }}
                noValidate
                autoComplete="off"
            >
                {CustomInput('Votre nom', 'title', userData, setUserData)}
                {CustomInput('Le titre de poste', 'post_title', userData, setUserData)}
            </Box>

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Personal Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Email", 'email', userData, setUserData)}
                        {CustomInput("Phone", 'phone', userData, setUserData)}
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Adress", 'adress', userData, setUserData)}
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Professional Summary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': {
                                m: 1, width: '100%'
                            },
                        }
                        }
                        noValidate
                        autoComplete="off"
                    >
                        {CustomMultilineInput("summary", userData, setUserData)}
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Work Experience</Typography>
                </AccordionSummary>
                {userData.experience.map((exp, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setExpEditor(userData.experience[index]);
                        setActiveIndex(index)
                    }}>
                        {`Expérience ${index + 1}`}
                    </span>
                    <span onClick={() => deleteExp(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.experience.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setExpEditor(emptyExp);
                            setActiveIndex(userData.experience.length)
                            setUserData({ ...userData, experience: [...userData.experience, emptyExp] })
                        }}
                    >
                        + New
                    </span>
                }
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'title', expEditor, setExpEditor)}
                        {CustomInput("Nom de l'entreprise", 'company_name', expEditor, setExpEditor)}
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Date de début", 'start_date', expEditor, setExpEditor)}
                        {CustomInput("Date de fin", 'end_date', expEditor, setExpEditor)}
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, marginTop: 0, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <p style={{ marginTop: '1rem' }}>Description</p>
                        {CustomMultilineInput('description', expEditor, setExpEditor)}
                    </Box>
                    <p>Résumez votre expérience en deux phrases.</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("tache 1", 'exp_tasks1', expEditor, setExpEditor)}
                        {CustomInput("tache 2", 'exp_tasks2', expEditor, setExpEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeExperiences}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Projects</Typography>
                </AccordionSummary>
                {userData.projects.map((prj, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setProjectEditor(userData.projects[index]);
                        setActiveIndex(index)
                    }}>
                        {`Projects ${index + 1}`}
                    </span>
                    <span onClick={() => deletePrj(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.projects.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setProjectEditor(emptyPrj);
                            setActiveIndex(userData.projects.length)
                            setUserData({ ...userData, projects: [...userData.projects, emptyPrj] })
                        }}
                    >
                        + New
                    </span>
                }
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'title', projectEditor, setProjectEditor)}
                        {CustomInput("Type de projet (open source, freelance...)", 'type', projectEditor, setProjectEditor)}
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, marginTop: 0, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <p style={{ marginTop: '1rem' }}>Description</p>
                        {CustomMultilineInput('description', projectEditor, setProjectEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeProjects}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Hard Skills</Typography>
                </AccordionSummary>
                {userData.hardSkills.map((ed, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeHardSkillIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setHardSkillEditor(userData.hardSkills[index]);
                        setActiveHardSkillIndex(index)
                    }}>
                        {`Skill${index + 1}`}
                    </span>
                    <span onClick={() => deleteHardSkill(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.hardSkills.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setHardSkillEditor(emptySkill);
                            setActiveHardSkillIndex(userData.hardSkills.length)
                            setUserData({ ...userData, hardSkills: [...userData.hardSkills, emptySkill] })
                        }}
                    >
                        + New
                    </span>
                }
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', hardSkillEditor, setHardSkillEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeHardSkill}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Soft Skills</Typography>
                </AccordionSummary>
                {userData.softSkills.map((ed, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeSoftSkillIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setSoftSkillEditor(userData.softSkills[index]);
                        setActiveSoftSkillIndex(index)
                    }}>
                        {`Skill${index + 1}`}
                    </span>
                    <span onClick={() => deleteSoftSkill(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.softSkills.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setSoftSkillEditor(emptySkill);
                            setActiveSoftSkillIndex(userData.softSkills.length)
                            setUserData({ ...userData, softSkills: [...userData.softSkills, emptySkill] })
                        }}
                    >
                        + New
                    </span>
                }

                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', softSkillEditor, setSoftSkillEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeSoftSkill}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Education</Typography>
                </AccordionSummary>
                {userData.education.map((ed, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeEdcIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setEducationEditor(userData.education[index]);
                        setActiveEdcIndex(index)
                    }}>
                        {`Education${index + 1}`}
                    </span>
                    <span onClick={() => deleteEducation(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.education.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setEducationEditor(emptyEdc);
                            setActiveEdcIndex(userData.education.length)
                            setUserData({ ...userData, education: [...userData.education, emptyEdc] })
                        }}
                    >
                        + New
                    </span>
                }
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'title', eductaionEditor, setEducationEditor)}
                        {CustomInput("Nom d'établissement", 'etablissement', eductaionEditor, setEducationEditor)}
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Date de début", 'start_date', eductaionEditor, setEducationEditor)}
                        {CustomInput("Date de fin", 'end_date', eductaionEditor, setEducationEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeEductaion}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Awards</Typography>
                </AccordionSummary>
                {userData.awards.map((aw, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeAwardIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setAwardEditor(userData.awards[index]);
                        setActiveAwardIndex(index)
                    }}>
                        {`Award${index + 1}`}
                    </span>
                    <span onClick={() => deleteAward(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.awards.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setAwardEditor(emptyAward);
                            setActiveAwardIndex(userData.awards.length)
                            setUserData({ ...userData, awards: [...userData.awards, emptyAward] })
                        }}
                    >
                        + New
                    </span>
                }

                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', awardEditor, setAwardEditor)}
                        {CustomInput("Source", 'source', awardEditor, setAwardEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeAward}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Languages</Typography>
                </AccordionSummary>
                {userData.languages.map((aw, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeLanguageIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setLanguageEditor(userData.languages[index]);
                        setActiveLanguageIndex(index)
                    }}>
                        {`Language${index + 1}`}
                    </span>
                    <span onClick={() => deleteLanguage(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.languages.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setLanguageEditor(emptySkill);
                            setActiveLanguageIndex(userData.languages.length)
                            setUserData({ ...userData, languages: [...userData.languages, emptySkill] })
                        }}
                    >
                        + New
                    </span>
                }

                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', languageEditor, setLanguageEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeLanguage}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

            <Accordion style={{ backgroundColor: '#fafafa' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ fontWeight: '600' }}>Interests</Typography>
                </AccordionSummary>
                {userData.interests.map((aw, index) => <button
                    key={index}
                    style={{
                        marginTop: 10, marginBottom: 10, cursor: 'pointer', fontSize: 12,
                        height: 'auto', padding: 4, paddingLeft: 6, paddingRight: 6, textTransform: 'none', borderRadius: '20px',
                        backgroundColor: 'white', borderColor: index === activeInterestIndex ? '#1318E8' : 'gray', borderWidth: '1px'
                    }}>
                    <span onClick={() => {
                        setInterestEditor(userData.interests[index]);
                        setActiveInterestIndex(index)
                    }}>
                        {`Interest${index + 1}`}
                    </span>
                    <span onClick={() => deleteInterest(index)} style={{ padding: 5, borderRadius: 4, marginLeft: 10, fontSize: 12 }}>X</span>
                </button>)}
                {userData.interests.length > 0 &&
                    <span
                        style={{ float: 'right', color: '#1318E8', marginRight: 8, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            setInterestEditor(emptySkill);
                            setActiveInterestIndex(userData.interests.length)
                            setUserData({ ...userData, interests: [...userData.interests, emptySkill] })
                        }}
                    >
                        + New
                    </span>
                }

                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', interestEditor, setInterestEditor)}
                    </Box>
                </AccordionDetails>

                <button
                    onClick={storeInterest}
                    style={{
                        marginTop: 10, marginBottom: 20, cursor: 'pointer',
                        backgroundColor: 'white', borderColor: '#1318E8', borderWidth: '1px'
                    }}>
                    Enregistrer
                </button>
            </Accordion >

        </>
    )
}

export default Editor4