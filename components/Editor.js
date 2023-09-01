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
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
    inputStyle: {
        backgroundColor: '#f2f5fa',
        border: '1px',
        borderColor: '#f2f5fa',
        borderStyle: 'solid',
        borderRadius: '5px',
    },
}));

const emptyExp = {
    title: '',
    company_name: '',
    city: '',
    start_date: '',
    end_date: '',
    tasks: [],
    exp_tasks1: '',
    exp_tasks2: ''
}
const emptyEdc = {
    title: '',
    etablissement: '',
    city: '',
    start_date: '',
    end_date: '',
    description: '',
}
const emptySkill = { name: '', level: 1 }

function Editor({ setUserData, userData }) {
    const classes = useStyles();
    const [expEditor, setExpEditor] = useState({ ...emptyExp })
    const [eductaionEditor, setEducationEditor] = useState({ ...emptyEdc })
    const [hardSkillEditor, setHardSkillEditor] = useState(emptySkill)
    const [softSkillEditor, setSoftSkillEditor] = useState(emptySkill)
    const [languageEditor, setLanguageEditor] = useState(emptySkill)

    const [activeIndex, setActiveIndex] = useState(0)
    const [activeEdcIndex, setActiveEdcIndex] = useState(0)
    const [activeHardSkillIndex, setActiveHardSkillIndex] = useState(0)
    const [activeSoftSkillIndex, setActiveSoftSkillIndex] = useState(0)
    const [activeLanguageIndex, setActiveLanguageIndex] = useState(0)

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
    const deleteExp = (ExpIndex) => {
        const newExperiences = userData.experience.filter((exp, index) => index !== ExpIndex)
        setUserData({ ...userData, experience: [...newExperiences] })
        const newExperience = !!newExperiences.length ? newExperiences[0] : emptyExp
        setExpEditor(newExperience)
        setActiveIndex(0)
    }
    const deleteEducation = (EdcIndex) => {
        const newEducations = userData.education.filter((exp, index) => index !== EdcIndex)
        setUserData({ ...userData, education: [...newEducations] })
        const newEducation = !!newEducations.length ? newEducations[0] : emptyEdc
        setEducationEditor(newEducation)
        setActiveEdcIndex(0)
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
        if (!userData.languages.find(skill => skill.name === languageEditor.name)) {
            setUserData({ ...userData, languages: [...userData.languages, languageEditor] })
        }
    }
    const deleteLanguage = (lgIndex) => {
        const newEducations = userData.education.filter((exp, index) => index !== lgIndex)
        setUserData({ ...userData, education: [...newEducations] })
        const newEducation = !!newEducations.length ? newEducations[0] : emptyEdc
        setEducationEditor(newEducation)
        setActiveEdcIndex(0)
    }
    const handleChange = (event) => {
        setHardSkillEditor({ ...hardSkillEditor, level: event.target.value });
    };
    const handleChangeSoftSkill = (event) => {
        setSoftSkillEditor({ ...softSkillEditor, level: event.target.value });
    };
    const handleChangeLanguage = (event) => {
        setLanguageEditor({ ...languageEditor, level: event.target.value });
    };
    const valuetext = (value) => {
        return `${value}`;
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
    const CustomMultilineInput = (name) => (
        <TextField
            id="outlined-basic" variant="standard"
            onChange={(e) => setUserData({ ...userData, [name]: e.target.value })}
            multiline
            rows={4}
            InputProps={{
                classes: {
                    input: classes.inputStyle,
                },
            }}
        />
    )

    return (
        <>
            <Box
                style={{ marginBottom: 22, marginTop: 22, }}
                component="form"
                noValidate
                autoComplete="off"
            >
                {CustomInput('Titre de CV', 'title', userData, setUserData)}
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
                        {CustomInput("Nom", 'nom', userData, setUserData)}
                        {CustomInput("Prénom", 'prenom', userData, setUserData)}
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
                        {CustomInput("Age", 'age', userData, setUserData)}
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
                        {CustomMultilineInput("summary")}
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
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Ville", 'city', expEditor, setExpEditor)}
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
                        {CustomInput("Ville", 'city', eductaionEditor, setEducationEditor)}
                    </Box>
                    <p>Entrez une petite description si vous voulez !.</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Description", 'description', eductaionEditor, setEducationEditor)}
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
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', hardSkillEditor, setHardSkillEditor)}
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <Slider
                                size="small"
                                aria-label="Volume"
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                                value={hardSkillEditor.level}
                                onChange={handleChange}
                            />
                        </Stack>
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
                            '& > :not(style)': { m: 1, width: '50%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        {CustomInput("Titre", 'name', softSkillEditor, setSoftSkillEditor)}
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <Slider
                                size="small"
                                aria-label="Volume"
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                                value={softSkillEditor.level}
                                onChange={handleChangeSoftSkill}
                            />
                        </Stack>
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
                    <Typography style={{ fontWeight: '600' }}>Languages</Typography>
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
                        {CustomInput("Titre", 'name', languageEditor, setLanguageEditor)}
                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                            <Slider
                                size="small"
                                aria-label="Volume"
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={5}
                                value={languageEditor.level}
                                onChange={handleChangeLanguage}
                            />
                        </Stack>
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

        </>
    )
}

export default Editor