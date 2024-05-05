import React, { useContext, useState, useEffect } from 'react';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, Button } from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard/InfoCard';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';



import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    const [currencies, setCurrencies] = useState('');

    useEffect(() => {
        //fca_live_R1OQTdiTHN5mDxpKl1pfOyOkko8hbtnn0h5fJJRS - API KEY to prevent exceed request limit
        
        const freecurrencyapi = new Freecurrencyapi('Api Key');
        freecurrencyapi.latest({
            base_currency: 'USD',
            currencies: 'TRY,USD,EUR,GBP,CHF,RUB,CZK,AUD'
        }).then(response => {
            if (response && response.data) {
                const data = response.data;
                const formattedData = Object.entries(data)
                    .map(entry => `${entry[0]}: ${entry[1].toFixed(4)}`)
                    .join(' | ');
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
            <Card className={classes.root}>
                <CardHeader title='Portföy' className={classes.promo}></CardHeader>
                <CardContent>
                    <Typography align='center' variant='h5'>Toplam Bakiye TL {balance}</Typography>
                    <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                        <InfoCard />
                    </Typography>
                    <Divider className={classes.divider} />
                    <Form />
                    <div className={classes.marquee}>
                        <div className={classes.marqueeContent}>
                            {currencies || 'Yükleniyor...'}
                        </div>
                    </div>
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};

export default Main;
