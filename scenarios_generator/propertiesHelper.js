const getRoleName = role => {
  switch (role) {
    case 'anon':
      return 'anon';
    case 'passenger':
      return 'passenger';
    case 'carrier':
      return 'carrier';
    case 'manager':
      return 'manager';
    default:
      throw new TypeError('The "role" argument is incorrect!');
  }
};

const getPageAction = action => {
  switch (action) {
    case 'login':
      return { pageLabel: 'login_page', urlAction: '/account/login' };
    case 'registration':
      return { pageLabel: 'registration_page', urlAction: '/account/new' };
    case 'new transfer':
      return { pageLabel: 'new_transfer_page', urlAction: '/transfers/new' };
    case 'account settings':
      return { pageLabel: 'account_settings_page', urlAction: '/account' };
    case 'cabinet instructions':
      return { pageLabel: 'cabinet_instructions_page', urlAction: '/carrier/cabinet/instructions' };
    default:
      throw new TypeError('The "page" argument is incorrect!');
  }
};

module.exports =
{
  getRoleName,
  getPageAction,
};
