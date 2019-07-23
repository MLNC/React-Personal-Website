import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  page: {
    backgroundColor: "#F0F0F0",
    paddingTop: 20,
    paddingBottom: 20
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: 20
  },
  name: {
    fontWeight: 700
  },
  title: {
    fontWeight: 500,
    color: "#777777"
  },
  divider: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20
  },
  locAndEmail: {
    padding: 5,
    color: "#777777",
    position: "relative",
    fontWeight: 400
  },
  icon: {
    verticalAlign: "middle"
  },
  thisWebsite: {
    marginBottom: 30,
    fontWeight: 400
  },
  paper: {
    padding: 15
  },
  sectionTitle: {
    fontWeight: 500,
    color: "#777777"
  },
  sectionDivider: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5
  },
  sectionIcon: {
    fontSize: 27,
    verticalAlign: "middle"
  },
  section: {
    paddingTop: 20
  },
  sectionSubheading: {
    fontWeight: 700,
    marginTop: 20
  },
  sectionTime: {
    color: "#777777"
  },
  sectionBody: {
    marginTop: 5
  },
  socialIcon: {
    color: "#777777",
    marginLeft: 5,
    marginRight: 5,
    fontSize: 24
  },
  chip: {
    margin: 2
  }
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.page}>
      <Grid container justify="center">
        <Grid item xs={12} sm={11} md={11} lg={10} xl={6} container spacing={8}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0}>
              <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.paper}
              >
                <Avatar
                  alt="Yian Tong"
                  src="/photo.jpg"
                  className={classes.bigAvatar}
                />
                <Typography variant="headline" className={classes.name}>
                  Yian Tong
                </Typography>
                <Typography variant="body1" className={classes.title}>
                  Freelance Developer
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body2" className={classes.locAndEmail}>
                  <Icon className={classes.icon}>location_on</Icon> New York,
                  NY, US
                </Typography>
                <Typography variant="body2" className={classes.locAndEmail}>
                  <Icon className={classes.icon}>email</Icon>{" "}
                  <a href="mailto:iiiantong@gmail.com">iiiantong@gmail.com</a>
                </Typography>
                <Typography variant="body2" className={classes.locAndEmail}>
                  <Icon className={classes.icon}>assignment</Icon>{" "}
                  <a href="/resume.pdf">Download my resume</a>
                </Typography>
                <Divider className={classes.divider} />
                <Grid item>
                  <a
                    href="https://www.linkedin.com/in/yiantong/"
                    className={classes.socialIcon}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://github.com/MLNC"
                    className={classes.socialIcon}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://www.facebook.com/yian.tong.3"
                    className={classes.socialIcon}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://www.instagram.com/aytytya/"
                    className={classes.socialIcon}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Grid>
                <Divider className={classes.divider} />
                <Typography variant="body2" className={classes.thisWebsite}>
                  This website was built by{" "}
                  <a href="https://reactjs.org/">React</a> and{" "}
                  <a href="https://material-ui.com/">Material-UI</a>. The full
                  source code can be found in{" "}
                  <a href="https://github.com/MLNC/React-Personal-Website">
                    {" "}
                    my Github repo
                  </a>
                  .
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0}>
              <Grid
                container
                direction="column"
                alignItems="stretch"
                className={classes.paper}
              >
                <Grid item className={classes.section}>
                  <Typography variant="title" className={classes.sectionTitle}>
                    <Icon className={classes.sectionIcon}>location_on</Icon>{" "}
                    ABOUT
                  </Typography>
                  <Divider className={classes.sectionDivider} />
                  <Typography variant="body2">
                    Sitting at the intersection of technology, business, and
                    design. <br />
                    Oftenly making new things, continuously making things
                    better. <br />
                    Yian is a freelance developer graduate from New York
                    University Tandon School of Engineering, master of computer
                    science. <br />A web developer, product manager,
                    entrepreneur and game developer.
                  </Typography>
                </Grid>

                <Grid item className={classes.section}>
                  <Typography variant="title" className={classes.sectionTitle}>
                    <Icon className={classes.sectionIcon}>code</Icon> SKILLS
                  </Typography>
                  <Divider className={classes.sectionDivider} />
                  <Chip className={classes.chip} label="Python" />
                  <Chip className={classes.chip} label="JavaScript" />
                  <Chip className={classes.chip} label="NodeJS" />
                  <Chip className={classes.chip} label="Java" />
                  <Chip className={classes.chip} label="C#" />
                  <Chip className={classes.chip} label="LaTex" /> <br />
                  <Chip className={classes.chip} label="React" />
                  <Chip className={classes.chip} label="React Native" />
                  <Chip className={classes.chip} label="Git" />
                  <Chip className={classes.chip} label="MySQL" />
                  <Chip className={classes.chip} label="Android" />
                  <Chip className={classes.chip} label="D3" />
                  <Chip className={classes.chip} label="Express" />
                  <Chip className={classes.chip} label="Unity" />
                  <Chip className={classes.chip} label="Autodesk Inventor" />
                  <Chip className={classes.chip} label="Adobe Photoshop" />{" "}
                  <br />
                  <Chip className={classes.chip} label="Product Management" />
                  <Chip className={classes.chip} label="UI/UX Design" />
                  <Chip className={classes.chip} label="Leadership" />
                  <Chip className={classes.chip} label="Chinese" />
                  <Chip className={classes.chip} label="English" />
                </Grid>

                <Grid item className={classes.section}>
                  <Typography variant="title" className={classes.sectionTitle}>
                    <Icon className={classes.sectionIcon}>school</Icon>
                    EDUCATION
                  </Typography>
                  <Divider className={classes.sectionDivider} />
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        New York University
                      </Typography>
                      <Typography variant="subheading">
                        Master of Science in Computer Science
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                        style={{ color: "#777777" }}
                      >
                        August 2017 - May 2019
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        University of Illinois at Urbana-Champaign
                      </Typography>
                      <Typography variant="subheading">
                        Bachelor of Engineering in General Engineering, Minor in
                        Computer Science
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                        style={{ color: "#777777" }}
                      >
                        August 2011 - May 2015
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item className={classes.section}>
                  <Typography variant="title" className={classes.sectionTitle}>
                    <Icon className={classes.sectionIcon}>business</Icon>{" "}
                    WORKING & ENTREPRENEURSHIP EXPERIENCE
                  </Typography>
                  <Divider className={classes.sectionDivider} />
                  <Grid container direction="column">
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="subheading"
                          className={classes.sectionSubheading}
                        >
                          Software Engineer Intern & Part-time, InnoPartner Pte
                          Ltd
                        </Typography>
                        <Typography
                          variant="body2"
                          className={classes.sectionTime}
                        >
                          June 2018 - May 2019, Singapore
                        </Typography>
                        <Typography
                          variant="body2"
                          className={classes.sectionBody}
                        >
                          Designed an air quality survey app from scratch,
                          including the specification, system architecture and
                          UI/UX. <br />
                          Implemented a front-end prototype alone by React
                          Native to be used in the early customer product
                          testing of 100. <br />
                          Proposed a multiple layer API for production in terms
                          of a 5000+ user scale.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Creator, Mech-O Ltd
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        January 2015 - December 2016, Shanghai, China
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Invented the building blocks (idea and hardware) in the
                        school lab and brought them to the market. <br />
                        Designed and developed a simplified cross-platform
                        coding interface (like Blocky) with Unity, remodeled
                        Arduino programming (C) and connected with the
                        interface. <br />
                        Designed, developed and launched a material design
                        website in mid 2015 as one of the first React websites
                        in China. <br />
                        Led team of eight(four engineers, two business
                        professionals, one designer, one tester) through more
                        than five iterations, redefining strategy and shifting
                        team to new vision. <br />
                        Attended over 20 road shows for fundraising, visited
                        over 30 investors, including influential angel investors
                        in China: Xiaoge Xiong, Xiaoping Xu(he provided
                        recommendations for my grad school applications).
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Creator & Android Developer, DineLog
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        December 2013 - May 2015, Urbana, IL
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Created a front-end Android app and initiated an alpha
                        test with 100 local users involved. <br />
                        Redesigned the business model, UI/UX and the App based
                        on feedback for three iterations. Launched to Google
                        Play and App Store in 2014 (unpublished now) for beta
                        test.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Operation Officer, One Mile
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        December 2013 - May 2015, Hangzhou, China
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Planned and executed the online events to promote the
                        main product ONE MILE (www.1yingli.cn), an online
                        community sharing skills. <br />
                        Published several WeChat sharing articles ended up with
                        over 10,000 page view, and doubled the number of
                        followers of the official WeChat account alongwith the
                        page view.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item className={classes.section}>
                  <Typography variant="title" className={classes.sectionTitle}>
                    <Icon className={classes.sectionIcon}>format_paint</Icon>{" "}
                    PROJECTS
                  </Typography>
                  <Divider className={classes.sectionDivider} />
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Freelance Web Developer, Parnassus Productions Inc
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        July 2019 - Present, New York, NY
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Redesigning the website for world famous composer Tan
                        Dun. <br />
                        <a href="http://www.tandun.com/">
                          http://www.tandun.com/
                        </a>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Freelance Developer, ReadMe Ltd
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        August 2018 - October 2018, Shanghai, China
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Reviewed the outsourced app (AngularJS), spotted 5+
                        critical bugs and provided optimal advice. <br />
                        Shortened 10% lines of the code and made the app 5%
                        faster as a result.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Freelance Web Developer, The Key School
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        July 2018 - August 2018, Shanghai, China
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Designed and launched the early version website with
                        React, NodeJS, Express and Alibaba Cloud alone in 2
                        weeks. <br />
                        <a href="http://www.keyschoolchina.com/">
                          http://www.keyschoolchina.com/
                        </a>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Team Leader, Graphical User Interface Design for
                        Unmanned Aerial Vehicles
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        June 2014 - May 2015, Urbana, IL
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Visualized and embellished the simulated flight results.{" "}
                        <br />
                        This Project belonged to the key programs of UAV
                        research in the ISE Dept. of College of Engineering in
                        UIUC, led by the department head, and sponsored by the
                        United States Armed Force. <br />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Key Member, Graduation Design: Water Jetter Remote
                        Control Design
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        August 2014 - December 2015, Urbana, IL
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Redesigned the control of the jetters and added an
                        econmoically viable wireless remote-control system for
                        Spartan Tool LLC, which is currently used on the
                        products. <br />
                        Took Radio Frequency as the wireless controller,
                        utilized a solenoid valve with a manual override
                        connecting to RF receiver/transmitter to implement water
                        flow operations and the electrical-to-mechanical design
                        for throttle implementation.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subheading"
                        className={classes.sectionSubheading}
                      >
                        Business Group Member, Illini Formula Electric
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionTime}
                      >
                        September 2013 - May 2014, Urbana, IL
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.sectionBody}
                      >
                        Created the business plan for 2014 Formula Electric
                        Competition and prepared annual presentation for Formula
                        SAE.
                      </Typography>
                    </Grid>
                  </Grid>
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
