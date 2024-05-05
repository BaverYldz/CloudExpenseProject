import React, { useContext, useState, useEffect } from 'react';
import {
    Grid, Card, CardHeader, CardContent, Typography, Divider
} from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard/InfoCard';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { makeStyles } from '@material-ui/core/styles';


import Form from './Form/Form';
import List from './List/List';
import { textAlign } from '@material-ui/system';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    const [currencies, setCurrencies] = useState('');

    useEffect(() => {
        //fca_live_R1OQTdiTHN5mDxpKl1pfOyOkko8hbtnn0h5fJJRS - API KEY to prevent exceed request limit

        const freecurrencyapi = new Freecurrencyapi('fca_live_R1OQTdiTHN5mDxpKl1pfOyOkko8hbtnn0h5fJJRS');
        freecurrencyapi.latest({
            base_currency: 'USD',
            currencies: 'TRY,USD,EUR,GBP,CHF,RUB,CZK,AUD,SGD,DKK,CAD,JPY,PLN,CAD'
        }).then(response => {
            if (response && response.data) {
                const data = response.data;
                const formattedData = Object.entries(data)
                    .map(entry => `${entry[0]}: ${entry[1].toFixed(4)}`)
                    .join('  |  ');
                setCurrencies(formattedData);
            } else {
                console.error('API response is invalid or not formatted correctly.');
            }
        }).catch(error => {
            console.error('Error fetching currency data:', error);
        });
    }, []);


    return (
        <>
            <div>
                <AppBar position="fixed">
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <AssessmentIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{ fontFamily: 'monospace' }}>
                            Portföy Yardımcısı
                        </Typography>
                    </Toolbar>
                    <div className={classes.marquee}>
                        <div className={classes.marqueeContent}>
                            {currencies ? `${currencies} | ${currencies}` : 'Yükleniyor...'}
                        </div>
                    </div>
                </AppBar>
                <Toolbar />
                {/* Bu boş Toolbar, AppBar altındaki içeriğin AppBar tarafından örtülmemesini sağlar */}
            </div>
            <div className={classes.pageContent}> {/* Sayfanın geri kalan içeriğini içeren div */}
                <Card className={classes.root}>
                    <CardHeader title='Portföy' className={classes.promo} style={{ textAlign: 'center' }}></CardHeader>
                    <CardContent>
                        <Typography align='center' variant='h5'>Toplam Bakiye TL {balance}</Typography>
                        <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                            <InfoCard />
                        </Typography>
                        <Divider className={classes.divider} />
                        <Form />

                    </CardContent>

                    <CardContent className={classes.cardContent}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <List />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    );

};

export default Main;
