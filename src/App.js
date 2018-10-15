import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const styles = {
  page: {
    backgroundColor: "#F0F0F0",
    paddingTop: 20,
    paddingBottom: 20,
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: 20,
  },
  name: {
    fontWeight: 700,
  },
  title: {
    fontWeight: 500,
    color: "#777777",
  },
  divider: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  locAndEmail: {
    padding: 5,
    color: "#777777",
    position: "relative",
    fontWeight: 400,
  },
  icon: {
    verticalAlign: 'middle'
  },
  thisWebsite: {
    marginBottom: 30,
    fontWeight: 400,
  },
  paper: {
    padding: 15
  },
  sectionTitle: {
    fontWeight: 500,
    color: "#777777",
  },
  sectionDivider: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  sectionIcon: {
    fontSize: 27,
    verticalAlign: 'middle'
  },
  section: {
    paddingTop: 20,
  },
  sectionSubheading: {
    fontWeight: 700,
    marginTop: 20,
  },
  sectionTime:{
    color: "#777777",
  },
  sectionBody: {
    marginTop: 5,
  },
  socialIcon: {
    color: "#777777",
    marginLeft: 5,
    marginRight: 5,
    fontSize: 24,
  },
};

function App(props) {
    const { classes } = props;
    return (
      <div className={classes.page}>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={11} lg={10} xl={6} container spacing={8}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0}>
                <Grid container direction="column" alignItems="center" className={classes.paper}>
                  <Avatar
                    alt="Yian Tong"
                    src="/photo.jpg"
                    className={classes.bigAvatar}
                  />
                  <Typography variant="headline" className={classes.name}>
                    Yian Tong
                  </Typography>
                  <Typography variant="title" className={classes.title}>
                    Master Candidate
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="body2" className={classes.locAndEmail}>
                    <Icon className={classes.icon}>location_on</Icon> New York, NY, US
                  </Typography>
                  <Typography variant="body2" className={classes.locAndEmail}>
                    <Icon className={classes.icon}>email</Icon> <a href="mailto:iiiantong@gmail.com">iiiantong@gmail.com</a>
                  </Typography>
                  <Typography variant="body2" className={classes.locAndEmail}>
                    <Icon className={classes.icon}>assignment</Icon> <a href="/resume.pdf">Download my resume</a>
                  </Typography>
                  <Divider className={classes.divider} />
                  <Grid item>
                    <a href="https://www.linkedin.com/in/yiantong/" className={classes.socialIcon}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/MLNC" className={classes.socialIcon}><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.facebook.com/yian.tong.3" className={classes.socialIcon}><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.instagram.com/aytytya/" className={classes.socialIcon}><FontAwesomeIcon icon={faInstagram} /></a>
                  </Grid>
                  <Divider className={classes.divider} />
                  <Typography variant="body2" className={classes.thisWebsite}>
                    This website was built by <a href="https://reactjs.org/">React</a> and <a href="https://material-ui.com/">Material-UI</a>. The full source code can be found in <a href="https://github.com/MLNC/React-Personal-Website"> my Github repo</a>.
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={0}>
                <Grid container direction="column" alignItems="stretch" className={classes.paper}>
                  <Grid item className={classes.section}>
                    <Typography variant="title" className={classes.sectionTitle}>
                      <Icon className={classes.sectionIcon}>location_on</Icon> ABOUT
                    </Typography>
                    <Divider className={classes.sectionDivider}/>
                    <Typography variant="body2" >
                      Sitting at the intersection of technology, business, and design. <br />
                      Oftenly making new things, continuously making things better. <br />
                      I am a Computer Science master candidate at New York University Tandon School of Engineering. <br />
                    A junior Product Manager, Web Developer, Entrepreneur and Game Developer.
                    </Typography>
                  </Grid>

                  <Grid item className={classes.section}>
                    <Typography variant="title" className={classes.sectionTitle}>
                      <Icon className={classes.sectionIcon}>school</Icon> EDUCATION
                    </Typography>
                    <Divider className={classes.sectionDivider}/>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="subheading" className={classes.sectionSubheading}>
                          New York University
                        </Typography>
                        <Typography variant="subheading">
                          Master of Science in Computer Science
                        </Typography>
                        <Typography variant="body2" className={classes.sectionBody} style={{color: "#777777"}}>
                          Expected Grduation May 2019
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subheading" className={classes.sectionSubheading}>
                          University of Illinois at Urbana-Champaign
                        </Typography>
                        <Typography variant="subheading">
                          Bachelor of Engineering in General Engineering <br />
                          Minor in Computer Science
                        </Typography>
                        <Typography variant="body2" className={classes.sectionBody} style={{color: "#777777"}}>
                          August 2011 - May 2015
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item className={classes.section}>
                    <Typography variant="title" className={classes.sectionTitle}>
                      <Icon className={classes.sectionIcon}>business</Icon> WORKING & ENTREPRENEURSHIP EXPERIENCE
                    </Typography>
                    <Divider className={classes.sectionDivider}/>
                    <Grid container direction="column">
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="subheading" className={classes.sectionSubheading}>
                            Associate Product Manager, InnoPartner Pte Ltd
                          </Typography>
                          <Typography variant="body2" className={classes.sectionTime}>
                            June 2018 - Present, Singapore
                          </Typography>
                          <Typography variant="body2" className={classes.sectionBody}>
                            Designed an air quality survey app for JTC Corporation(a state owned real estate company) from scratch, including the specification, system architecture and UI/UX. <br />
                            Designed and Developed the front-end app and proposed a multiple layer API. <br />
                            The product is still in development and will be launched in Singapore in October 2018.
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subheading" className={classes.sectionSubheading}>
                          Product Consultant, ReadMe
                        </Typography>
                        <Typography variant="body2" className={classes.sectionTime}>
                          August 2018 - Present, Shanghai, China
                        </Typography>
                        <Typography variant="body2" className={classes.sectionBody}>
                          Reviewed the first version of the app technically.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subheading" className={classes.sectionSubheading}>
                          Founder, Mech-O
                        </Typography>
                        <Typography variant="body2" className={classes.sectionTime}>
                          January 2015 - December 2016, Shanghai, China
                        </Typography>
                        <Typography variant="body2" className={classes.sectionBody}>
                          Designed the initial prototype which allowed users to do simple hardware development. <br />
                          Led team of eight(four engineers, two business professionals, one designer, one tester) through more than five iterations, redefining strategy and shifting team to new vision. <br />
                          Developed the product along with four engineers using Java, JavaScript, Python. <br />
                          Revised the product according to the feedbacks from target users and potential investors.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subheading" className={classes.sectionSubheading}>
                          Co-Founder, DineLog
                        </Typography>
                        <Typography variant="body2" className={classes.sectionTime}>
                          December 2013 - May 2015, Urbana, IL
                        </Typography>
                        <Typography variant="body2" className={classes.sectionBody}>
                          Designed the business model and the first iteration of the UI. <br />
                          Developed the minimum viable product and initialized user experience tests. <br />
                          Launched to Google Play and App Store in 2014 (unpublished now) for beta test. 100 local users are involved. After interviewing all of them, we did two more iterations based on the feedbacks.
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subheading" className={classes.sectionSubheading}>
                          Operation Officer, One Mile
                        </Typography>
                        <Typography variant="body2" className={classes.sectionTime}>
                          December 2013 - May 2015, Hangzhou, China
                        </Typography>
                        <Typography variant="body2" className={classes.sectionBody}>
                          Planned and executed the online events to promote the main product ONE MILE (www.1yingli.cn), an online community sharing skills. <br />
                          Published several WeChat sharing articles ended up with over 10,000 page view, and doubled the number of followers of the official WeChat account alongwith the page view.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item className={classes.section}>
                    <Typography variant="title" className={classes.sectionTitle}>
                      <Icon className={classes.sectionIcon}>format_paint</Icon> PROJECTS
                    </Typography>
                    <Divider className={classes.sectionDivider}/>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="subheading" className={classes.sectionSubheading}>
                            Leader, aMapGame
                          </Typography>
                          <Typography variant="body2" className={classes.sectionTime}>
                            August 2018 - Present, New York, NY
                          </Typography>
                          <Typography variant="body2" className={classes.sectionBody}>
                            An ongoing game project will be launched on Kickstarter.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subheading" className={classes.sectionSubheading}>
                            Technical Consultant, The Key School
                          </Typography>
                          <Typography variant="body2" className={classes.sectionTime}>
                            July 2018 - Present, Shanghai, China
                          </Typography>
                          <Typography variant="body2" className={classes.sectionBody}>
                            Designed, developed and deployed the first version of the website. <br />
                            <a href="http://www.keyschoolchina.com/">http://www.keyschoolchina.com/</a>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subheading" className={classes.sectionSubheading}>
                            Team Leader, Graphical User Interface Design for Unmanned Aerial Vehicles
                          </Typography>
                          <Typography variant="body2" className={classes.sectionTime}>
                            June 2014 - May 2015, Urbana, IL
                          </Typography>
                          <Typography variant="body2" className={classes.sectionBody}>
                            Visualized and embellished the simulated flight results. <br />
                            This Project belonged to the key programs of UAV research in the ISE Dept. of College of Engineering in UIUC, led by the department head, and sponsored by the United States Armed Force. <br />
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subheading" className={classes.sectionSubheading}>
                            Key Member, Graduation Design: Water Jetter Remote Control Design
                          </Typography>
                          <Typography variant="body2" className={classes.sectionTime}>
                            August 2014 - December 2015, Urbana, IL
                          </Typography>
                          <Typography variant="body2" className={classes.sectionBody}>
                            Redesigned the control of the jetters and added an econmoically viable wireless remote-control system for Spartan Tool LLC, which is currently used on the products. <br />
                            Took Radio Frequency as the wireless controller, utilized a solenoid valve with a manual override connecting to RF receiver/transmitter to implement water flow operations and the electrical-to-mechanical design for throttle implementation.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subheading" className={classes.sectionSubheading}>
                            Business Group Member, Illini Formula Electric
                          </Typography>
                          <Typography variant="body2" className={classes.sectionTime}>
                            September 2013 - May 2014, Urbana, IL
                          </Typography>
                          <Typography variant="body2" className={classes.sectionBody}>
                            Created the business plan for 2014 Formula Electric Competition and prepared annual presentation for Formula SAE.
                          </Typography>
                        </Grid>
                      </Grid>
                  </Grid>

                  <Grid item className={classes.section}>
                    <Typography variant="title" className={classes.sectionTitle}>
                      <Icon className={classes.sectionIcon}>code</Icon> SKILLS
                    </Typography>
                    <Divider className={classes.sectionDivider}/>
                    <Chip label="Leadership"/>
                    <Chip label="Executive Force"/>
                    <Chip label="Communication"/>
                    <Chip label="Product Design"/>
                    <Chip label="Product Management"/>
                    <Chip label="UI/UX Design"/>
                    <Chip label="Public Speaking"/> <br />
                    <Chip label="Python"/>
                    <Chip label="JavaScript"/>
                    <Chip label="Java"/>
                    <Chip label="C#"/>
                    <Chip label="React"/>
                    <Chip label="Unity"/>
                    <Chip label="Autodesk Inventor"/>
                    <Chip label="Adobe Photoshop"/>
                    <Chip label="Latex"/> <br />
                    <Chip label="Chinese"/>
                    <Chip label="English"/>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
        </Grid>
        </Grid>
      </div>
    );
}

export default withStyles(styles)(App);
