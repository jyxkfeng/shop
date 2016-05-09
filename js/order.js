function gotoPay(obj) {
    var ordernumber = $(obj).attr("ordernumber");
    var shopCode = $(obj).attr("shopCode");
    var payType = $(obj).attr('payType');
    var xHref = $.trim($(obj).attr('xHref'));
    if (shopCode == undefined) {
        shopCode = "";
    }

    $.get("./ajax/GateWay.aspx?action=ACAP&ordernumber=" + ordernumber + "&shopCode=" + shopCode, function (json) {
        json = JSON.parse(json);
        if (json.status == 'success') {
            switch (payType) {
                case 'wxpay':
                    window.location.href = xHref;
                    break;
                case 'alipay':
                    window.location.href = xHref;
                    break;
                case 'def':
                default:
    $.get("./ajax/GateWay.aspx?action=gotoPay&ordernumber=" + ordernumber + "&shopCode=" + shopCode, function (data) {
        $("#pay").html(data);
    });                                
                    break;
            }
        } else {
            alert(json.msg);
        }
    });                                
}
function orderCancel(obj) {
    var ordernumber = $(obj).attr("ordernumber");
    $.get("./ajax/GateWay.aspx?action=orderCancel&ordernumber=" + ordernumber, function (data) {
        if (data == "成功") {
            location.reload();
        }
    });
}
function okDelivery(obj, retailStoreId, staffCustomerId, takeOwnStatus) {
    var ordernumber = $(obj).attr("ordernumber");
    $.get("./ajax/GateWay.aspx?action=GOODSJUDE&ordernumber=" + ordernumber, function (data) {
        if (data == "ok") {
            $.get("./ajax/GateWay.aspx?action=okDelivery&ordernumber=" + ordernumber + "&retailStoreId=" + $.trim(retailStoreId) + "&staffCustomerId=" + $.trim(staffCustomerId) + "&takeOwnStatus=" + $.trim(takeOwnStatus), function (data) {
                if (data == "成功") {
                    location.reload();
                }
            });
        } else
        {
            if (confirm("该订单存在退款未完成商品是否确认收货？"))
            {
                $.get("./ajax/GateWay.aspx?action=OKGOODSDELIVERY&ordernumber=" + ordernumber + "&retailStoreId=" + $.trim(retailStoreId) + "&staffCustomerId=" + $.trim(staffCustomerId) + "&takeOwnStatus=" + $.trim(takeOwnStatus), function (data) {
                    if (data == "成功") {
                        location.reload();
                    }
                });
            }
        }
    });
}
