import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';
import Editor from "../components/Editor";
import Editor4 from "../components/resumes/editors/Editor4";
import Template1 from "../components/resumes/Template1";
import Template2 from "../components/resumes/Template2";
import Template3 from "../components/resumes/Template3";
import Template4 from "../components/resumes/Template4";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { autoFilledData, emptyData } from "./constants";


const useStyles = makeStyles(theme => ({
    inputStyle: {
        backgroundColor: '#f2f5fa',
        border: '1px',
        borderColor: '#f2f5fa',
        borderStyle: 'solid',
        borderRadius: '5px',
    },
}));
// Styles -- - - - - - - -
const Page = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '2%',
        display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
        padding: '2%',
        display: 'flex',
        flexDirection: 'column'
    },
}));
//position: 'absolute', top: 0, right: 0, minWidth: '50%', minHeight: '100vh'
const PageLeftSide = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '50%',
        paddingRight: 20,
        paddingLeft: 20,
        boxSizing: 'border-box'
    },
    [theme.breakpoints.down('md')]: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));
const PageRightSide = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '50%',
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
// Styles -- - - - - - - -
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
const containerStyleAfterPrint = {
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
const containerStyleBeforePrint = { position: 'absolute', top: 0, right: 0, minWidth: '50%', minHeight: '100vh' }

function CvyaBuilderEdit() {
    //States...
    const [userData, setUserData] = useState({
        title: '',
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        adress: '',
        age: '',
        summary: '',
        experience: [],
        projects: [],
        education: [],
        hardSkills: [],
        softSkills: [],
        languages: [],
        awards: [],
        interests: [],
    })
    const [containerStyle, setcontainerStyle] = useState()
    const resumeRef = useRef();
    const router = useRouter()
    const selectedTemplateId = useSelector((state) => state.cv.selectedTemplate);

    const classes = useStyles();
    const CustomInput = (label, name) => (
        <TextField
            id="outlined-basic" label={label} variant="filled"
            onChange={(e) => setUserData({ ...userData, [name]: e.target.value })}
            InputProps={{
                classes: {
                    input: classes.inputStyle,
                },
            }}
        />
    )
    const CustomMultilineInput = (label) => (
        <TextField
            id="outlined-basic" label={label} variant="standard"
            multiline
            rows={4}
            InputProps={{
                classes: {
                    input: classes.inputStyle,
                },
            }}
        />
    )

    useEffect(() => {
        return () => {
            if (selectedTemplateId !== null) return;
            router.push("/")
        }
    }, [])

    const downloadPDF = () => {
        const capture = document.querySelector('.cv-template');
        // setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'pt', 'letter');
            // const doc = new jsPDF();
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            //   setLoader(false);
            doc.save(`${userData.nom} ${userData.prenom}.pdf`);
        })
    }


    return (
        <Page>
            {/* ---------------------- Left side ---------------- */}
            <PageLeftSide>

                {selectedTemplateId !== 4 ?
                    <Editor userData={userData} setUserData={setUserData} />
                    :
                    <Editor4 userData={userData} setUserData={setUserData} />
                }
                <ReactToPrint
                    trigger={() => {
                        return (
                            <Link
                                className='start_now btn'
                                activeClass="active"
                                style={{ marginTop: '2em', position: 'absolute' }}
                                onClick={downloadPDF}
                            >
                                Download CV
                            </Link>
                        );
                    }}
                    content={() => resumeRef.current}
                />
                <Link
                    className='btn auto-fill-btn'
                    activeClass="active"
                    onClick={() => !userData.title ? setUserData({ ...autoFilledData }) : setUserData({ ...emptyData })}
                >
                    {!userData.title ? "Auto-Fill" : "Clear"}
                </Link>
                <div style={{ height: '7em' }}></div>
            </PageLeftSide>

            {/* ---------------------- Right side ---------------- */}
            <PageRightSide className='cv-template'>
                {/* <Template1 resumeRef={resumeRef} userData={userData} /> */}
                {
                    {
                        "1": <Template1 resumeRef={resumeRef} userData={userData} />,
                        "2": <Template2 resumeRef={resumeRef} userData={userData} />,
                        "3": <Template3 resumeRef={resumeRef} userData={userData} />,
                        "4": <Template4 resumeRef={resumeRef} userData={userData} />,
                    }[selectedTemplateId]
                }
            </PageRightSide>


        </Page>
    )
}

export default CvyaBuilderEdit