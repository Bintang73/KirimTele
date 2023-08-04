const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');
const delay = require('delay');
const TelegramBot = require('node-telegram-bot-api');
const chalk = require('chalk');
const moment = require('moment');

const token = '5991506616:AAGI7HzSmD3tH9RfpmS5ObAOj_zhvkbwNBo';

const bot = new TelegramBot(token, { polling: true });

const url = 'mongodb+srv://st4rz:%40Aqua1liter@cluster0.znku05t.mongodb.net/?retryWrites=true&w=majority';

const dbName = 'db_tiktok';

const client = new MongoClient(url);

async function main() {
    await client.connect();

    return 'done.';
}

async function downTT(idMed) {
    const getUrl = await fetch(`https://api16-normal-c-useast2a.tiktokv.com/aweme/v1/aweme/detail/?aweme_id=${idMed}&origin_type=inbox&request_source=0&os_api=25&device_type=SM-G988N&ssmix=a&manifest_version_code=290401&dpi=320&region=ID&carrier_region=ID&app_name=musically_go&version_name=29.4.1&timezone_offset=25200&ts=1681997222&ab_version=29.4.1&ac2=wifi&ac=wifi&app_type=normal&channel=googleplay&update_version_code=290401&_rticket=1681999248109&device_platform=android&iid=7224116743646594822&build_number=29.4.1&locale=id-ID&op_region=ID&version_code=290401&timezone_name=Asia%2FBangkok&cdid=84153992-67b8-4e2c-9bd6-5a6295f9ba81&openudid=2b67b869938e0fe8&device_id=6836685929336817158&sys_region=ID&app_language=id&resolution=1080*1920&device_brand=samsung&language=id&os_version=7.1.2&aid=1340`, {
        headers: {
            'accept-encoding': 'application/json',
            'cookie': `store-idc=useast2a; store-country-code=id; install_id=7224116743646594822; ttreq=1$25ca8ec4935df085b393f3257ebb4ec8f9caca4a; odin_tt=869a080363fdcd06ec0cc91a460a627f4197d490d465245be555c343dbe9745e7fcb0ecb0493ffd84caabf9a9a7e396fbaa81c6d0cab8c5d677740b889075cd5602fdf8603c4e0b326902b0d2d08124c; cmpl_token=AgQQAPOgF-ROXbR_2X5k5Z08xIFQksyXf4QrYMhYAA; d_ticket=3efec38c0b94f3a3f2c288a8dd3352dde106b; sid_guard=f5e7c4bcc55a7c2e6f8a766a47caa358%7C1681996112%7C5183999%7CMon%2C+19-Jun-2023+13%3A08%3A31+GMT; uid_tt=36b3c5bbba9c41b1667bc3e8b10702dad0a3ed14376dc6a6ce55d22fc098d542; uid_tt_ss=36b3c5bbba9c41b1667bc3e8b10702dad0a3ed14376dc6a6ce55d22fc098d542; sid_tt=f5e7c4bcc55a7c2e6f8a766a47caa358; sessionid=f5e7c4bcc55a7c2e6f8a766a47caa358; sessionid_ss=f5e7c4bcc55a7c2e6f8a766a47caa358; store-country-code-src=uid; msToken=zO4ZHdqJ7gQM6VS7dHbGxY_e25_e1RHfPjpoNSqCGV055jYPrDZOR8OCGK115Anbk1Z34KqpunJ9VqvwJwbeOuC5fOfqRMqp8Thgb_QX_eBfLJ2QJV5heTtoCg==`,
            'x-argus': 'RR/UIHLWZOU4YsKXVNYMUjVC/HGrgl8YHrItf4wjCW+9epOJNSiabe0lvvQkGkLdd8RuGrPM7gE61QDyPgbZ3WajcCDvmRiuyjcqfmZgx6Wg+SDZ1SoTGotRYBI32XzkCce4UNPLbJ2gC7E2mh3wGL7lipjnWSzoTiFb12fWYy+p++JyOlUK1mbst9ZaaWQo3GvSsUpXrXNrBmFDNxUb7m9a7X/NTjO/aaLOrAC855Pk+Q3t58Yo9pLVbvKCfpkrD5M5w91thI5Vn3N+H8fyP7WLLUkL/J4kwj73CDolCYTUsQ==',
            'x-ladon': 'bBztJWS06fpT28q1q2lJKzmAD0U/s4dLi5gd8Frfdg1EtIn9'
        }
    })
    const getHtml = await getUrl.json()
    const res = await getHtml.aweme_detail.video.bit_rate[0].play_addr.url_list
    return res
}

async function addMember(name_json) {
    const collection = client.db(dbName).collection('user_tag');
    await collection.insertOne(name_json);

    return 'sukses add.';
}

async function checkMember(idmedia) {
    const collection = client.db(dbName).collection('user_tag');
    const cls = await collection.findOne({ idMedia: idmedia });

    return cls;
}

async function getNotif() {
    const getUrl = await fetch('https://api16-normal-c-useast2a.tiktokv.com/aweme/v1/notice/multi/?group_list=%5B%7B%22group%22%3A36%2C%22min_time%22%3A0%2C%22max_time%22%3A0%2C%22count%22%3A20%2C%22is_mark_read%22%3A1%7D%5D', {
        headers: {
            'accept-encoding': 'application/json',
            'cookie': `store-idc=useast2a; store-country-code=id; install_id=7224116743646594822; ttreq=1$25ca8ec4935df085b393f3257ebb4ec8f9caca4a; odin_tt=869a080363fdcd06ec0cc91a460a627f4197d490d465245be555c343dbe9745e7fcb0ecb0493ffd84caabf9a9a7e396fbaa81c6d0cab8c5d677740b889075cd5602fdf8603c4e0b326902b0d2d08124c; cmpl_token=AgQQAPOgF-ROXbR_2X5k5Z08xIFQksyXf4QrYMhYAA; d_ticket=3efec38c0b94f3a3f2c288a8dd3352dde106b; sid_guard=f5e7c4bcc55a7c2e6f8a766a47caa358%7C1681996112%7C5183999%7CMon%2C+19-Jun-2023+13%3A08%3A31+GMT; uid_tt=36b3c5bbba9c41b1667bc3e8b10702dad0a3ed14376dc6a6ce55d22fc098d542; uid_tt_ss=36b3c5bbba9c41b1667bc3e8b10702dad0a3ed14376dc6a6ce55d22fc098d542; sid_tt=f5e7c4bcc55a7c2e6f8a766a47caa358; sessionid=f5e7c4bcc55a7c2e6f8a766a47caa358; sessionid_ss=f5e7c4bcc55a7c2e6f8a766a47caa358; store-country-code-src=uid; msToken=zO4ZHdqJ7gQM6VS7dHbGxY_e25_e1RHfPjpoNSqCGV055jYPrDZOR8OCGK115Anbk1Z34KqpunJ9VqvwJwbeOuC5fOfqRMqp8Thgb_QX_eBfLJ2QJV5heTtoCg==`
        }
    })
    const getHtml = await getUrl.json()
    return getHtml
}

(async() => {
    main()

    while (true) {
        const getmore = await getNotif()
        const idMedia = getmore.notice_lists[0].notice_list[0].at.comment.aweme_id
        const getcheck = await checkMember(idMedia)
        if (getcheck == null) {
            const totalNotif = getmore.notice_lists[0].total
            const getName = getmore.notice_lists[0].notice_list[0].at.user_info.unique_id
            const getId = getmore.notice_lists[0].notice_list[0].user_id

            const xaxa = {
                totalNotif,
                getName,
                getId,
                idMedia
            }

            const resp = await addMember(xaxa)
            console.log(resp)

            const downTiktok = await downTT(idMedia)
            bot.sendVideo('858579570', downTiktok[0]);
        } else {
            console.log(`[${moment().format("HH:mm:ss")}]`, chalk.greenBright(`Notif Not Found :/`))
        }
        await delay(5000)
    }
})()