from ellipticcurve.ecdsa import Ecdsa
from ellipticcurve.privateKey import PrivateKey


# Generate new Keys
privateKey = PrivateKey.fromPem("""
    -----BEGIN EC PARAMETERS-----
    BgUrgQQACg==
    -----END EC PARAMETERS-----
    -----BEGIN EC PRIVATE KEY-----
    MHQCAQEEIODvZuS34wFbt0X53+P5EnSj6tMjfVK01dD1dgDH02RzoAcGBSuBBAAK
    oUQDQgAE/nvHu/SQQaos9TUljQsUuKI15Zr5SabPrbwtbfT/408rkVVzq8vAisbB
    RmpeRREXj5aog/Mq8RrdYy75W9q/Ig==
    -----END EC PRIVATE KEY-----
""")
publicKey = privateKey.publicKey()
message = "1345890371588410854.30135125cargo_info"

# Generate Signature
signature = Ecdsa.sign(message, privateKey)

# To verify if the signature is valid
print(Ecdsa.verify(message, signature, publicKey))

#privateKey = '8d1f80536cd8df3948f4a0d54565f0b65dc8a9f8969fb979a2f21ab1f21e05'
#publicKey = '0404fb2416c38f8e0e4790973d6cfcae0bffd02db79f651ecba976f55e84406d49218d39cb1adee8a3a911ddfe0fae85491e990d48a8ce451224ab32143c8ac736'

#message = "1345890371588410854.30135125cargo_info"

