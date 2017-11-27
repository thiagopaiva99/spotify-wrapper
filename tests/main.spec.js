import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Spotify Wrapper', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
        fetchedStub.restore();
    });

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
            const artists = search();

            expect(fetch).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            context('passing one type', () => {
                const artists = search('Nirvana', 'artist');
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=artist');

                const albums = search('Nirvana', 'album');
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=album');
            });

            context('passing more than one type', () => {
                const artistsAndAlbums = search('Nirvana', ['artist', 'album']);
                expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=artist,album');
            });
        });

        it('should return the JSON data from the Promise', () => {
            promise.resolves({ body: 'json' });

            const artists = search('Nirvana', 'artist');
            expect(artists.resolveValue).to.be.eql({ body: 'json' });
        });
    });
    
    describe('Search Artists', () => {
        it('should call fetch function', () => {
            const artists = searchArtists('Nirvana');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const nirvana = searchArtists('Nirvana');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=artist');

            const audioslave = searchArtists('Audioslave');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Audioslave&type=artist');
        });
        
    });

    describe('Search Albums', () => {
        it('should call fetch function', () => {
            const albums = searchAlbums('Nirvana');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const nirvana = searchAlbums('Nirvana');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=album');

            const audioslave = searchAlbums('Audioslave');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Audioslave&type=album');
        });
    });

    describe('Search Tracks', () => {
        it('should call fetch function', () => {
            const tracks = searchTracks('Nirvana');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const nirvana = searchTracks('Nirvana');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=track');

            const audioslave = searchTracks('Audioslave');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Audioslave&type=track');
        });
    });

    describe('Search Playlists', () => {
        it('should call fetch function', () => {
            const playlists = searchPlaylists('Nirvana');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {
            const nirvana = searchPlaylists('Nirvana');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Nirvana&type=playlist');

            const audioslave = searchPlaylists('Audioslave');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Audioslave&type=playlist');
        });
    });
});
