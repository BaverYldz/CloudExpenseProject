import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../useTransactions'
import '../../assets/fonts/DejaVuSansMono.ttf'

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);
    return (
        <Card className={title === 'Gelir' ? classes.income : classes.expense}>
            <CardHeader title={title} style={{ textAlign: 'center', paddingBottom: 0, marginTop: '12px'}} />
            <CardContent style={{marginBottom: '20px'}}>
                <Typography variant="h5" style={{ textAlign: 'center', paddingBottom: '9px' }} >₺ {total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
};

export default Details
