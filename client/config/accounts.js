// first, remove configuration entry in case service is already configured
Accounts.ui.config({
    requestPermissions: {
        google: [
            'https://www.googleapis.com/auth/fitness.activity.read',
            'https://www.googleapis.com/auth/fitness.activity.write',
            'https://www.googleapis.com/auth/fitness.location.read',
            'https://www.googleapis.com/auth/fitness.location.write',
            'https://www.googleapis.com/auth/fitness.body.read',
            'https://www.googleapis.com/auth/fitness.body.write'
        ]
    },
    requestOfflineToken: {
        google: false
    }
});
