import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Spotify Wrapper', () => {
    describe('smoke tests', () => {
        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the search albums method', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exist the search artists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the search tracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the search playlists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {
        it('should call fetch function', () => {
            const fetchedStub = sinon.stub(global, 'fetch');
            const artists = search();

            expect(fetch).to.have.been.calledOnce;
        });
    });
});
