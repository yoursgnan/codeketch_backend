const logger = require('../utils/logger')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: true,
            ca: `-----BEGIN CERTIFICATE-----
    MIIEQTCCAqmgAwIBAgIUTUrxc2T8xjFAoNxh1PbFgu//qugwDQYJKoZIhvcNAQEM
    BQAwOjE4MDYGA1UEAwwvNmRhNjRlMzAtZTJmNi00MmEwLTkwMmEtOWRjY2I3MmMz
    MGRlIFByb2plY3QgQ0EwHhcNMjQwNTA0MTAzNDQ5WhcNMzQwNTAyMTAzNDQ5WjA6
    MTgwNgYDVQQDDC82ZGE2NGUzMC1lMmY2LTQyYTAtOTAyYS05ZGNjYjcyYzMwZGUg
    UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANVM6PQW
    gacDPdP+J60Tf/HAlH5Oc9eAktxhZ9ON9YIVw24CBbIhK5J2+pFLfTiL4p4nMzEL
    39SvpKU+Pr9WgjpDcJFRbxW7HCcbsyTB82K2p8yrXDoNNG1/ZP3MQ1oBF4dCoTrw
    WZvwf6g5qzCrNJjcBpkG+0R83N5P4edcolqxpnR1zn8jUSyXOHWvOx3QAJ4rv/hS
    qPHQ15xyUaBIRCRb465JM4We3UO89zTswA85EctHeTPcyj4/80zKtYyakBkLVZ/+
    8aeKBshannYqMNWgbODP0o8iX9hsk8PSRRyLn61IuTMtlP5CSbOglSjrSIJkbjkU
    Xkcu7Y9n9QH/kH4j6gi9XaYqb+wyU76sTVEG4TNM7bWS+lb5Fcx4uVHEbQlXmxu1
    CdY9tbPmOjuSGHKXJ16sGVXDKrlS3fe+EkbdKwOfXA4rYZQbYKgUoYV597U0JBHj
    KiDb1AV+AB3f+jFo+XtB8xpaH38R2VYx6gL7Fp2E8IVo2eimWFFRfMR3kwIDAQAB
    oz8wPTAdBgNVHQ4EFgQUBcEj6qqu1Hxbtbl31HmRlBejExwwDwYDVR0TBAgwBgEB
    /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABz4MVHZbstNnl1C
    TNfKXPwl58zmuz/2Ln2CkLR83uX0S07X2gY5Ycm5XL7UpstI37EIy8zs/C7FLMBS
    okaMrH76UopRIpL4vGxy9Epxnp+DkxDf6i2+BifWKCyif+Yzoqwr7FgviIAbvYWS
    dKF8kozdIWsco+5Ls1F34saa9KaoiLkmdEnVDYQJhCUJjHK+spAlCeyX1qvIJVvI
    mf3FQbyeiES2iD+zMplDbnH4Lk7ZNBYmGHKp+8xERCA13K3f+xfxmwtHOCqxZwqF
    bd1nyLX1NeGjjnGZLHjeZweUcAbzKmY4s9xQ1ybdaWTSqnIKt6mXDWXGxs0Q9gqn
    zwhpbLADqjZ/datc6ZYeCl/NswU6vWmGSepzf2GfluLI/gswTMETMAyJvS1Cy/BY
    UqQEsxQjCwwuZ0t0GG3Yi/FHwLlxdcBWco4qUKsCNIKQMlNc1c0/oeXh35LBmVPC
    YWLAAGuWl353XPF24mEA7+29zk6E2kv3k0arFIsg8+xS0mVc3g==
    -----END CERTIFICATE-----`,
        }
    },
    
})

sequelize.authenticate()
.then(() => {
    logger.info('Connected to database successfully')
})
.catch(err => {
    console.log(`Connecting to host ${process.env.DATABASE_HOST}`)
    logger.info(`Failed to connect the database ${process.env.DATABASE}`)
});

module.exports = sequelize
