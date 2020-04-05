'use strict';

const { Contract } = require('fabric-contract-api');

class InvestmentContract extends Contract {

    async InitLedger(ctx) {
        
        const appleAddress = '0xF661B71BeC9a6dAac0bd5E897c3d242dF18eDc11';
        const googleAddress = '0x94FB29447e4b8FBA43e90eA46a2f51C2191f4Fea';
        const facebookAddress = '0x21A4a0D1499A20D503969190C5D98E4Ab51ca4C4';

        const companies = [
            {
                addr: appleAddress,
                name: "Apple"
            },
            {
                addr: googleAddress,
                name: "Google"
            },
            {
                addr: facebookAddress,
                name: "Facebook"
            }
        ];

        const papers = [
            {
                id: 1,
                issuer: companies[0].addr,
                owner: companies[0].addr,
                state: 'Issued',
                price: 200
            },
            {
                id: 2,
                issuer: companies[1].addr,
                owner: companies[1].addr,
                state: 'Issued',
                price: 50
            },
            {
                id: 3,
                issuer: companies[0].addr,
                owner: companies[1].addr,
                state: 'Trading',
                price: 20
            },
            {
                id: 4,
                issuer: companies[0].addr,
                owner: companies[2].addr,
                state: 'Trading',
                price: 2000
            },
            {
                id: 5,
                issuer: companies[2].addr,
                owner: companies[0].addr,
                state: 'Trading',
                price: 800
            },
            {
                id: 6,
                issuer: companies[1].addr,
                owner: companies[2].addr,
                state: 'Trading',
                price: 100
            },
            {
                id: 7,
                issuer: companies[0].addr,
                owner: companies[0].addr,
                state: 'Redeemed',
                price: 50
            },
            {
                id: 8,
                issuer: companies[0].addr,
                owner: companies[0].addr,
                state: 'Redeemed',
                price: 400
            }
        ];
        
        for (let company of companies) {
            await ctx.stub.putState(company.addr, Buffer.from(JSON.stringify(company)))
        }

        for(let paper of papers) {
            await ctx.stub.putState(paper.id.toString(), Buffer.from(JSON.stringify(paper)));
        }

    }
    
    async getPapers(ctx) {
        const startKey = '1';
        const endKey = '8';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async getPaper(ctx, paperId) {
        const paper = await ctx.stub.getState(paperId);
        if(!paper || paper.length === 0) {
            throw new Error(`Paper with id=${paperId} doesn't exist!`);
        }
        return paper.toString();
    }
    
    async buy(ctx, id, newOwner) {
        const paperBytes = await ctx.stub.getState(id);
        if (!paperBytes || paperBytes.length === 0) {
            throw new Error(`Paper with id=${paperId} doesn't exist!`);
        }
        const paper = JSON.parse(paperBytes.toString());
        if(paper.state != 'Issued' || paper.state != 'Trading') {
            throw new Error('Paper is in redeemed state, transaction cannot be completed');
        }
        paper.owner = newOwner;
        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(paper)));
    }
}

module.exports = InvestmentContract;
