function collapseParentSibling(item) {
    if ($(item).attr('src').indexOf('piu') >= 0) {
        $(item).parent().nextAll('.collapsibleDiv').attr('style', '');
        $(item).attr('src', 'images/meno.gif');
    } else {
        $(item).parent().nextAll('.collapsibleDiv').attr('style', 'display:none');
        $(item).attr('src', 'images/piu.gif');
    }
}

function customFocus(id) {
    $('#FocusId').val($('#' + id).attr('name'));
}

function numericValue(numericElement, geography) {
    if ($.isNumeric($('#' + numericElement).val().replace(/,/g, ''))){
        $('#' + numericElement).val($('#' + numericElement).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
        return $('#' + numericElement).val().replace(/,/g, '');
    } else {
        return 0;
    }
}

//  Personal Assets
function personalAssets(geography) {
    var totAssets = 0;
    if ($.isNumeric($('#cash').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('cash', geography));
    }
    if ($.isNumeric($('#securities').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('securities', geography));
    }
    if ($.isNumeric($('#retirement').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('retirement', geography));
    }
    if ($.isNumeric($('#residence').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('residence', geography));
    }
    if ($.isNumeric($('#investment').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('investment', geography));
    }
    if ($.isNumeric($('#vehicles').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('vehicles', geography));
    }
    if ($.isNumeric($('#otherassets').val().replace(/,/g, ''))) {
        totAssets += parseFloat(numericValue('otherassets', geography));
    }
    if($.isNumeric(totAssets)){
        $('#TotalPersonalAssets').val(totAssets.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    return true;
}

//  Personal Liabilities
function personalLiabilities(geography) {
    var tot = 0;
    if ($('#mortgage').val()) {
        tot += parseFloat(numericValue('mortgage', geography));
    }
    if ($('#othermortgage').val()) {
        tot += parseFloat(numericValue('othermortgage', geography));
    }
    if ($('#revolvingdebt').val()) {
        tot += parseFloat(numericValue('revolvingdebt', geography));
    }
    if ($('#installmentdebt').val()) {
        tot += parseFloat(numericValue('installmentdebt', geography));
    }
    if ($('#otherliabilities').val()) {
        tot += parseFloat(numericValue('otherliabilities', geography));
    }
    $('#TotalPersonalLiabilities').val(tot.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    return true;
}

//  Net Worth
function netWorth(geography) {
    var netWorth = parseFloat(numericValue('TotalPersonalAssets', geography)) - parseFloat(numericValue('TotalPersonalLiabilities', geography));
    if($.isNumeric(netWorth)){
        $('#networth').val(netWorth.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    return true;
}

//  Weekly Metrics
function weeklyMetrics(geography) {
    var tot = 0;
    if ($.isNumeric($('#personalexpenses').val().replace(/,/g, ''))) {
        tot += parseFloat(numericValue('personalexpenses', geography));
    }
    if ($.isNumeric($('#businessexpenses').val().replace(/,/g, ''))) {
        tot += parseFloat(numericValue('businessexpenses', geography));
    }
    if ($.isNumeric(tot.toFixed(2))) {
        $('#WeeklyExpenses').val(tot.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    return true;
}

//  Breakeven
function breakEven(geography) {
    var tot = 0;
    if($.isNumeric($('#salescurrent').val().replace(/,/g, ''))){
        tot = parseFloat($('#salescurrent').val().replace(/,/g, ''));
    }
    if($.isNumeric($('#salesincrease').val().replace(/,/g, ''))){
        tot += parseFloat($('#salesincrease').val().replace(/,/g, ''));
    }
    if ($.isNumeric(tot.toFixed(2))) {
        $('#SalesProjected').val(tot.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }


    var beamt = 0;
    if ($.isNumeric($('#WeeklyExpenses').val().replace(/,/g, '')) && $.isNumeric($('#breakevenpercent').val())) {
        beamt = (parseFloat(numericValue('WeeklyExpenses', geography)) / (parseFloat(numericValue('breakevenpercent', geography)) / 100));
    }
    if($.isNumeric(beamt)){
        $('#BreakEvenAmount').val(beamt.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }


    var paidsales = 0;
    if ($.isNumeric($('#SalesProjected').val().replace(/,/g, '')) && $.isNumeric($('#BreakEvenAmount').val().replace(/,/g, ''))) {
        paidsales = parseFloat(numericValue('SalesProjected', geography)) - parseFloat(numericValue('BreakEvenAmount', geography));
    }
    if($.isNumeric(paidsales)){
        $('#PaidSales').val(paidsales.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }


    var paidsalespct = 0;
    $.isNumeric()
    if ( $.isNumeric($('#PaidSales').val().replace(/,/g, '')) && $.isNumeric($('#SalesProjected').val().replace(/,/g, '')) ) {
        paidsalespct = (parseFloat(numericValue('PaidSales', geography)) / parseFloat(numericValue('SalesProjected', geography)) + 1) * 100;
    }
    if ($.isNumeric(paidsalespct)) {
        $('#PaidSalesPercent').val(paidsalespct.toFixed(0));
    }

    if ($.isNumeric($('#RevolvingAccountCollections').val().replace(/,/g, ''))) {
        numericValue('RevolvingAccountCollections', geography);
    }
    return true;
}

//  Business Assets
function businessAssets(geography) {
    var totAssets = 0
    if ($.isNumeric($('#RAbalance').val().replace(/,/g, ''))) {
        totAssets += parseFloat($('#RAbalance').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#inventory').val().replace(/,/g, ''))) {
        totAssets += parseFloat($('#inventory').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#otherbusinessassets').val().replace(/,/g, ''))) {
        totAssets += parseFloat($('#otherbusinessassets').val().replace(/,/g, ''));
    }
    if ($.isNumeric(totAssets.toFixed(2))) {
        $('#TotalBusinessAssets').val(totAssets.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    return true;
}

//  Business Liabilities
function businessLiabilities(geography) {
    var tot = 0;
    if ($.isNumeric($('#businessloan').val().replace(/,/g, ''))) {
        tot += parseFloat($('#businessloan').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#SOCexposure').val().replace(/,/g, ''))) {
        tot += parseFloat($('#SOCexposure').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#SOTinvoicebalance').val().replace(/,/g, ''))) {
        tot += parseFloat($('#SOTinvoicebalance').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#installmentdebt').val().replace(/,/g, ''))) {
        tot += parseFloat($('#installmentdebt').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#otherloan').val().replace(/,/g, ''))) {
        tot += parseFloat($('#otherloan').val().replace(/,/g, ''));
    }
    if ($.isNumeric(tot.toFixed(2))) {
        $('#TotalBusinessLiabilities').val(tot.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    return true;
}

//  Business Ratios
function businessRatios(geography) {
    var equity = 0.0;
    if ($.isNumeric($('#TotalBusinessAssets').val().replace(/,/g, ''))) {
        equity = parseFloat($('#TotalBusinessAssets').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#TotalBusinessLiabilities').val().replace(/,/g, ''))) {
        equity -= parseFloat($('#TotalBusinessLiabilities').val().replace(/,/g, ''));
    }
    if ($.isNumeric(equity.toFixed(2))) {
        $('#BusinessNetWorth').val(equity.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    var equityratio = 0;
    if ($.isNumeric($('#BusinessNetWorth').val().replace(/,/g, ''))) {
        equityratio = parseFloat($('#BusinessNetWorth').val().replace(/,/g, ''));
    }
    if ($.isNumeric($('#TotalBusinessAssets').val().replace(/,/g, ''))) {
        equityratio = equityratio / parseFloat($('#TotalBusinessAssets').val().replace(/,/g, '')) * 100;
    }
    if ($.isNumeric(equityratio.toFixed(2))) {
        $('#EquityRatio').val(equityratio.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    }
    return true;
}

function CalcInterestRate(geography) {
    var totalrate = parseFloat(numericValue('InterestRateBase', geography)) + parseFloat(numericValue('InterestRateMargin', geography));
    if($.isNumeric(totalrate)){
        $('#InterestRate').val(totalrate.toFixed(2));
    }
}

function format2DecimalText(elementId) {
    if ($.isNumeric($('#' + elementId).text())) {
        $('#' + elementId).text(parseFloat($('#' + elementId).text()).toFixed(2));
    }
}