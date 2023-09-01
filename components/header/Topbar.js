import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Toolbar,
    Hidden,
    List,
    ListItem,
    Typography,
    IconButton,
    Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image'
import Link from 'next/link'


const useStyles = makeStyles(theme => ({
    root: {},
    flexGrow: {
        flexGrow: 1,
    },
    navigationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toolbar: {
        //maxWidth: theme.layout.contentWidth,
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: theme.spacing(0, 2),
    },
    listItem: {
        cursor: 'pointer',
        paddingTop: 0,
        paddingBottom: 0,
    },
    listItemText: {
        flex: '0 0 auto',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
    },
    listItemButton: {
        whiteSpace: 'nowrap',
    },
    iconButton: {
        padding: 0,
        paddingRight: 4,
        '&:hover': {
            background: 'transparent',
        },
    },
    logoContainer: {
        width: 100,
        height: 'auto',
        [theme.breakpoints.up('md')]: {
            width: 120,
            height: 'auto',
        },
    },
    logoImage: {
        width: '100%',
        height: '100%',
    },
}));

const Topbar = props => {
    const { onSidebarOpen, ...rest } = props;

    const classes = useStyles();

    return (
        <Toolbar disableGutters className={classes.toolbar} {...rest}>
            <div className={classes.logoContainer}>
                <Link href="/" title="cvyalogo">
                    <Image
                        className={classes.logoImage}
                        src={"/images/cvya-logo.png"}
                        alt="CvYa"
                        width="100" height="50"
                    />
                </Link>
            </div>

            <div className={classes.flexGrow} />
            <Hidden smDown>
                <List>
                    <ListItem className={classes.listItem}>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            className={[classes.listItemText, "linkedin-opt-btn"]}
                            component="a"
                            href="/cvya-builder"
                        >
                            Build CV
                        </Typography>
                    </ListItem>
                </List>
            </Hidden>
            <Hidden mdUp>
                <IconButton
                    className={classes.iconButton}
                    onClick={onSidebarOpen}
                    aria-label="Menu"
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </Toolbar>
    );
};

Topbar.propTypes = {
    onSidebarOpen: PropTypes.func,
};

export default Topbar;
