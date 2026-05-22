import { getCompleteRouteDetails } from '../../models/model.js';

const getMonthAbbreviation = (monthNumber) => {
    const monthAbbreviations = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthAbbreviations[monthNumber - 1] || 'Unknown';
}

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getCompleteRouteDetails(routeId);
    details.operatingMonths = details.operatingMonths.map(getMonthAbbreviation);

    res.render('routes/details', {
        title: 'Route Details',
        details
    });
};