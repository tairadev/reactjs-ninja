'use strict';

import { expect } from 'chai';
import sum from './sum';

describe('# TESTING SUM', () => {
    it('Should be a function', () => {
        expect(sum).to.be.a('function')
    })
    
    it('sum(1, 2) should return 3', () => {
        expect(sum(1, 2)).to.be.equal(3)
    })
})