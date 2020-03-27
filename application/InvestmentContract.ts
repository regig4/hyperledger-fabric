import { Contract, Context } from 'fabric-contract-api';
import { Company } from './Company';
import { Paper } from './Paper';
import { PaperState } from './PaperState';

export class InvestmentContract extends Contract {

    appleAddress = '0xF661B71BeC9a6dAac0bd5E897c3d242dF18eDc11';
    googleAddress = '0x94FB29447e4b8FBA43e90eA46a2f51C2191f4Fea';
    facebookAddress = '0x21A4a0D1499A20D503969190C5D98E4Ab51ca4C4';

    public async initLedger(ctx: Context) {
        const companies: Company[] = [
            {
                addr: this.appleAddress,
                name: 'Apple'
            },
            {
                addr: this.googleAddress,
                name: 'Google'
            },
            {
                addr: this.facebookAddress,
                name: 'Facebook'
            }
        ]

        const papers: Paper[] = [
            {
                id: 1,
                issuer: companies[0].addr,
                owner: companies[0].addr,
                state: PaperState.Issued,
                price: 200
            },
            {
                id: 2,
                issuer: companies[1].addr,
                owner: companies[1].addr,
                state: PaperState.Issued,
                price: 50
            },
            {
                id: 3,
                issuer: companies[0].addr,
                owner: companies[1].addr,
                state: PaperState.Trading,
                price: 20
            },
            {
                id: 4,
                issuer: companies[0].addr,
                owner: companies[2].addr,
                state: PaperState.Trading,
                price: 2000
            },
            {
                id: 5,
                issuer: companies[2].addr,
                owner: companies[0].addr,
                state: PaperState.Trading,
                price: 800
            },
            {
                id: 6,
                issuer: companies[1].addr,
                owner: companies[2].addr,
                state: PaperState.Trading,
                price: 100
            },
            {
                id: 7,
                issuer: companies[0].addr,
                owner: companies[0].addr,
                state: PaperState.Redeemed,
                price: 50
            },
            {
                id: 8,
                issuer: companies[0].addr,
                owner: companies[0].addr,
                state: PaperState.Redeemed,
                price: 400
            }
        ];

        for(let company of companies)
            await ctx.stub.putState(company.addr, Buffer.from(JSON.stringify(company)));
        
        for(let paper of papers) 
            await ctx.stub.putState(paper.id.toString(), Buffer.from(JSON.stringify(paper)));

    }


    public async getPapers(ctx: Context): Promise<string> {
        const papers = [];
        for await (const {key, value} of ctx.stub.getStateByRange('1', '8'))
        {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            papers.push({ Key: key, Record: record });
        }
        console.info(papers);
        return JSON.stringify(papers);
    }
}