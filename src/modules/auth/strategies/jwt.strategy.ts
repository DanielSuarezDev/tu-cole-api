import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log('************************** 1', Strategy);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDk5TPJE1Len+U7\nprie5PBdDLKG3oa1f4hphhhwi0pMH9RwPtmHP9QmZinyu6p10tMLP/0KB0G8zH5S\n84/FwqTxWAC1o6lLaxTSwS2KWomMv4VSY8j+5RfCQnDsattZOReb9YVU2sk/l+/F\nWGc9DhhSH8bggM3Ni//43UBwT1dFq1K5Ie2E6mxsps/cja8SaSheZpxge24dV+k9\nQs3X9O2pghfrhrzYAN4ZWgAALCq6TfSqW9qCQJPmHc1VjyvZwbw/uZ1n+RvRIr01\nbfS3EtlwAvhEa8HCRxBhvU1F6dtyxQA1Ch5X5qN9s2GhhR2egEm9ZCPiL4wBKAcW\nhFSZ5iYfAgMBAAECggEAEnvr2vtY1X+GDHN3NJBPqhlMusAc6BU8woDArSiiaalR\nsiAb2Dna+6AubQVN9lEobR/QDaTuYGexyn2+s31Mwpc/tMCwUCsn4FPB8LVE/FJk\nWss8v6YSbW6IyJ63HepoB1Z5W5PbbUDrbOf/APAyyJb7rBowBGmffyJRgir2D5Bn\nd20HNWsIAUF402a/kaafjIzfybcRqtGTec+1DwDwiLAD3aGYdPUYR5xU6op1qOnF\nJx2jZ4kc7rKnnP2nxTXmZXE+14lYm6+nz8Jlcz52RzG06qS03pvWRC2ljCe1HCdT\nCH14DR1sEW2jHOeWRuQUaw2SVuaWWZdnJA3PGuqCGQKBgQDyJAFcdbgHO/GBsigD\nxrrL3W70wGlxhnfCscsUykTaaXGIa5T4GMxQTtY/fpPiKVvs+PTSf2ODoSohtjUq\nCFT/PaOHrPumLBu0TC6Mdozp6I63wzOkz2YcR+Hd/5CQk1hf+JJhLRz4eiuenTuv\nsk6Dr5Z/KBswxOSnJukHCFf0FQKBgQDx/x5HUa4wzkfaHI0X98dkZWg/hENrm7N0\n8/VJT/UTadTXyNGIUd/TwEMyzIl0sg8x8XkY4nIK2D98fkCTNtggcbKN2So+sVE6\nsqyWqHZiDt0iB5krq7jHVxWCohTuIm46sk892z3VDmE/a0j4GRD2a1rezHLAAF/p\nNZZH3746YwKBgQCEeVxhSGpBUvNDIMQxpLUnueLtdqN5n7a/xuOzYSIgWFXr6+fZ\ngD+vpCIlJMwljLklQeM3kshQCIlzXith7qMJ7aAdJ2+aL0GM96zz3hwkEL6cHOiR\nP4K+8DjLavmdj29nOihjj/nsm3Jn2eAAtM2t0A/HS5rsqJvsMyaEWXU9LQKBgQCs\niV6HLt9pAMoN4mlee1T4aazIDH8dS+fJLN7npFBxxPTx3MY30VgqW1wN7fLa9tEK\npMXYTitNPB0Xn9Reoa26hBXwOLN7+2SU2yteR0IQa9SSHKTClC6sQZSejP0rQ/Uf\neF4zFguhyhzf4Jgn+4cyihxB2ba+2gWH+qLpH8c7TQKBgQDml24BUhzpOV3VgEhB\nxdfRIq/skFZdnVtzhunC/tawWGBdvOTIm2cvPp9jBInOaipgv73SVRat0oAhqvCI\nqoCaBj/f0dPYE7/JChniDTzZ447l6YVH/WEpM8hP1URHGdB1z9ZkT+tBioei5IdB\nhaPGZ88skBGHbkBCNb0q1faZcw==\n-----END PRIVATE KEY-----\n',
    });
  }

  async validate(payload) {
    console.log('************************** 2');
    return {
      user_id: payload.user_id,
      email: payload.email,
    };
  }
}
