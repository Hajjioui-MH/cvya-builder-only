import React from 'react'
import { styled } from '@mui/material/styles';
import DoneIcon from '@material-ui/icons/Done';
import Card from '@material-ui/core/Card';
import { Link } from 'react-scroll';
import Header from '../components/header'
import { useRouter } from 'next/router';
import { setSelectedTemplate } from "../slices/cvSlice";
import { useDispatch } from 'react-redux'


const Hero = styled('section')({
  width: '90%',
  paddingTop: '8%',
  paddingBottom: '8%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '3em',
  marginLeft: 'auto',
  marginRight: 'auto'
});
const Steps = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginTop: '3em',
    marginBottom: '3em',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '3em',
    marginBottom: '1em',
  },
}));
const Step = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#838B91',
    marginTop: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    color: '#838B91',
    marginTop: '.8em',
    marginBottom: '.8em',
  },
}));
const StepV2 = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#2d2d2d',
    marginBottom: "10px",
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    alignItems: 'center',
    color: '#2d2d2d',
    marginTop: '.8em',
    marginBottom: '.8em',
  },
}));
const StepNumber = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: "10px",
    width: 30,
    height: 30,
    padding: 4,
    textAlign: 'center',
    backgroundColor: "rgb(228, 228, 228)",
  },
  [theme.breakpoints.down('md')]: {
    marginRight: 10,
    width: 10,
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: 'center',
    backgroundColor: "rgb(228, 228, 228)",
  },
}));
const Main = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '6em',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4em',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
}));
const ImageUi = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 400
  },
  [theme.breakpoints.down('md')]: {
    width: 300
  },
}));
const Templates = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingTop: '6em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
}));
const P = styled('p')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: '2em'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: '1em'
  },
}));
const ImageTemp = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 360,
    height: 500
  },
  [theme.breakpoints.down('md')]: {
    width: 300,
    height: 320
  },
}));
const Box = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
}));
const ButtonTemp = styled('button')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    borderRadius: "25px",
    marginBottom: "20px",
    marginTop: "20px",
    background: "white",
    cursor: 'pointer'
  },
  [theme.breakpoints.down('md')]: {
    borderRadius: "25px",
    marginBottom: "20px",
    marginTop: "20px",
    background: "white",
    fontSize: "13px",
    height: "40px",
    cursor: 'pointer'
  },
}));
const templateCollection = [
  { id: 1, templateUrl: '/images/resume-1.svg' },
  { id: 2, templateUrl: '/images/resume-2.svg' },
  { id: 3, templateUrl: '/images/resume-3.svg' },
  { id: 4, templateUrl: '/images/resume-4.png' },
]
const doneStyle = {
  color: 'white',
  backgroundColor: '#39d89e',
  borderRadius: '100%',
  padding: '0.3rem',
  marginRight: '0.625rem',
}



function CvyaBuilder() {
  const router = useRouter()
  const dispatch = useDispatch()
  const goEditTemplate = (id) => {
    dispatch(setSelectedTemplate(id))
    router.push('/cvya-builder-edit')
  }

  const Template = ({ key, id, url }) => (
    <Card key={key}
      style={
        {
          width: 'min-content',
          paddingTop: 20, marginBottom: 10,
          marginTop: 10, display: 'flex', flexDirection: 'column',
          alignItems: 'center'
        }
      }
    >
      <ImageTemp src={url} alt='template1' />
      <ButtonTemp onClick={() => goEditTemplate(id)} variant="outlined" color="primary">USE TEMPLATE</ButtonTemp>
    </Card>
  )

  return (
    <div className='footer_to_bottom'>
      <Header />

      <Hero>
        <h1><b>Your resume in three <span style={{ color: "#1318E8" }}> easy</span> steps</b></h1>
        <div>
          <Steps>
            <Step><StepNumber>1</StepNumber> Select a template from our collection.</Step>
            <Step><StepNumber>2</StepNumber> Build your resume using our easy to use resume builder.</Step>
            <Step><StepNumber>3</StepNumber> Download your resume.</Step>
          </Steps>
          <Link
            className='start_now btn'
            activeClass="active" to="templates" spy={true} smooth={true} offset={50} duration={500}
          >
            Select template
          </Link>
          {/* <button className='hero-btn btn' >Select template</button> */}
        </div>
      </Hero>

      <Main>
        <article>
          <h2 style={{ color: '#1318E8', paddingBottom: '1em', paddingTop: '1em' }}>WE DELIVER THE BEST</h2>
          <StepV2>
            <sub><DoneIcon style={doneStyle} /></sub>
            <h5>Proven CV Template To Increase Hiring Chance.</h5>
          </StepV2>
          <StepV2>
            <sub><DoneIcon style={doneStyle} className="done" /></sub>
            <h5>Creative And Clean Templates Design.</h5>
          </StepV2>
          <StepV2>
            <sub><DoneIcon style={doneStyle} /></sub>
            <h5>Easy And Intuitive Online CV Builder.</h5>
          </StepV2>
          <StepV2>
            <sub><DoneIcon style={doneStyle} /></sub>
            <h5>Free To Use. Developed by hiring profissionals.</h5>
          </StepV2>
          <StepV2>
            <sub><DoneIcon style={doneStyle} /></sub>
            <h5>Fast Easy CV and Resume Formatting.</h5>
          </StepV2>
          <StepV2>
            <sub><DoneIcon style={doneStyle} /></sub>
            <h5>Recruiter Approved Phrases.</h5>
          </StepV2>
        </article>

        <article>
          <ImageUi
            src="/images/cv-maker2.svg"
            alt="cv maker svg image"
          />
        </article>
      </Main>

      <Templates id='templates'>
        <h1>Our Creative Templates</h1>
        <P>
          Our creative resume templates offer a modern and visually appealing way to
          showcase your skillsand experience to potential employers. With a variety of
          designs and layouts, you can find the perfect template to match your unique
          style and industry. They are easy to customize and optimized for ATS, ensuring
          your resume gets past automated screening. With our templates, you can stand out
          and make a lasting impression on potential employers.
        </P>
        <Box>
          {templateCollection.map((temp, index) => (
            <Template
              key={index}
              id={temp.id}
              url={temp.templateUrl}
            />))}
        </Box>
      </Templates>
    </div>
  )
}

export default CvyaBuilder