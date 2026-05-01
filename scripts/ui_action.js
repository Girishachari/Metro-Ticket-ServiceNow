current.payment_status = 'Paid';

current.qr_code = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket ID: " + current.sys_id;

current.update();

gs.addInfoMessage("Payment Successful");

action.setRedirectURL(current);
