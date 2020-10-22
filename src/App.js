import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { LoginForm } from './components/forms/loginForm/LoginForm';
import { RegisterForm } from './components/forms/registerForm/RegisterForm';
import { ProductCarousel } from './components/ProductCarousel/ProductCarousel';
import { ProductItem } from './components/ProductItem/ProductItem';

import { Navigation } from './pages/navigation';
import { getProducts } from './store/products_draft/middlware';

import './styles/style.scss';



function App() {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getProducts())
     return () => {
      
     }
   }, [])
  // const modalIsOpen = useSelector(selectModalIsOpen);
  // const modalContent = useSelector(selectModalContent);
  const handleSubmit = (values) => {
    console.log(values)
  }
  
  return (
    <div className='App'>
      <Navigation/>
      <LoginForm/>
      <RegisterForm handleSubmit={() => handleSubmit()}/>
    </div>)
}

export default App;        },
        "aws-sign2": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
            "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg="
        },
        "aws4": {
            "version": "1.10.1",
            "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.10.1.tgz",
            "integrity": "sha512-zg7Hz2k5lI8kb7U32998pRRFin7zJlkfezGJjUc2heaD4Pw2wObakCDVzkKztTm/Ln7eiVvYsjqak0Ed4LkMDA=="
        },
        "axios": {
            "version": "0.20.0",
            "resolved": "https://registry.npmjs.org/axios/-/axios-0.20.0.tgz",
            "integrity": "sha512-ANA4rr2BDcmmAQLOKft2fufrtuvlqR+cXNNinUmvfeSNCOF98PZL+7M/v1zIdGo7OLjEA9J2gXJL+j4zGsl0bA==",
            "requires": {
                "follow-redirects": "^1.10.0"
            }
        },
        "axobject-query": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-2.2.0.tgz",
            "integrity": "sha512-Td525n+iPOOyUQIeBfcASuG6uJsDOITl7Mds5gFyerkWiX7qhUTdYUBlSgNMyVqtSJqwpt1kXGLdUt6SykLMRA=="
        },
        "babel-code-frame": {
            "version": "6.26.0",
            "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
            "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
            "requires": {
                "chalk": "^1.1.3",
                "esutils": "^2.0.2",
                "js-tokens": "^3.0.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
                    "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4="
                },
                "chalk": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
                    "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
                    "requires": {
                        "ansi-styles": "^2.2.1",
                        "escape-string-regexp": "^1.0.2",
                        "has-ansi": "^2.0.0",
                        "strip-ansi": "^3.0.0",
                        "supports-color": "^2.0.0"
                    }
                },
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
                },
                "js-tokens": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
                    "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls="
                },
                "supports-color": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
                    "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc="
                }
            }
        },
        "babel-eslint": {
            "version": "10.1.0",
            "resolved": "https://registry.npmjs.org/babel-eslint/-/babel-eslint-10.1.0.tgz",
            "integrity": "sha512-ifWaTHQ0ce+448CYop8AdrQiBsGrnC+bMgfyKFdi6EsPLTAWG+QfyDeM6OH+FmWnKvEq5NnBMLvlBUPKQZoDSg==",
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "@babel/parser": "^7.7.0",
                "@babel/traverse": "^7.7.0",
                "@babel/types": "^7.7.0",
                "eslint-visitor-keys": "^1.0.0",
                "resolve": "^1.12.0"
            }
        },
        "babel-extract-comments": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/babel-extract-comments/-/babel-extract-comments-1.0.0.tgz",
            "integrity": "sha512-qWWzi4TlddohA91bFwgt6zO/J0X+io7Qp184Fw0m2JYRSTZnJbFR8+07KmzudHCZgOiKRCrjhylwv9Xd8gfhVQ==",
            "requires": {
                "babylon": "^6.18.0"
            }
        },
        "babel-jest": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-24.9.0.tgz",
            "integrity": "sha512-ntuddfyiN+EhMw58PTNL1ph4C9rECiQXjI4nMMBKBaNjXvqLdkXpPRcMSr4iyBrJg/+wz9brFUD6RhOAT6r4Iw==",
            "requires": {
                "@jest/transform": "^24.9.0",
                "@jest/types": "^24.9.0",
                "@types/babel__core": "^7.1.0",
                "babel-plugin-istanbul": "^5.1.0",
                "babel-preset-jest": "^24.9.0",
                "chalk": "^2.4.2",
                "slash": "^2.0.0"
            }
        },
        "babel-loader": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.1.0.tgz",
            "integrity": "sha512-7q7nC1tYOrqvUrN3LQK4GwSk/TQorZSOlO9C+RZDZpODgyN4ZlCqE5q9cDsyWOliN+aU9B4JX01xK9eJXowJLw==",
            "requires": {
                "find-cache-dir": "^2.1.0",
                "loader-utils": "^1.4.0",
                "mkdirp": "^0.5.3",
                "pify": "^4.0.1",
                "schema-utils": "^2.6.5"
            },
            "dependencies": {
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
                }
            }
        },
        "babel-plugin-dynamic-import-node": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
            "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
            "requires": {
                "object.assign": "^4.1.0"
            }
        },
        "babel-plugin-istanbul": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-5.2.0.tgz",
            "integrity": "sha512-5LphC0USA8t4i1zCtjbbNb6jJj/9+X6P37Qfirc/70EQ34xKlMW+a1RHGwxGI+SwWpNwZ27HqvzAobeqaXwiZw==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.0.0",
                "find-up": "^3.0.0",
                "istanbul-lib-instrument": "^3.3.0",
                "test-exclude": "^5.2.3"
            },
            "dependencies": {
                "find-up": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                    "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                    "requires": {
                        "locate-path": "^3.0.0"
                    }
                }
            }
        },
        "babel-plugin-jest-hoist": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-24.9.0.tgz",
            "integrity": "sha512-2EMA2P8Vp7lG0RAzr4HXqtYwacfMErOuv1U3wrvxHX6rD1sV6xS3WXG3r8TRQ2r6w8OhvSdWt+z41hQNwNm3Xw==",
            "requires": {
                "@types/babel__traverse": "^7.0.6"
            }
        },
        "babel-plugin-macros": {
            "version": "2.8.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-macros/-/babel-plugin-macros-2.8.0.tgz",
            "integrity": "sha512-SEP5kJpfGYqYKpBrj5XU3ahw5p5GOHJ0U5ssOSQ/WBVdwkD2Dzlce95exQTs3jOVWPPKLBN2rlEWkCK7dSmLvg==",
            "requires": {
                "@babel/runtime": "^7.7.2",
                "cosmiconfig": "^6.0.0",
                "resolve": "^1.12.0"
            },
            "dependencies": {
                "cosmiconfig": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-6.0.0.tgz",
                    "integrity": "sha512-xb3ZL6+L8b9JLLCx3ZdoZy4+2ECphCMo2PwqgP1tlfVq6M6YReyzBJtvWWtbDSpNr9hn96pkCiZqUcFEc+54Qg==",
                    "requires": {
                        "@types/parse-json": "^4.0.0",
                        "import-fresh": "^3.1.0",
                        "parse-json": "^5.0.0",
                        "path-type": "^4.0.0",
                        "yaml": "^1.7.2"
                    }
                },
                "import-fresh": {
                    "version": "3.2.1",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.1.tgz",
                    "integrity": "sha512-6e1q1cnWP2RXD9/keSkxHScg508CdXqXWgWBaETNhyuBFz+kUZlKboh+ISK+bU++DmbHimVBrOz/zzPe0sZ3sQ==",
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "parse-json": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.1.0.tgz",
                    "integrity": "sha512-+mi/lmVVNKFNVyLXV31ERiy2CY5E1/F6QtJFEzoChPRwwngMNXRDQ9GJ5WdE2Z2P4AujsOi0/+2qHID68KwfIQ==",
                    "requires": {
                        "@babel/code-frame": "^7.0.0",
                        "error-ex": "^1.3.1",
                        "json-parse-even-better-errors": "^2.3.0",
                        "lines-and-columns": "^1.1.6"
                    }
                },
                "path-type": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
                    "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw=="
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="
                }
            }
        },
        "babel-plugin-named-asset-import": {
            "version": "0.3.6",
            "resolved": "https://registry.npmjs.org/babel-plugin-named-asset-import/-/babel-plugin-named-asset-import-0.3.6.tgz",
            "integrity": "sha512-1aGDUfL1qOOIoqk9QKGIo2lANk+C7ko/fqH0uIyC71x3PEGz0uVP8ISgfEsFuG+FKmjHTvFK/nNM8dowpmUxLA=="
        },
        "babel-plugin-styled-components": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/babel-plugin-styled-components/-/babel-plugin-styled-components-1.11.1.tgz",
            "integrity": "sha512-YwrInHyKUk1PU3avIRdiLyCpM++18Rs1NgyMXEAQC33rIXs/vro0A+stf4sT0Gf22Got+xRWB8Cm0tw+qkRzBA==",
            "requires": {
                "@babel/helper-annotate-as-pure": "^7.0.0",
                "@babel/helper-module-imports": "^7.0.0",
                "babel-plugin-syntax-jsx": "^6.18.0",
                "lodash": "^4.17.11"
            }
        },
        "babel-plugin-syntax-jsx": {
            "version": "6.18.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-syntax-jsx/-/babel-plugin-syntax-jsx-6.18.0.tgz",
            "integrity": "sha1-CvMqmm4Tyno/1QaeYtew9Y0NiUY="
        },
        "babel-plugin-syntax-object-rest-spread": {
            "version": "6.13.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
            "integrity": "sha1-/WU28rzhODb/o6VFjEkDpZe7O/U="
        },
        "babel-plugin-transform-object-rest-spread": {
            "version": "6.26.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-transform-object-rest-spread/-/babel-plugin-transform-object-rest-spread-6.26.0.tgz",
            "integrity": "sha1-DzZpLVD+9rfi1LOsFHgTepY7ewY=",
            "requires": {
                "babel-plugin-syntax-object-rest-spread": "^6.8.0",
                "babel-runtime": "^6.26.0"
            }
        },
        "babel-plugin-transform-react-remove-prop-types": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/babel-plugin-transform-react-remove-prop-types/-/babel-plugin-transform-react-remove-prop-types-0.4.24.tgz",
            "integrity": "sha512-eqj0hVcJUR57/Ug2zE1Yswsw4LhuqqHhD+8v120T1cl3kjg76QwtyBrdIk4WVwK+lAhBJVYCd/v+4nc4y+8JsA=="
        },
        "babel-preset-jest": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-24.9.0.tgz",
            "integrity": "sha512-izTUuhE4TMfTRPF92fFwD2QfdXaZW08qvWTFCI51V8rW5x00UuPgc3ajRoWofXOuxjfcOM5zzSYsQS3H8KGCAg==",
            "requires": {
                "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
                "babel-plugin-jest-hoist": "^24.9.0"
            }
        },
        "babel-preset-react-app": {
            "version": "9.1.2",
            "resolved": "https://registry.npmjs.org/babel-preset-react-app/-/babel-preset-react-app-9.1.2.tgz",
            "integrity": "sha512-k58RtQOKH21NyKtzptoAvtAODuAJJs3ZhqBMl456/GnXEQ/0La92pNmwgWoMn5pBTrsvk3YYXdY7zpY4e3UIxA==",
            "requires": {
                "@babel/core": "7.9.0",
                "@babel/plugin-proposal-class-properties": "7.8.3",
                "@babel/plugin-proposal-decorators": "7.8.3",
                "@babel/plugin-proposal-nullish-coalescing-operator": "7.8.3",
                "@babel/plugin-proposal-numeric-separator": "7.8.3",
                "@babel/plugin-proposal-optional-chaining": "7.9.0",
                "@babel/plugin-transform-flow-strip-types": "7.9.0",
                "@babel/plugin-transform-react-display-name": "7.8.3",
                "@babel/plugin-transform-runtime": "7.9.0",
                "@babel/preset-env": "7.9.0",
                "@babel/preset-react": "7.9.1",
                "@babel/preset-typescript": "7.9.0",
                "@babel/runtime": "7.9.0",
                "babel-plugin-macros": "2.8.0",
                "babel-plugin-transform-react-remove-prop-types": "0.4.24"
            },
            "dependencies": {
                "@babel/plugin-proposal-class-properties": {
                    "version": "7.8.3",
                    "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.8.3.tgz",
                    "integrity": "sha512-EqFhbo7IosdgPgZggHaNObkmO1kNUe3slaKu54d5OWvy+p9QIKOzK1GAEpAIsZtWVtPXUHSMcT4smvDrCfY4AA==",
                    "requires": {
                        "@babel/helper-create-class-features-plugin": "^7.8.3",
                        "@babel/helper-plugin-utils": "^7.8.3"
                    }
                },
                "@babel/plugin-proposal-nullish-coalescing-operator": {
                    "version": "7.8.3",
                    "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.8.3.tgz",
                    "integrity": "sha512-TS9MlfzXpXKt6YYomudb/KU7nQI6/xnapG6in1uZxoxDghuSMZsPb6D2fyUwNYSAp4l1iR7QtFOjkqcRYcUsfw==",
                    "requires": {
                        "@babel/helper-plugin-utils": "^7.8.3",
                        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0"
                    }
                },
                "@babel/plugin-proposal-numeric-separator": {
                    "version": "7.8.3",
                    "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.8.3.tgz",
                    "integrity": "sha512-jWioO1s6R/R+wEHizfaScNsAx+xKgwTLNXSh7tTC4Usj3ItsPEhYkEpU4h+lpnBwq7NBVOJXfO6cRFYcX69JUQ==",
                    "requires": {
                        "@babel/helper-plugin-utils": "^7.8.3",
                        "@babel/plugin-syntax-numeric-separator": "^7.8.3"
                    }
                },
                "@babel/plugin-proposal-optional-chaining": {
                    "version": "7.9.0",
                    "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.9.0.tgz",
                    "integrity": "sha512-NDn5tu3tcv4W30jNhmc2hyD5c56G6cXx4TesJubhxrJeCvuuMpttxr0OnNCqbZGhFjLrg+NIhxxC+BK5F6yS3w==",
                    "requires": {
                        "@babel/helper-plugin-utils": "^7.8.3",
                        "@babel/plugin-syntax-optional-chaining": "^7.8.0"
                    }
                },
                "@babel/plugin-transform-react-display-name": {
                    "version": "7.8.3",
                    "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.8.3.tgz",
                    "integrity": "sha512-3Jy/PCw8Fe6uBKtEgz3M82ljt+lTg+xJaM4og+eyu83qLT87ZUSckn0wy7r31jflURWLO83TW6Ylf7lyXj3m5A==",
                    "requires": {
                        "@babel/helper-plugin-utils": "^7.8.3"
                    }
                },
                "@babel/preset-env": {
                    "version": "7.9.0",
                    "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.9.0.tgz",
                    "integrity": "sha512-712DeRXT6dyKAM/FMbQTV/FvRCms2hPCx+3weRjZ8iQVQWZejWWk1wwG6ViWMyqb/ouBbGOl5b6aCk0+j1NmsQ==",
                    "requires": {
                        "@babel/compat-data": "^7.9.0",
                        "@babel/helper-compilation-targets": "^7.8.7",
                        "@babel/helper-module-imports": "^7.8.3",
                        "@babel/helper-plugin-utils": "^7.8.3",
                        "@babel/plugin-proposal-async-generator-functions": "^7.8.3",
                        "@babel/plugin-proposal-dynamic-import": "^7.8.3",
                        "@babel/plugin-proposal-json-strings": "^7.8.3",
                        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.8.3",
                        "@babel/plugin-proposal-numeric-separator": "^7.8.3",
                        "@babel/plugin-proposal-object-rest-spread": "^7.9.0",
                        "@babel/plugin-proposal-optional-catch-binding": "^7.8.3",
                        "@babel/plugin-proposal-optional-chaining": "^7.9.0",
                        "@babel/plugin-proposal-unicode-property-regex": "^7.8.3",
                        "@babel/plugin-syntax-async-generators": "^7.8.0",
                        "@babel/plugin-syntax-dynamic-import": "^7.8.0",
                        "@babel/plugin-syntax-json-strings": "^7.8.0",
                        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
                        "@babel/plugin-syntax-numeric-separator": "^7.8.0",
                        "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
                        "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
                        "@babel/plugin-syntax-optional-chaining": "^7.8.0",
                        "@babel/plugin-syntax-top-level-await": "^7.8.3",
                        "@babel/plugin-transform-arrow-functions": "^7.8.3",
                        "@babel/plugin-transform-async-to-generator": "^7.8.3",
                        "@babel/plugin-transform-block-scoped-functions": "^7.8.3",
                        "@babel/plugin-transform-block-scoping": "^7.8.3",
                        "@babel/plugin-transform-classes": "^7.9.0",
                        "@babel/plugin-transform-computed-properties": "^7.8.3",
                        "@babel/plugin-transform-destructuring": "^7.8.3",
                        "@babel/plugin-transform-dotall-regex": "^7.8.3",
                        "@babel/plugin-transform-duplicate-keys": "^7.8.3",
                        "@babel/plugin-transform-exponentiation-operator": "^7.8.3",
                        "@babel/plugin-transform-for-of": "^7.9.0",
                        "@babel/plugin-transform-function-name": "^7.8.3",
                        "@babel/plugin-transform-literals": "^7.8.3",
                        "@babel/plugin-transform-member-expression-literals": "^7.8.3",
                        "@babel/plugin-transform-modules-amd": "^7.9.0",
                        "@babel/plugin-transform-modules-commonjs": "^7.9.0",
                        "@babel/plugin-transform-modules-systemjs": "^7.9.0",
                        "@babel/plugin-transform-modules-umd": "^7.9.0",
                        "@babel/plugin-transform-named-capturing-groups-regex": "^7.8.3",
                        "@babel/plugin-transform-new-target": "^7.8.3",
                        "@babel/plugin-transform-object-super": "^7.8.3",
                        "@babel/plugin-transform-parameters": "^7.8.7",
                        "@babel/plugin-transform-property-literals": "^7.8.3",
                        "@babel/plugin-transform-regenerator": "^7.8.7",
                        "@babel/plugin-transform-reserved-words": "^7.8.3",
                        "@babel/plugin-transform-shorthand-properties": "^7.8.3",
                        "@babel/plugin-transform-spread": "^7.8.3",
                        "@babel/plugin-transform-sticky-regex": "^7.8.3",
                        "@babel/plugin-transform-template-literals": "^7.8.3",
                        "@babel/plugin-transform-typeof-symbol": "^7.8.4",
                        "@babel/plugin-transform-unicode-regex": "^7.8.3",
                        "@babel/preset-modules": "^0.1.3",
                        "@babel/types": "^7.9.0",
                        "browserslist": "^4.9.1",
                        "core-js-compat": "^3.6.2",
                        "invariant": "^2.2.2",
                        "levenary": "^1.1.1",
                        "semver": "^5.5.0"
                    }
                },
                "@babel/preset-react": {
                    "version": "7.9.1",
                    "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.9.1.tgz",
                    "integrity": "sha512-aJBYF23MPj0RNdp/4bHnAP0NVqqZRr9kl0NAOP4nJCex6OYVio59+dnQzsAWFuogdLyeaKA1hmfUIVZkY5J+TQ==",
                    "requires": {
                        "@babel/helper-plugin-utils": "^7.8.3",
                        "@babel/plugin-transform-react-display-name": "^7.8.3",
                        "@babel/plugin-transform-react-jsx": "^7.9.1",
                        "@babel/plugin-transform-react-jsx-development": "^7.9.0",
                        "@babel/plugin-transform-react-jsx-self": "^7.9.0",
                        "@babel/plugin-transform-react-jsx-source": "^7.9.0"
                    }
                },
                "@babel/runtime": {
                    "version": "7.9.0",
                    "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.9.0.tgz",
                    "integrity": "sha512-cTIudHnzuWLS56ik4DnRnqqNf8MkdUzV4iFFI1h7Jo9xvrpQROYaAnaSd2mHLQAzzZAPfATynX5ord6YlNYNMA==",
                    "requires": {
                        "regenerator-runtime": "^0.13.4"
                    }
                }
            }
        },
        "babel-runtime": {
            "version": "6.26.0",
            "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
            "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
            "requires": {
                "core-js": "^2.4.0",
                "regenerator-runtime": "^0.11.0"
            },
            "dependencies": {
                "core-js": {
                    "version": "2.6.11",
                    "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",
                    "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg=="
                },
                "regenerator-runtime": {
                    "version": "0.11.1",
                    "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
                    "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg=="
                }
            }
        },
        "babylon": {
            "version": "6.18.0",
            "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
            "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ=="
        },
        "bail": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/bail/-/bail-1.0.5.tgz",
            "integrity": "sha512-xFbRxM1tahm08yHBP16MMjVUAvDaBMD38zsM9EMAUN61omwLmKlOpB/Zku5QkjZ8TZ4vn53pj+t518cH0S03RQ=="
        },
        "balanced-match": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
            "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
        },
        "base": {
            "version": "0.11.2",
            "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
            "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
            "requires": {
                "cache-base": "^1.0.1",
                "class-utils": "^0.3.5",
                "component-emitter": "^1.2.1",
                "define-property": "^1.0.0",
                "isobject": "^3.0.1",
                "mixin-deep": "^1.2.0",
                "pascalcase": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                },
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                }
            }
        },
        "base64-js": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
            "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g=="
        },
        "batch": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
            "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY="
        },
        "bcrypt-pbkdf": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
            "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
            "requires": {
                "tweetnacl": "^0.14.3"
            }
        },
        "big.js": {
            "version": "5.2.2",
            "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
            "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ=="
        },
        "binary-extensions": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.1.0.tgz",
            "integrity": "sha512-1Yj8h9Q+QDF5FzhMs/c9+6UntbD5MkRfRwac8DoEm9ZfUBZ7tZ55YcGVAzEe4bXsdQHEk+s9S5wsOKVdZrw0tQ=="
        },
        "block-stream": {
            "version": "0.0.9",
            "resolved": "https://registry.npmjs.org/block-stream/-/block-stream-0.0.9.tgz",
            "integrity": "sha1-E+v+d4oDIFz+A3UUgeu0szAMEmo=",
            "requires": {
                "inherits": "~2.0.0"
            }
        },
        "bluebird": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
            "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
        },
        "bn.js": {
            "version": "5.1.3",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.1.3.tgz",
            "integrity": "sha512-GkTiFpjFtUzU9CbMeJ5iazkCzGL3jrhzerzZIuqLABjbwRaFt33I9tUdSNryIptM+RxDet6OKm2WnLXzW51KsQ=="
        },
        "body-parser": {
            "version": "1.19.0",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
            "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
            "requires": {
                "bytes": "3.1.0",
                "content-type": "~1.0.4",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "on-finished": "~2.3.0",
                "qs": "6.7.0",
                "raw-body": "2.4.0",
                "type-is": "~1.6.17"
            },
            "dependencies": {
                "bytes": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
                    "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
                },
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                },
                "qs": {
                    "version": "6.7.0",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
                    "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
                }
            }
        },
        "bonjour": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
            "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
            "requires": {
                "array-flatten": "^2.1.0",
                "deep-equal": "^1.0.1",
                "dns-equal": "^1.0.0",
                "dns-txt": "^2.0.2",
                "multicast-dns": "^6.0.1",
                "multicast-dns-service-types": "^1.1.0"
            }
        },
        "boolbase": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
            "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
        },
        "boxen": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
            "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
            "requires": {
                "ansi-align": "^3.0.0",
                "camelcase": "^5.3.1",
                "chalk": "^3.0.0",
                "cli-boxes": "^2.2.0",
                "string-width": "^4.1.0",
                "term-size": "^2.1.0",
                "type-fest": "^0.8.1",
                "widest-line": "^3.1.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
                    "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
                },
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
                },
                "chalk": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
                    "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
                },
                "emoji-regex": {
                    "version": "8.0.0",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
                    "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
                },
                "is-fullwidth-code-point": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
                    "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
                },
                "string-width": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
                    "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
                    "requires": {
                        "emoji-regex": "^8.0.0",
                        "is-fullwidth-code-point": "^3.0.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "strip-ansi": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
                    "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
                    "requires": {
                        "ansi-regex": "^5.0.0"
                    }
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "requires": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "braces": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
            "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
            "requires": {
                "fill-range": "^7.0.1"
            }
        },
        "brorand": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
            "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8="
        },
        "browser-process-hrtime": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
            "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="
        },
        "browser-resolve": {
            "version": "1.11.3",
            "resolved": "https://registry.npmjs.org/browser-resolve/-/browser-resolve-1.11.3.tgz",
            "integrity": "sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==",
            "requires": {
                "resolve": "1.1.7"
            },
            "dependencies": {
                "resolve": {
                    "version": "1.1.7",
                    "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
                    "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs="
                }
            }
        },
        "browserify-aes": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
            "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
            "requires": {
                "buffer-xor": "^1.0.3",
                "cipher-base": "^1.0.0",
                "create-hash": "^1.1.0",
                "evp_bytestokey": "^1.0.3",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "browserify-cipher": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
            "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
            "requires": {
                "browserify-aes": "^1.0.4",
                "browserify-des": "^1.0.0",
                "evp_bytestokey": "^1.0.0"
            }
        },
        "browserify-des": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
            "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
            "requires": {
                "cipher-base": "^1.0.1",
                "des.js": "^1.0.0",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.1.2"
            }
        },
        "browserify-optional": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/browserify-optional/-/browserify-optional-1.0.1.tgz",
            "integrity": "sha1-HhNyLP3g2F8SFnbCpyztUzoBiGk=",
            "requires": {
                "ast-transform": "0.0.0",
                "ast-types": "^0.7.0",
                "browser-resolve": "^1.8.1"
            }
        },
        "browserify-rsa": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
            "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
            "requires": {
                "bn.js": "^4.1.0",
                "randombytes": "^2.0.1"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw=="
                }
            }
        },
        "browserify-sign": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
            "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
            "requires": {
                "bn.js": "^5.1.1",
                "browserify-rsa": "^4.0.1",
                "create-hash": "^1.2.0",
                "create-hmac": "^1.1.7",
                "elliptic": "^6.5.3",
                "inherits": "^2.0.4",
                "parse-asn1": "^5.1.5",
                "readable-stream": "^3.6.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
                }
            }
        },
        "browserify-zlib": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
            "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
            "requires": {
                "pako": "~1.0.5"
            }
        },
        "browserslist": {
            "version": "4.14.5",
            "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.14.5.tgz",
            "integrity": "sha512-Z+vsCZIvCBvqLoYkBFTwEYH3v5MCQbsAjp50ERycpOjnPmolg1Gjy4+KaWWpm8QOJt9GHkhdqAl14NpCX73CWA==",
            "requires": {
                "caniuse-lite": "^1.0.30001135",
                "electron-to-chromium": "^1.3.571",
                "escalade": "^3.1.0",
                "node-releases": "^1.1.61"
            }
        },
        "bser": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
            "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
            "requires": {
                "node-int64": "^0.4.0"
            }
        },
        "buffer": {
            "version": "4.9.2",
            "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
            "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
            "requires": {
                "base64-js": "^1.0.2",
                "ieee754": "^1.1.4",
                "isarray": "^1.0.0"
            }
        },
        "buffer-from": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
            "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
        },
        "buffer-indexof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
            "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g=="
        },
        "buffer-xor": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
            "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk="
        },
        "builtin-status-codes": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
            "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug="
        },
        "bytes": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
            "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
        },
        "cacache": {
            "version": "13.0.1",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-13.0.1.tgz",
            "integrity": "sha512-5ZvAxd05HDDU+y9BVvcqYu2LLXmPnQ0hW62h32g4xBTgL/MppR4/04NHfj/ycM2y6lmTnbw6HVi+1eN0Psba6w==",
            "requires": {
                "chownr": "^1.1.2",
                "figgy-pudding": "^3.5.1",
                "fs-minipass": "^2.0.0",
                "glob": "^7.1.4",
                "graceful-fs": "^4.2.2",
                "infer-owner": "^1.0.4",
                "lru-cache": "^5.1.1",
                "minipass": "^3.0.0",
                "minipass-collect": "^1.0.2",
                "minipass-flush": "^1.0.5",
                "minipass-pipeline": "^1.2.2",
                "mkdirp": "^0.5.1",
                "move-concurrently": "^1.0.1",
                "p-map": "^3.0.0",
                "promise-inflight": "^1.0.1",
                "rimraf": "^2.7.1",
                "ssri": "^7.0.0",
                "unique-filename": "^1.1.1"
            },
            "dependencies": {
                "lru-cache": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
                    "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
                    "requires": {
                        "yallist": "^3.0.2"
                    }
                },
                "yallist": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                    "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
                }
            }
        },
        "cache-base": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
            "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
            "requires": {
                "collection-visit": "^1.0.0",
                "component-emitter": "^1.2.1",
                "get-value": "^2.0.6",
                "has-value": "^1.0.0",
                "isobject": "^3.0.1",
                "set-value": "^2.0.0",
                "to-object-path": "^0.3.0",
                "union-value": "^1.0.0",
                "unset-value": "^1.0.0"
            }
        },
        "cacheable-request": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
            "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
            "requires": {
                "clone-response": "^1.0.2",
                "get-stream": "^5.1.0",
                "http-cache-semantics": "^4.0.0",
                "keyv": "^3.0.0",
                "lowercase-keys": "^2.0.0",
                "normalize-url": "^4.1.0",
                "responselike": "^1.0.2"
            },
            "dependencies": {
                "get-stream": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
                    "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
                    "requires": {
                        "pump": "^3.0.0"
                    }
                },
                "lowercase-keys": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
                    "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA=="
                }
            }
        },
        "call-me-maybe": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
            "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms="
        },
        "caller-callsite": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
            "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
            "requires": {
                "callsites": "^2.0.0"
            }
        },
        "caller-path": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
            "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
            "requires": {
                "caller-callsite": "^2.0.0"
            }
        },
        "callsites": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
            "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA="
        },
        "camel-case": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-4.1.1.tgz",
            "integrity": "sha512-7fa2WcG4fYFkclIvEmxBbTvmibwF2/agfEBc6q3lOpVu0A13ltLsA+Hr/8Hp6kp5f+G7hKi6t8lys6XxP+1K6Q==",
            "requires": {
                "pascal-case": "^3.1.1",
                "tslib": "^1.10.0"
            }
        },
        "camelcase": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
            "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8="
        },
        "camelcase-keys": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
            "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
            "requires": {
                "camelcase": "^2.0.0",
                "map-obj": "^1.0.0"
            }
        },
        "camelize": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/camelize/-/camelize-1.0.0.tgz",
            "integrity": "sha1-FkpUg+Yw+kMh5a8HAg5TGDGyYJs="
        },
        "caniuse-api": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
            "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
            "requires": {
                "browserslist": "^4.0.0",
                "caniuse-lite": "^1.0.0",
                "lodash.memoize": "^4.1.2",
                "lodash.uniq": "^4.5.0"
            }
        },
        "caniuse-lite": {
            "version": "1.0.30001148",
            "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001148.tgz",
            "integrity": "sha512-E66qcd0KMKZHNJQt9hiLZGE3J4zuTqE1OnU53miEVtylFbwOEmeA5OsRu90noZful+XGSQOni1aT2tiqu/9yYw=="
        },
        "capture-exit": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
            "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
            "requires": {
                "rsvp": "^4.8.4"
            }
        },
        "case-sensitive-paths-webpack-plugin": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/case-sensitive-paths-webpack-plugin/-/case-sensitive-paths-webpack-plugin-2.3.0.tgz",
            "integrity": "sha512-/4YgnZS8y1UXXmC02xD5rRrBEu6T5ub+mQHLNRj0fzTRbgdBYhsNo2V5EqwgqrExjxsjtF/OpAKAMkKsxbD5XQ=="
        },
        "caseless": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
            "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
        },
        "ccount": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/ccount/-/ccount-1.0.5.tgz",
            "integrity": "sha512-MOli1W+nfbPLlKEhInaxhRdp7KVLFxLN5ykwzHgLsLI3H3gs5jjFAK4Eoj3OzzcxCtumDaI8onoVDeQyWaNTkw=="
        },
        "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "requires": {
                "ansi-styles": "^3.2.1",
                "escape-string-regexp": "^1.0.5",
                "supports-color": "^5.3.0"
            }
        },
        "character-entities": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/character-entities/-/character-entities-1.2.4.tgz",
            "integrity": "sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw=="
        },
        "character-entities-html4": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/character-entities-html4/-/character-entities-html4-1.1.4.tgz",
            "integrity": "sha512-HRcDxZuZqMx3/a+qrzxdBKBPUpxWEq9xw2OPZ3a/174ihfrQKVsFhqtthBInFy1zZ9GgZyFXOatNujm8M+El3g=="
        },
        "character-entities-legacy": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/character-entities-legacy/-/character-entities-legacy-1.1.4.tgz",
            "integrity": "sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA=="
        },
        "character-reference-invalid": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/character-reference-invalid/-/character-reference-invalid-1.1.4.tgz",
            "integrity": "sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg=="
        },
        "chardet": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
            "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
        },
        "chokidar": {
            "version": "3.4.3",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.4.3.tgz",
            "integrity": "sha512-DtM3g7juCXQxFVSNPNByEC2+NImtBuxQQvWlHunpJIS5Ocr0lG306cC7FCi7cEA0fzmybPUIl4txBIobk1gGOQ==",
            "requires": {
                "anymatch": "~3.1.1",
                "braces": "~3.0.2",
                "fsevents": "~2.1.2",
                "glob-parent": "~5.1.0",
                "is-binary-path": "~2.1.0",
                "is-glob": "~4.0.1",
                "normalize-path": "~3.0.0",
                "readdirp": "~3.5.0"
            }
        },
        "chownr": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
            "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
        },
        "chrome-trace-event": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
            "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
            "requires": {
                "tslib": "^1.9.0"
            }
        },
        "ci-info": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
            "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
        },
        "cipher-base": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
            "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
            "requires": {
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "class-utils": {
            "version": "0.3.6",
            "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
            "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
            "requires": {
                "arr-union": "^3.1.0",
                "define-property": "^0.2.5",
                "isobject": "^3.0.0",
                "static-extend": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "classnames": {
            "version": "2.2.6",
            "resolved": "https://registry.npmjs.org/classnames/-/classnames-2.2.6.tgz",
            "integrity": "sha512-JR/iSQOSt+LQIWwrwEzJ9uk0xfN3mTVYMwt1Ir5mUcSN6pU+V4zQFFaJsclJbPuAUQH+yfWef6tm7l1quW3C8Q=="
        },
        "clean-css": {
            "version": "4.2.3",
            "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",
            "integrity": "sha512-VcMWDN54ZN/DS+g58HYL5/n4Zrqe8vHJpGA8KdgUXFU4fuP/aHNw8eld9SyEIyabIMJX/0RaY/fplOo5hYLSFA==",
            "requires": {
                "source-map": "~0.6.0"
            }
        },
        "clean-stack": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
            "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A=="
        },
        "cli-boxes": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
            "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw=="
        },
        "cli-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
            "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
            "requires": {
                "restore-cursor": "^3.1.0"
            }
        },
        "cli-width": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
            "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw=="
        },
        "cliui": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
            "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
            "requires": {
                "string-width": "^3.1.0",
                "strip-ansi": "^5.2.0",
                "wrap-ansi": "^5.1.0"
            },
            "dependencies": {
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "clone-deep": {
            "version": "0.2.4",
            "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-0.2.4.tgz",
            "integrity": "sha1-TnPdCen7lxzDhnDF3O2cGJZIHMY=",
            "requires": {
                "for-own": "^0.1.3",
                "is-plain-object": "^2.0.1",
                "kind-of": "^3.0.2",
                "lazy-cache": "^1.0.3",
                "shallow-clone": "^0.1.2"
            }
        },
        "clone-regexp": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/clone-regexp/-/clone-regexp-2.2.0.tgz",
            "integrity": "sha512-beMpP7BOtTipFuW8hrJvREQ2DrRu3BE7by0ZpibtfBA+qfHYvMGTc2Yb1JMYPKg/JUw0CHYvpg796aNTSW9z7Q==",
            "requires": {
                "is-regexp": "^2.0.0"
            },
            "dependencies": {
                "is-regexp": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/is-regexp/-/is-regexp-2.1.0.tgz",
                    "integrity": "sha512-OZ4IlER3zmRIoB9AqNhEggVxqIH4ofDns5nRrPS6yQxXE1TPCUpFznBfRQmQa8uC+pXqjMnukiJBxCisIxiLGA=="
                }
            }
        },
        "clone-response": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
            "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
            "requires": {
                "mimic-response": "^1.0.0"
            }
        },
        "co": {
            "version": "4.6.0",
            "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
            "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="
        },
        "coa": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
            "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
            "requires": {
                "@types/q": "^1.5.1",
                "chalk": "^2.4.1",
                "q": "^1.1.2"
            }
        },
        "code-point-at": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
            "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
        },
        "collapse-white-space": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/collapse-white-space/-/collapse-white-space-1.0.6.tgz",
            "integrity": "sha512-jEovNnrhMuqyCcjfEJA56v0Xq8SkIoPKDyaHahwo3POf4qcSXqMYuwNcOTzp74vTsR9Tn08z4MxWqAhcekogkQ=="
        },
        "collection-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
            "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
            "requires": {
                "map-visit": "^1.0.0",
                "object-visit": "^1.0.0"
            }
        },
        "color": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/color/-/color-3.1.3.tgz",
            "integrity": "sha512-xgXAcTHa2HeFCGLE9Xs/R82hujGtu9Jd9x4NW3T34+OMs7VoPsjwzRczKHvTAHeJwWFwX5j15+MgAppE8ztObQ==",
            "requires": {
                "color-convert": "^1.9.1",
                "color-string": "^1.5.4"
            }
        },
        "color-convert": {
            "version": "1.9.3",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
            "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
            "requires": {
                "color-name": "1.1.3"
            }
        },
        "color-name": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
            "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
        },
        "color-string": {
            "version": "1.5.4",
            "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.4.tgz",
            "integrity": "sha512-57yF5yt8Xa3czSEW1jfQDE79Idk0+AkN/4KWad6tbdxUmAs3MvjxlWSWD4deYytcRfoZ9nhKyFl1kj5tBvidbw==",
            "requires": {
                "color-name": "^1.0.0",
                "simple-swizzle": "^0.2.2"
            }
        },
        "colorette": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.1.tgz",
            "integrity": "sha512-puCDz0CzydiSYOrnXpz/PKd69zRrribezjtE9yd4zvytoRc8+RY/KJPvtPFKZS3E3wP6neGyMe0vOTlHO5L3Pw=="
        },
        "combined-stream": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
            "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
            "requires": {
                "delayed-stream": "~1.0.0"
            }
        },
        "commander": {
            "version": "2.20.3",
            "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
            "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
        },
        "common-tags": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/common-tags/-/common-tags-1.8.0.tgz",
            "integrity": "sha512-6P6g0uetGpW/sdyUy/iQQCbFF0kWVMSIVSyYz7Zgjcgh8mgw8PQzDNZeyZ5DQ2gM7LBoZPHmnjz8rUthkBG5tw=="
        },
        "commondir": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
            "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs="
        },
        "component-emitter": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
            "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
        },
        "compose-function": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/compose-function/-/compose-function-3.0.3.tgz",
            "integrity": "sha1-ntZ18TzFRQHTCVCkhv9qe6OrGF8=",
            "requires": {
                "arity-n": "^1.0.4"
            }
        },
        "compressible": {
            "version": "2.0.18",
            "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
            "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
            "requires": {
                "mime-db": ">= 1.43.0 < 2"
            }
        },
        "compression": {
            "version": "1.7.4",
            "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
            "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
            "requires": {
                "accepts": "~1.3.5",
                "bytes": "3.0.0",
                "compressible": "~2.0.16",
                "debug": "2.6.9",
                "on-headers": "~1.0.2",
                "safe-buffer": "5.1.2",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
        },
        "concat-stream": {
            "version": "1.6.2",
            "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
            "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
            "requires": {
                "buffer-from": "^1.0.0",
                "inherits": "^2.0.3",
                "readable-stream": "^2.2.2",
                "typedarray": "^0.0.6"
            }
        },
        "configstore": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
            "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
            "requires": {
                "dot-prop": "^5.2.0",
                "graceful-fs": "^4.1.2",
                "make-dir": "^3.0.0",
                "unique-string": "^2.0.0",
                "write-file-atomic": "^3.0.0",
                "xdg-basedir": "^4.0.0"
            }
        },
        "confusing-browser-globals": {
            "version": "1.0.9",
            "resolved": "https://registry.npmjs.org/confusing-browser-globals/-/confusing-browser-globals-1.0.9.tgz",
            "integrity": "sha512-KbS1Y0jMtyPgIxjO7ZzMAuUpAKMt1SzCL9fsrKsX6b0zJPTaT0SiSPmewwVZg9UAO83HVIlEhZF84LIjZ0lmAw=="
        },
        "connect-history-api-fallback": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
            "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg=="
        },
        "console-browserify": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
            "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA=="
        },
        "console-control-strings": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
            "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
        },
        "constants-browserify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
            "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U="
        },
        "contains-path": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/contains-path/-/contains-path-0.1.0.tgz",
            "integrity": "sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo="
        },
        "content-disposition": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
            "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
            "requires": {
                "safe-buffer": "5.1.2"
            }
        },
        "content-type": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
            "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
        },
        "convert-source-map": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
            "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
            "requires": {
                "safe-buffer": "~5.1.1"
            }
        },
        "cookie": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
            "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
        },
        "cookie-signature": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
            "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
        },
        "copy-concurrently": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
            "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
            "requires": {
                "aproba": "^1.1.1",
                "fs-write-stream-atomic": "^1.0.8",
                "iferr": "^0.1.5",
                "mkdirp": "^0.5.1",
                "rimraf": "^2.5.4",
                "run-queue": "^1.0.0"
            }
        },
        "copy-descriptor": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
            "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
        },
        "core-js": {
            "version": "3.6.5",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.6.5.tgz",
            "integrity": "sha512-vZVEEwZoIsI+vPEuoF9Iqf5H7/M3eeQqWlQnYa8FSKKePuYTf5MWnxb5SDAzCa60b3JBRS5g9b+Dq7b1y/RCrA=="
        },
        "core-js-compat": {
            "version": "3.6.5",
            "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.6.5.tgz",
            "integrity": "sha512-7ItTKOhOZbznhXAQ2g/slGg1PJV5zDO/WdkTwi7UEOJmkvsE32PWvx6mKtDjiMpjnR2CNf6BAD6sSxIlv7ptng==",
            "requires": {
                "browserslist": "^4.8.5",
                "semver": "7.0.0"
            },
            "dependencies": {
                "semver": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
                    "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A=="
                }
            }
        },
        "core-js-pure": {
            "version": "3.6.5",
            "resolved": "https://registry.npmjs.org/core-js-pure/-/core-js-pure-3.6.5.tgz",
            "integrity": "sha512-lacdXOimsiD0QyNf9BC/mxivNJ/ybBGJXQFKzRekp1WTHoVUWsUHEn+2T8GJAzzIhyOuXA+gOxCVN3l+5PLPUA=="
        },
        "core-util-is": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
            "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
        },
        "cosmiconfig": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
            "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
            "requires": {
                "import-fresh": "^2.0.0",
                "is-directory": "^0.3.1",
                "js-yaml": "^3.13.1",
                "parse-json": "^4.0.0"
            },
            "dependencies": {
                "parse-json": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
                    "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
                    "requires": {
                        "error-ex": "^1.3.1",
                        "json-parse-better-errors": "^1.0.1"
                    }
                }
            }
        },
        "create-ecdh": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
            "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
            "requires": {
                "bn.js": "^4.1.0",
                "elliptic": "^6.5.3"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw=="
                }
            }
        },
        "create-hash": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
            "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
            "requires": {
                "cipher-base": "^1.0.1",
                "inherits": "^2.0.1",
                "md5.js": "^1.3.4",
                "ripemd160": "^2.0.1",
                "sha.js": "^2.4.0"
            }
        },
        "create-hmac": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
            "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
            "requires": {
                "cipher-base": "^1.0.3",
                "create-hash": "^1.1.0",
                "inherits": "^2.0.1",
                "ripemd160": "^2.0.0",
                "safe-buffer": "^5.0.1",
                "sha.js": "^2.4.8"
            }
        },
        "cross-spawn": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-3.0.1.tgz",
            "integrity": "sha1-ElYDfsufDF9549bvE14wdwGEuYI=",
            "requires": {
                "lru-cache": "^4.0.1",
                "which": "^1.2.9"
            }
        },
        "crypto-browserify": {
            "version": "3.12.0",
            "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
            "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
            "requires": {
                "browserify-cipher": "^1.0.0",
                "browserify-sign": "^4.0.0",
                "create-ecdh": "^4.0.0",
                "create-hash": "^1.1.0",
                "create-hmac": "^1.1.0",
                "diffie-hellman": "^5.0.0",
                "inherits": "^2.0.1",
                "pbkdf2": "^3.0.3",
                "public-encrypt": "^4.0.0",
                "randombytes": "^2.0.0",
                "randomfill": "^1.0.3"
            }
        },
        "crypto-random-string": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
            "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA=="
        },
        "css": {
            "version": "2.2.4",
            "resolved": "https://registry.npmjs.org/css/-/css-2.2.4.tgz",
            "integrity": "sha512-oUnjmWpy0niI3x/mPL8dVEI1l7MnG3+HHyRPHf+YFSbK+svOhXpmSOcDURUh2aOCgl2grzrOPt1nHLuCVFULLw==",
            "requires": {
                "inherits": "^2.0.3",
                "source-map": "^0.6.1",
                "source-map-resolve": "^0.5.2",
                "urix": "^0.1.0"
            }
        },
        "css-blank-pseudo": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/css-blank-pseudo/-/css-blank-pseudo-0.1.4.tgz",
            "integrity": "sha512-LHz35Hr83dnFeipc7oqFDmsjHdljj3TQtxGGiNWSOsTLIAubSm4TEz8qCaKFpk7idaQ1GfWscF4E6mgpBysA1w==",
            "requires": {
                "postcss": "^7.0.5"
            }
        },
        "css-color-keywords": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/css-color-keywords/-/css-color-keywords-1.0.0.tgz",
            "integrity": "sha1-/qJhbcZ2spYmhrOvjb2+GAskTgU="
        },
        "css-color-names": {
            "version": "0.0.4",
            "resolved": "https://registry.npmjs.org/css-color-names/-/css-color-names-0.0.4.tgz",
            "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA="
        },
        "css-declaration-sorter": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
            "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
            "requires": {
                "postcss": "^7.0.1",
                "timsort": "^0.3.0"
            }
        },
        "css-has-pseudo": {
            "version": "0.10.0",
            "resolved": "https://registry.npmjs.org/css-has-pseudo/-/css-has-pseudo-0.10.0.tgz",
            "integrity": "sha512-Z8hnfsZu4o/kt+AuFzeGpLVhFOGO9mluyHBaA2bA8aCGTwah5sT3WV/fTHH8UNZUytOIImuGPrl/prlb4oX4qQ==",
            "requires": {
                "postcss": "^7.0.6",
                "postcss-selector-parser": "^5.0.0-rc.4"
            },
            "dependencies": {
                "cssesc": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
                    "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
                },
                "postcss-selector-parser": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
                    "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
                    "requires": {
                        "cssesc": "^2.0.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "css-loader": {
            "version": "3.4.2",
            "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-3.4.2.tgz",
            "integrity": "sha512-jYq4zdZT0oS0Iykt+fqnzVLRIeiPWhka+7BqPn+oSIpWJAHak5tmB/WZrJ2a21JhCeFyNnnlroSl8c+MtVndzA==",
            "requires": {
                "camelcase": "^5.3.1",
                "cssesc": "^3.0.0",
                "icss-utils": "^4.1.1",
                "loader-utils": "^1.2.3",
                "normalize-path": "^3.0.0",
                "postcss": "^7.0.23",
                "postcss-modules-extract-imports": "^2.0.0",
                "postcss-modules-local-by-default": "^3.0.2",
                "postcss-modules-scope": "^2.1.1",
                "postcss-modules-values": "^3.0.0",
                "postcss-value-parser": "^4.0.2",
                "schema-utils": "^2.6.0"
            },
            "dependencies": {
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
                }
            }
        },
        "css-prefers-color-scheme": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/css-prefers-color-scheme/-/css-prefers-color-scheme-3.1.1.tgz",
            "integrity": "sha512-MTu6+tMs9S3EUqzmqLXEcgNRbNkkD/TGFvowpeoWJn5Vfq7FMgsmRQs9X5NXAURiOBmOxm/lLjsDNXDE6k9bhg==",
            "requires": {
                "postcss": "^7.0.5"
            }
        },
        "css-select": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
            "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
            "requires": {
                "boolbase": "^1.0.0",
                "css-what": "^3.2.1",
                "domutils": "^1.7.0",
                "nth-check": "^1.0.2"
            }
        },
        "css-select-base-adapter": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
            "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w=="
        },
        "css-to-react-native": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/css-to-react-native/-/css-to-react-native-3.0.0.tgz",
            "integrity": "sha512-Ro1yETZA813eoyUp2GDBhG2j+YggidUmzO1/v9eYBKR2EHVEniE2MI/NqpTQ954BMpTPZFsGNPm46qFB9dpaPQ==",
            "requires": {
                "camelize": "^1.0.0",
                "css-color-keywords": "^1.0.0",
                "postcss-value-parser": "^4.0.2"
            }
        },
        "css-tree": {
            "version": "1.0.0-alpha.37",
            "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
            "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
            "requires": {
                "mdn-data": "2.0.4",
                "source-map": "^0.6.1"
            }
        },
        "css-what": {
            "version": "3.4.2",
            "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
            "integrity": "sha512-ACUm3L0/jiZTqfzRM3Hi9Q8eZqd6IK37mMWPLz9PJxkLWllYeRf+EHUSHYEtFop2Eqytaq1FizFVh7XfBnXCDQ=="
        },
        "css.escape": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/css.escape/-/css.escape-1.5.1.tgz",
            "integrity": "sha1-QuJ9T6BK4y+TGktNQZH6nN3ul8s="
        },
        "cssdb": {
            "version": "4.4.0",
            "resolved": "https://registry.npmjs.org/cssdb/-/cssdb-4.4.0.tgz",
            "integrity": "sha512-LsTAR1JPEM9TpGhl/0p3nQecC2LJ0kD8X5YARu1hk/9I1gril5vDtMZyNxcEpxxDj34YNck/ucjuoUd66K03oQ=="
        },
        "cssesc": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
            "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg=="
        },
        "cssnano": {
            "version": "4.1.10",
            "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-4.1.10.tgz",
            "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
            "requires": {
                "cosmiconfig": "^5.0.0",
                "cssnano-preset-default": "^4.0.7",
                "is-resolvable": "^1.0.0",
                "postcss": "^7.0.0"
            }
        },
        "cssnano-preset-default": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
            "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
            "requires": {
                "css-declaration-sorter": "^4.0.1",
                "cssnano-util-raw-cache": "^4.0.1",
                "postcss": "^7.0.0",
                "postcss-calc": "^7.0.1",
                "postcss-colormin": "^4.0.3",
                "postcss-convert-values": "^4.0.1",
                "postcss-discard-comments": "^4.0.2",
                "postcss-discard-duplicates": "^4.0.2",
                "postcss-discard-empty": "^4.0.1",
                "postcss-discard-overridden": "^4.0.1",
                "postcss-merge-longhand": "^4.0.11",
                "postcss-merge-rules": "^4.0.3",
                "postcss-minify-font-values": "^4.0.2",
                "postcss-minify-gradients": "^4.0.2",
                "postcss-minify-params": "^4.0.2",
                "postcss-minify-selectors": "^4.0.2",
                "postcss-normalize-charset": "^4.0.1",
                "postcss-normalize-display-values": "^4.0.2",
                "postcss-normalize-positions": "^4.0.2",
                "postcss-normalize-repeat-style": "^4.0.2",
                "postcss-normalize-string": "^4.0.2",
                "postcss-normalize-timing-functions": "^4.0.2",
                "postcss-normalize-unicode": "^4.0.1",
                "postcss-normalize-url": "^4.0.1",
                "postcss-normalize-whitespace": "^4.0.2",
                "postcss-ordered-values": "^4.1.2",
                "postcss-reduce-initial": "^4.0.3",
                "postcss-reduce-transforms": "^4.0.2",
                "postcss-svgo": "^4.0.2",
                "postcss-unique-selectors": "^4.0.1"
            }
        },
        "cssnano-util-get-arguments": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
            "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8="
        },
        "cssnano-util-get-match": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
            "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0="
        },
        "cssnano-util-raw-cache": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
            "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "cssnano-util-same-parent": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
            "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q=="
        },
        "csso": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/csso/-/csso-4.0.3.tgz",
            "integrity": "sha512-NL3spysxUkcrOgnpsT4Xdl2aiEiBG6bXswAABQVHcMrfjjBisFOKwLDOmf4wf32aPdcJws1zds2B0Rg+jqMyHQ==",
            "requires": {
                "css-tree": "1.0.0-alpha.39"
            },
            "dependencies": {
                "css-tree": {
                    "version": "1.0.0-alpha.39",
                    "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.39.tgz",
                    "integrity": "sha512-7UvkEYgBAHRG9Nt980lYxjsTrCyHFN53ky3wVsDkiMdVqylqRt+Zc+jm5qw7/qyOvN2dHSYtX0e4MbCCExSvnA==",
                    "requires": {
                        "mdn-data": "2.0.6",
                        "source-map": "^0.6.1"
                    }
                },
                "mdn-data": {
                    "version": "2.0.6",
                    "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.6.tgz",
                    "integrity": "sha512-rQvjv71olwNHgiTbfPZFkJtjNMciWgswYeciZhtvWLO8bmX3TnhyA62I6sTWOyZssWHJJjY6/KiWwqQsWWsqOA=="
                }
            }
        },
        "cssom": {
            "version": "0.3.8",
            "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
            "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="
        },
        "cssstyle": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
            "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
            "requires": {
                "cssom": "0.3.x"
            }
        },
        "csstype": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.0.3.tgz",
            "integrity": "sha512-jPl+wbWPOWJ7SXsWyqGRk3lGecbar0Cb0OvZF/r/ZU011R4YqiRehgkQ9p4eQfo9DSDLqLL3wHwfxeJiuIsNag=="
        },
        "currently-unhandled": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
            "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
            "requires": {
                "array-find-index": "^1.0.1"
            }
        },
        "cyclist": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-1.0.1.tgz",
            "integrity": "sha1-WW6WmP0MgOEgOMK4LW6xs1tiJNk="
        },
        "d": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",
            "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",
            "requires": {
                "es5-ext": "^0.10.50",
                "type": "^1.0.1"
            }
        },
        "damerau-levenshtein": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.6.tgz",
            "integrity": "sha512-JVrozIeElnj3QzfUIt8tB8YMluBJom4Vw9qTPpjGYQ9fYlB3D/rb6OordUxf3xeFB35LKWs0xqcO5U6ySvBtug=="
        },
        "dashdash": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
            "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "data-urls": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
            "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
            "requires": {
                "abab": "^2.0.0",
                "whatwg-mimetype": "^2.2.0",
                "whatwg-url": "^7.0.0"
            },
            "dependencies": {
                "whatwg-url": {
                    "version": "7.1.0",
                    "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
                    "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
                    "requires": {
                        "lodash.sortby": "^4.7.0",
                        "tr46": "^1.0.1",
                        "webidl-conversions": "^4.0.2"
                    }
                }
            }
        },
        "debug": {
            "version": "3.2.6",
            "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
            "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
            "requires": {
                "ms": "^2.1.1"
            }
        },
        "debug-log": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/debug-log/-/debug-log-1.0.1.tgz",
            "integrity": "sha1-IwdjLUwEOCuN+KMvcLiVBG1SdF8=",
            "dev": true
        },
        "decamelize": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
            "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
        },
        "decamelize-keys": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/decamelize-keys/-/decamelize-keys-1.1.0.tgz",
            "integrity": "sha1-0XGoeTMlKAfrPLYdwcFEXQeN8tk=",
            "requires": {
                "decamelize": "^1.1.0",
                "map-obj": "^1.0.0"
            }
        },
        "decode-uri-component": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
            "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
        },
        "decompress-response": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
            "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
            "requires": {
                "mimic-response": "^1.0.0"
            }
        },
        "deep-equal": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
            "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
            "requires": {
                "is-arguments": "^1.0.4",
                "is-date-object": "^1.0.1",
                "is-regex": "^1.0.4",
                "object-is": "^1.0.1",
                "object-keys": "^1.1.1",
                "regexp.prototype.flags": "^1.2.0"
            }
        },
        "deep-extend": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
            "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
        },
        "deep-is": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
            "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ="
        },
        "deepmerge": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-2.2.1.tgz",
            "integrity": "sha512-R9hc1Xa/NOBi9WRVUWg19rl1UB7Tt4kuPd+thNJgFZoxXsTz7ncaPaeIm+40oSGuP33DfMb4sZt1QIGiJzC4EA=="
        },
        "default-gateway": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-4.2.0.tgz",
            "integrity": "sha512-h6sMrVB1VMWVrW13mSc6ia/DwYYw5MN6+exNu1OaJeFac5aSAvwM7lZ0NVfTABuSkQelr4h5oebg3KB1XPdjgA==",
            "requires": {
                "execa": "^1.0.0",
                "ip-regex": "^2.1.0"
            }
        },
        "defer-to-connect": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
            "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ=="
        },
        "define-properties": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
            "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
            "requires": {
                "object-keys": "^1.0.12"
            }
        },
        "define-property": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
            "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
            "requires": {
                "is-descriptor": "^1.0.2",
                "isobject": "^3.0.1"
            },
            "dependencies": {
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                },
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                }
            }
        },
        "deglob": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/deglob/-/deglob-4.0.1.tgz",
            "integrity": "sha512-/g+RDZ7yf2HvoW+E5Cy+K94YhgcFgr6C8LuHZD1O5HoNPkf3KY6RfXJ0DBGlB/NkLi5gml+G9zqRzk9S0mHZCg==",
            "dev": true,
            "requires": {
                "find-root": "^1.0.0",
                "glob": "^7.0.5",
                "ignore": "^5.0.0",
                "pkg-config": "^1.1.0",
                "run-parallel": "^1.1.2",
                "uniq": "^1.0.1"
            },
            "dependencies": {
                "ignore": {
                    "version": "5.1.8",
                    "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
                    "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
                    "dev": true
                }
            }
        },
        "del": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/del/-/del-4.1.1.tgz",
            "integrity": "sha512-QwGuEUouP2kVwQenAsOof5Fv8K9t3D8Ca8NxcXKrIpEHjTXK5J2nXLdP+ALI1cgv8wj7KuwBhTwBkOZSJKM5XQ==",
            "requires": {
                "@types/glob": "^7.1.1",
                "globby": "^6.1.0",
                "is-path-cwd": "^2.0.0",
                "is-path-in-cwd": "^2.0.0",
                "p-map": "^2.0.0",
                "pify": "^4.0.1",
                "rimraf": "^2.6.3"
            },
            "dependencies": {
                "globby": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
                    "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
                    "requires": {
                        "array-union": "^1.0.1",
                        "glob": "^7.0.3",
                        "object-assign": "^4.0.1",
                        "pify": "^2.0.0",
                        "pinkie-promise": "^2.0.0"
                    },
                    "dependencies": {
                        "pify": {
                            "version": "2.3.0",
                            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
                        }
                    }
                },
                "p-map": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/p-map/-/p-map-2.1.0.tgz",
                    "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw=="
                },
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
                }
            }
        },
        "delayed-stream": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
            "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
        },
        "delegates": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
            "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
        },
        "depd": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
            "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
        },
        "des.js": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
            "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
            "requires": {
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0"
            }
        },
        "destroy": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
            "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
        },
        "detect-newline": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-2.1.0.tgz",
            "integrity": "sha1-9B8cEL5LAOh7XxPaaAdZ8sW/0+I="
        },
        "detect-node": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.0.4.tgz",
            "integrity": "sha512-ZIzRpLJrOj7jjP2miAtgqIfmzbxa4ZOr5jJc601zklsfEx9oTzmmj2nVpIPRpNlRTIh8lc1kyViIY7BWSGNmKw=="
        },
        "detect-port-alt": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/detect-port-alt/-/detect-port-alt-1.1.6.tgz",
            "integrity": "sha512-5tQykt+LqfJFBEYaDITx7S7cR7mJ/zQmLXZ2qt5w04ainYZw6tBf9dBunMjVeVOdYVRUzUOE4HkY5J7+uttb5Q==",
            "requires": {
                "address": "^1.0.1",
                "debug": "^2.6.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "diff-sequences": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-24.9.0.tgz",
            "integrity": "sha512-Dj6Wk3tWyTE+Fo1rW8v0Xhwk80um6yFYKbuAxc9c3EZxIHFDYwbi34Uk42u1CdnIiVorvt4RmlSDjIPyzGC2ew=="
        },
        "diffie-hellman": {
            "version": "5.0.3",
            "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
            "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
            "requires": {
                "bn.js": "^4.1.0",
                "miller-rabin": "^4.0.0",
                "randombytes": "^2.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw=="
                }
            }
        },
        "dir-glob": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-2.0.0.tgz",
            "integrity": "sha512-37qirFDz8cA5fimp9feo43fSuRo2gHwaIn6dXL8Ber1dGwUosDrGZeCCXq57WnIqE4aQ+u3eQZzsk1yOzhdwag==",
            "requires": {
                "arrify": "^1.0.1",
                "path-type": "^3.0.0"
            },
            "dependencies": {
                "path-type": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
                    "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
                    "requires": {
                        "pify": "^3.0.0"
                    }
                },
                "pify": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
                    "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY="
                }
            }
        },
        "dns-equal": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
            "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0="
        },
        "dns-packet": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.1.tgz",
            "integrity": "sha512-0UxfQkMhYAUaZI+xrNZOz/as5KgDU0M/fQ9b6SpkyLbk3GEswDi6PADJVaYJradtRVsRIlF1zLyOodbcTCDzUg==",
            "requires": {
                "ip": "^1.1.0",
                "safe-buffer": "^5.0.1"
            }
        },
        "dns-txt": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
            "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
            "requires": {
                "buffer-indexof": "^1.0.0"
            }
        },
        "doctrine": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
            "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
            "requires": {
                "esutils": "^2.0.2"
            },
            "dependencies": {
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
                }
            }
        },
        "dom-accessibility-api": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/dom-accessibility-api/-/dom-accessibility-api-0.3.0.tgz",
            "integrity": "sha512-PzwHEmsRP3IGY4gv/Ug+rMeaTIyTJvadCb+ujYXYeIylbHJezIyNToe8KfEgHTCEYyC+/bUghYOGg8yMGlZ6vA=="
        },
        "dom-converter": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/dom-converter/-/dom-converter-0.2.0.tgz",
            "integrity": "sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==",
            "requires": {
                "utila": "~0.4"
            }
        },
        "dom-serializer": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
            "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
            "requires": {
                "domelementtype": "^2.0.1",
                "entities": "^2.0.0"
            },
            "dependencies": {
                "domelementtype": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.2.tgz",
                    "integrity": "sha512-wFwTwCVebUrMgGeAwRL/NhZtHAUyT9n9yg4IMDwf10+6iCMxSkVq9MGCVEH+QZWo1nNidy8kNvwmv4zWHDTqvA=="
                }
            }
        },
        "dom7": {
            "version": "3.0.0-alpha.9",
            "resolved": "https://registry.npmjs.org/dom7/-/dom7-3.0.0-alpha.9.tgz",
            "integrity": "sha512-wTxPe1vJqLAy2PzAROh/n1PsRF/ZklAJyRIn9shm2dAQjP4JhjsgDKQ1YTbuzf1KVlqOlqYPmwupQExcB9jOUg==",
            "requires": {
                "ssr-window": "^3.0.0-alpha.1"
            }
        },
        "domain-browser": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
            "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA=="
        },
        "domelementtype": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
            "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w=="
        },
        "domexception": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
            "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
            "requires": {
                "webidl-conversions": "^4.0.2"
            }
        },
        "domhandler": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
            "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
            "requires": {
                "domelementtype": "1"
            }
        },
        "domutils": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
            "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
            "requires": {
                "dom-serializer": "0",
                "domelementtype": "1"
            }
        },
        "dot-case": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.3.tgz",
            "integrity": "sha512-7hwEmg6RiSQfm/GwPL4AAWXKy3YNNZA3oFv2Pdiey0mwkRCPZ9x6SZbkLcn8Ma5PYeVokzoD4Twv2n7LKp5WeA==",
            "requires": {
                "no-case": "^3.0.3",
                "tslib": "^1.10.0"
            }
        },
        "dot-prop": {
            "version": "5.3.0",
            "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
            "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
            "requires": {
                "is-obj": "^2.0.0"
            }
        },
        "dotenv": {
            "version": "8.2.0",
            "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.2.0.tgz",
            "integrity": "sha512-8sJ78ElpbDJBHNeBzUbUVLsqKdccaa/BXF1uPTw3GrvQTBgrQrtObr2mUrE38vzYd8cEv+m/JBfDLioYcfXoaw=="
        },
        "dotenv-expand": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
            "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA=="
        },
        "duplexer": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
            "integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg=="
        },
        "duplexer3": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
            "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
        },
        "duplexify": {
            "version": "3.7.1",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
            "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
            "requires": {
                "end-of-stream": "^1.0.0",
                "inherits": "^2.0.1",
                "readable-stream": "^2.0.0",
                "stream-shift": "^1.0.0"
            }
        },
        "ecc-jsbn": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
            "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
            "requires": {
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.1.0"
            }
        },
        "ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
        },
        "electron-to-chromium": {
            "version": "1.3.579",
            "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.579.tgz",
            "integrity": "sha512-9HaGm4UDxCtcmIqWWdv79pGgpRZWTqr+zg6kxp0MelSHfe1PNjrI8HXy1HgTSy4p0iQETGt8/ElqKFLW008BSA=="
        },
        "elliptic": {
            "version": "6.5.3",
            "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
            "integrity": "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
            "requires": {
                "bn.js": "^4.4.0",
                "brorand": "^1.0.1",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.0",
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw=="
                }
            }
        },
        "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
        },
        "emojis-list": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
            "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q=="
        },
        "encodeurl": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
            "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
        },
        "end-of-stream": {
            "version": "1.4.4",
            "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
            "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
            "requires": {
                "once": "^1.4.0"
            }
        },
        "enhanced-resolve": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.3.0.tgz",
            "integrity": "sha512-3e87LvavsdxyoCfGusJnrZ5G8SLPOFeHSNpZI/ATL9a5leXo2k0w6MKnbqhdBad9qTobSfB20Ld7UmgoNbAZkQ==",
            "requires": {
                "graceful-fs": "^4.1.2",
                "memory-fs": "^0.5.0",
                "tapable": "^1.0.0"
            },
            "dependencies": {
                "memory-fs": {
                    "version": "0.5.0",
                    "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.5.0.tgz",
                    "integrity": "sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==",
                    "requires": {
                        "errno": "^0.1.3",
                        "readable-stream": "^2.0.1"
                    }
                }
            }
        },
        "entities": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/entities/-/entities-2.0.3.tgz",
            "integrity": "sha512-MyoZ0jgnLvB2X3Lg5HqpFmn1kybDiIfEQmKzTb5apr51Rb+T3KdmMiqa70T+bhGnyv7bQ6WMj2QMHpGMmlrUYQ=="
        },
        "errno": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.7.tgz",
            "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
            "requires": {
                "prr": "~1.0.1"
            }
        },
        "error-ex": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
            "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
            "requires": {
                "is-arrayish": "^0.2.1"
            }
        },
        "es-abstract": {
            "version": "1.17.7",
            "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.7.tgz",
            "integrity": "sha512-VBl/gnfcJ7OercKA9MVaegWsBHFjV492syMudcnQZvt/Dw8ezpcOHYZXa/J96O8vx+g4x65YKhxOwDUh63aS5g==",
            "requires": {
                "es-to-primitive": "^1.2.1",
                "function-bind": "^1.1.1",
                "has": "^1.0.3",
                "has-symbols": "^1.0.1",
                "is-callable": "^1.2.2",
                "is-regex": "^1.1.1",
                "object-inspect": "^1.8.0",
                "object-keys": "^1.1.1",
                "object.assign": "^4.1.1",
                "string.prototype.trimend": "^1.0.1",
                "string.prototype.trimstart": "^1.0.1"
            }
        },
        "es-to-primitive": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
            "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
            "requires": {
                "is-callable": "^1.1.4",
                "is-date-object": "^1.0.1",
                "is-symbol": "^1.0.2"
            }
        },
        "es5-ext": {
            "version": "0.10.53",
            "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.53.tgz",
            "integrity": "sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==",
            "requires": {
                "es6-iterator": "~2.0.3",
                "es6-symbol": "~3.1.3",
                "next-tick": "~1.0.0"
            }
        },
        "es6-iterator": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
            "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
            "requires": {
                "d": "1",
                "es5-ext": "^0.10.35",
                "es6-symbol": "^3.1.1"
            }
        },
        "es6-symbol": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",
            "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",
            "requires": {
                "d": "^1.0.1",
                "ext": "^1.1.2"
            }
        },
        "escalade": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
            "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="
        },
        "escape-goat": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
            "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q=="
        },
        "escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
        },
        "escape-string-regexp": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
            "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
        },
        "escodegen": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.2.0.tgz",
            "integrity": "sha1-Cd55Z3kcyVi3+Jot220jRRrzJ+E=",
            "requires": {
                "esprima": "~1.0.4",
                "estraverse": "~1.5.0",
                "esutils": "~1.0.0",
                "source-map": "~0.1.30"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.1.43",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.43.tgz",
                    "integrity": "sha1-wkvBRspRfBRx9drL4lcbK3+eM0Y=",
                    "optional": true,
                    "requires": {
                        "amdefine": ">=0.0.4"
                    }
                }
            }
        },
        "eslint": {
            "version": "6.8.0",
            "resolved": "https://registry.npmjs.org/eslint/-/eslint-6.8.0.tgz",
            "integrity": "sha512-K+Iayyo2LtyYhDSYwz5D5QdWw0hCacNzyq1Y821Xna2xSJj7cijoLLYmLxTQgcgZ9mC61nryMy9S7GRbYpI5Ig==",
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "ajv": "^6.10.0",
                "chalk": "^2.1.0",
                "cross-spawn": "^6.0.5",
                "debug": "^4.0.1",
                "doctrine": "^3.0.0",
                "eslint-scope": "^5.0.0",
                "eslint-utils": "^1.4.3",
                "eslint-visitor-keys": "^1.1.0",
                "espree": "^6.1.2",
                "esquery": "^1.0.1",
                "esutils": "^2.0.2",
                "file-entry-cache": "^5.0.1",
                "functional-red-black-tree": "^1.0.1",
                "glob-parent": "^5.0.0",
                "globals": "^12.1.0",
                "ignore": "^4.0.6",
                "import-fresh": "^3.0.0",
                "imurmurhash": "^0.1.4",
                "inquirer": "^7.0.0",
                "is-glob": "^4.0.0",
                "js-yaml": "^3.13.1",
                "json-stable-stringify-without-jsonify": "^1.0.1",
                "levn": "^0.3.0",
                "lodash": "^4.17.14",
                "minimatch": "^3.0.4",
                "mkdirp": "^0.5.1",
                "natural-compare": "^1.4.0",
                "optionator": "^0.8.3",
                "progress": "^2.0.0",
                "regexpp": "^2.0.1",
                "semver": "^6.1.2",
                "strip-ansi": "^5.2.0",
                "strip-json-comments": "^3.0.1",
                "table": "^5.2.3",
                "text-table": "^0.2.0",
                "v8-compile-cache": "^2.0.3"
            },
            "dependencies": {
                "cross-spawn": {
                    "version": "6.0.5",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
                    "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
                    "requires": {
                        "nice-try": "^1.0.4",
                        "path-key": "^2.0.1",
                        "semver": "^5.5.0",
                        "shebang-command": "^1.2.0",
                        "which": "^1.2.9"
                    },
                    "dependencies": {
                        "semver": {
                            "version": "5.7.1",
                            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
                        }
                    }
                },
                "debug": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.2.0.tgz",
                    "integrity": "sha512-IX2ncY78vDTjZMFUdmsvIRFY2Cf4FnD0wRs+nQwJU8Lu99/tPFdb0VybiiMTPe3I6rQmwsqQqRBvxU+bZ/I8sg==",
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "eslint-utils": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-1.4.3.tgz",
                    "integrity": "sha512-fbBN5W2xdY45KulGXmLHZ3c3FHfVYmKg0IrAKGOkT/464PQsx2UeIzfz1RmEci+KLm1bBaAzZAh8+/E+XAeZ8Q==",
                    "requires": {
                        "eslint-visitor-keys": "^1.1.0"
                    }
                },
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
                },
                "globals": {
                    "version": "12.4.0",
                    "resolved": "https://registry.npmjs.org/globals/-/globals-12.4.0.tgz",
                    "integrity": "sha512-BWICuzzDvDoH54NHKCseDanAhE3CeDorgDL5MT6LMXXj2WCnd9UC2szdk4AWLfjdgNBCXLUanXYcpBBKOSWGwg==",
                    "requires": {
                        "type-fest": "^0.8.1"
                    }
                },
                "import-fresh": {
                    "version": "3.2.1",
                    "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.2.1.tgz",
                    "integrity": "sha512-6e1q1cnWP2RXD9/keSkxHScg508CdXqXWgWBaETNhyuBFz+kUZlKboh+ISK+bU++DmbHimVBrOz/zzPe0sZ3sQ==",
                    "requires": {
                        "parent-module": "^1.0.0",
                        "resolve-from": "^4.0.0"
                    }
                },
                "regexpp": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-2.0.1.tgz",
                    "integrity": "sha512-lv0M6+TkDVniA3aD1Eg0DVpfU/booSu7Eev3TDO/mZKHBfVjgCGTV4t4buppESEYDtkArYFOxTJWv6S5C+iaNw=="
                },
                "resolve-from": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                    "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                },
                "strip-json-comments": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
                    "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig=="
                }
            }
        },
        "eslint-config-react-app": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/eslint-config-react-app/-/eslint-config-react-app-5.2.1.tgz",
            "integrity": "sha512-pGIZ8t0mFLcV+6ZirRgYK6RVqUIKRIi9MmgzUEmrIknsn3AdO0I32asO86dJgloHq+9ZPl8UIg8mYrvgP5u2wQ==",
            "requires": {
                "confusing-browser-globals": "^1.0.9"
            }
        },
        "eslint-config-standard": {
            "version": "14.1.1",
            "resolved": "https://registry.npmjs.org/eslint-config-standard/-/eslint-config-standard-14.1.1.tgz",
            "integrity": "sha512-Z9B+VR+JIXRxz21udPTL9HpFMyoMUEeX1G251EQ6e05WD9aPVtVBn09XUmZ259wCMlCDmYDSZG62Hhm+ZTJcUg==",
            "dev": true
        },
        "eslint-config-standard-jsx": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/eslint-config-standard-jsx/-/eslint-config-standard-jsx-8.1.0.tgz",
            "integrity": "sha512-ULVC8qH8qCqbU792ZOO6DaiaZyHNS/5CZt3hKqHkEhVlhPEPN3nfBqqxJCyp59XrjIBZPu1chMYe9T2DXZ7TMw==",
            "dev": true
        },
        "eslint-import-resolver-node": {
            "version": "0.3.4",
            "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.4.tgz",
            "integrity": "sha512-ogtf+5AB/O+nM6DIeBUNr2fuT7ot9Qg/1harBfBtaP13ekEWFQEEMP94BCB7zaNW3gyY+8SHYF00rnqYwXKWOA==",
            "requires": {
                "debug": "^2.6.9",
                "resolve": "^1.13.1"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "eslint-loader": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/eslint-loader/-/eslint-loader-3.0.3.tgz",
            "integrity": "sha512-+YRqB95PnNvxNp1HEjQmvf9KNvCin5HXYYseOXVC2U0KEcw4IkQ2IQEBG46j7+gW39bMzeu0GsUhVbBY3Votpw==",
            "requires": {
                "fs-extra": "^8.1.0",
                "loader-fs-cache": "^1.0.2",
                "loader-utils": "^1.2.3",
                "object-hash": "^2.0.1",
                "schema-utils": "^2.6.1"
            }
        },
        "eslint-module-utils": {
            "version": "2.6.0",
            "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.6.0.tgz",
            "integrity": "sha512-6j9xxegbqe8/kZY8cYpcp0xhbK0EgJlg3g9mib3/miLaExuuwc3n5UEfSnU6hWMbT0FAYVvDbL9RrRgpUeQIvA==",
            "requires": {
                "debug": "^2.6.9",
                "pkg-dir": "^2.0.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "find-up": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
                    "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
                    "requires": {
                        "locate-path": "^2.0.0"
                    }
                },
                "locate-path": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
                    "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
                    "requires": {
                        "p-locate": "^2.0.0",
                        "path-exists": "^3.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                },
                "p-limit": {
                    "version": "1.3.0",
                    "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
                    "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
                    "requires": {
                        "p-try": "^1.0.0"
                    }
                },
                "p-locate": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
                    "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
                    "requires": {
                        "p-limit": "^1.1.0"
                    }
                },
                "p-try": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
                    "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
                },
                "path-exists": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
                    "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
                },
                "pkg-dir": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
                    "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
                    "requires": {
                        "find-up": "^2.1.0"
                    }
                }
            }
        },
        "eslint-plugin-es": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/eslint-plugin-es/-/eslint-plugin-es-2.0.0.tgz",
            "integrity": "sha512-f6fceVtg27BR02EYnBhgWLFQfK6bN4Ll0nQFrBHOlCsAyxeZkn0NHns5O0YZOPrV1B3ramd6cgFwaoFLcSkwEQ==",
            "dev": true,
            "requires": {
                "eslint-utils": "^1.4.2",
                "regexpp": "^3.0.0"
            },
            "dependencies": {
                "eslint-utils": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-1.4.3.tgz",
                    "integrity": "sha512-fbBN5W2xdY45KulGXmLHZ3c3FHfVYmKg0IrAKGOkT/464PQsx2UeIzfz1RmEci+KLm1bBaAzZAh8+/E+XAeZ8Q==",
                    "dev": true,
                    "requires": {
                        "eslint-visitor-keys": "^1.1.0"
                    }
                }
            }
        },
        "eslint-plugin-flowtype": {
            "version": "4.6.0",
            "resolved": "https://registry.npmjs.org/eslint-plugin-flowtype/-/eslint-plugin-flowtype-4.6.0.tgz",
            "integrity": "sha512-W5hLjpFfZyZsXfo5anlu7HM970JBDqbEshAJUkeczP6BFCIfJXuiIBQXyberLRtOStT0OGPF8efeTbxlHk4LpQ==",
            "requires": {
                "lodash": "^4.17.15"
            }
        },
        "eslint-plugin-import": {
            "version": "2.22.1",
            "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.22.1.tgz",
            "integrity": "sha512-8K7JjINHOpH64ozkAhpT3sd+FswIZTfMZTjdx052pnWrgRCVfp8op9tbjpAk3DdUeI/Ba4C8OjdC0r90erHEOw==",
            "dev": true,
            "requires": {
                "array-includes": "^3.1.1",
                "array.prototype.flat": "^1.2.3",
                "contains-path": "^0.1.0",
                "debug": "^2.6.9",
                "doctrine": "1.5.0",
                "eslint-import-resolver-node": "^0.3.4",
                "eslint-module-utils": "^2.6.0",
                "has": "^1.0.3",
                "minimatch": "^3.0.4",
                "object.values": "^1.1.1",
                "read-pkg-up": "^2.0.0",
                "resolve": "^1.17.0",
                "tsconfig-paths": "^3.9.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "dev": true,
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "doctrine": {
                    "version": "1.5.0",
                    "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-1.5.0.tgz",
                    "integrity": "sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=",
                    "dev": true,
                    "requires": {
                        "esutils": "^2.0.2",
                        "isarray": "^1.0.0"
                    }
                },
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
                    "dev": true
                },
                "find-up": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
                    "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
                    "dev": true,
                    "requires": {
                        "locate-path": "^2.0.0"
                    }
                },
                "load-json-file": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
                    "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
                    "dev": true,
                    "requires": {
                        "graceful-fs": "^4.1.2",
                        "parse-json": "^2.2.0",
                        "pify": "^2.0.0",
                        "strip-bom": "^3.0.0"
                    }
                },
                "locate-path": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
                    "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
                    "dev": true,
                    "requires": {
                        "p-locate": "^2.0.0",
                        "path-exists": "^3.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
                    "dev": true
                },
                "p-limit": {
                    "version": "1.3.0",
                    "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
                    "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
                    "dev": true,
                    "requires": {
                        "p-try": "^1.0.0"
                    }
                },
                "p-locate": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
                    "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
                    "dev": true,
                    "requires": {
                        "p-limit": "^1.1.0"
                    }
                },
                "p-try": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
                    "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
                    "dev": true
                },
                "path-exists": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
                    "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
                    "dev": true
                },
                "path-type": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
                    "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
                    "dev": true,
                    "requires": {
                        "pify": "^2.0.0"
                    }
                },
                "read-pkg": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
                    "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
                    "dev": true,
                    "requires": {
                        "load-json-file": "^2.0.0",
                        "normalize-package-data": "^2.3.2",
                        "path-type": "^2.0.0"
                    }
                },
                "read-pkg-up": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
                    "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
                    "dev": true,
                    "requires": {
                        "find-up": "^2.0.0",
                        "read-pkg": "^2.0.0"
                    }
                },
                "strip-bom": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
                    "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
                    "dev": true
                }
            }
        },
        "eslint-plugin-jsx-a11y": {
            "version": "6.2.3",
            "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.2.3.tgz",
            "integrity": "sha512-CawzfGt9w83tyuVekn0GDPU9ytYtxyxyFZ3aSWROmnRRFQFT2BiPJd7jvRdzNDi6oLWaS2asMeYSNMjWTV4eNg==",
            "requires": {
                "@babel/runtime": "^7.4.5",
                "aria-query": "^3.0.0",
                "array-includes": "^3.0.3",
                "ast-types-flow": "^0.0.7",
                "axobject-query": "^2.0.2",
                "damerau-levenshtein": "^1.0.4",
                "emoji-regex": "^7.0.2",
                "has": "^1.0.3",
                "jsx-ast-utils": "^2.2.1"
            },
            "dependencies": {
                "aria-query": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-3.0.0.tgz",
                    "integrity": "sha1-ZbP8wcoRVajJrmTW7uKX8V1RM8w=",
                    "requires": {
                        "ast-types-flow": "0.0.7",
                        "commander": "^2.11.0"
                    }
                }
            }
        },
        "eslint-plugin-node": {
            "version": "10.0.0",
            "resolved": "https://registry.npmjs.org/eslint-plugin-node/-/eslint-plugin-node-10.0.0.tgz",
            "integrity": "sha512-1CSyM/QCjs6PXaT18+zuAXsjXGIGo5Rw630rSKwokSs2jrYURQc4R5JZpoanNCqwNmepg+0eZ9L7YiRUJb8jiQ==",
            "dev": true,
            "requires": {
                "eslint-plugin-es": "^2.0.0",
                "eslint-utils": "^1.4.2",
                "ignore": "^5.1.1",
                "minimatch": "^3.0.4",
                "resolve": "^1.10.1",
                "semver": "^6.1.0"
            },
            "dependencies": {
                "eslint-utils": {
                    "version": "1.4.3",
                    "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-1.4.3.tgz",
                    "integrity": "sha512-fbBN5W2xdY45KulGXmLHZ3c3FHfVYmKg0IrAKGOkT/464PQsx2UeIzfz1RmEci+KLm1bBaAzZAh8+/E+XAeZ8Q==",
                    "dev": true,
                    "requires": {
                        "eslint-visitor-keys": "^1.1.0"
                    }
                },
                "ignore": {
                    "version": "5.1.8",
                    "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz",
                    "integrity": "sha512-BMpfD7PpiETpBl/A6S498BaIJ6Y/ABT93ETbby2fP00v4EbvPBXWEoaR1UBPKs3iR53pJY7EtZk5KACI57i1Uw==",
                    "dev": true
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "eslint-plugin-promise": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/eslint-plugin-promise/-/eslint-plugin-promise-4.2.1.tgz",
            "integrity": "sha512-VoM09vT7bfA7D+upt+FjeBO5eHIJQBUWki1aPvB+vbNiHS3+oGIJGIeyBtKQTME6UPXXy3vV07OL1tHd3ANuDw==",
            "dev": true
        },
        "eslint-plugin-react": {
            "version": "7.21.4",
            "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.21.4.tgz",
            "integrity": "sha512-uHeQ8A0hg0ltNDXFu3qSfFqTNPXm1XithH6/SY318UX76CMj7Q599qWpgmMhVQyvhq36pm7qvoN3pb6/3jsTFg==",
            "dev": true,
            "requires": {
                "array-includes": "^3.1.1",
                "array.prototype.flatmap": "^1.2.3",
                "doctrine": "^2.1.0",
                "has": "^1.0.3",
                "jsx-ast-utils": "^2.4.1 || ^3.0.0",
                "object.entries": "^1.1.2",
                "object.fromentries": "^2.0.2",
                "object.values": "^1.1.1",
                "prop-types": "^15.7.2",
                "resolve": "^1.17.0",
                "string.prototype.matchall": "^4.0.2"
            },
            "dependencies": {
                "doctrine": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
                    "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
                    "dev": true,
                    "requires": {
                        "esutils": "^2.0.2"
                    }
                },
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
                    "dev": true
                }
            }
        },
        "eslint-plugin-react-hooks": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-1.7.0.tgz",
            "integrity": "sha512-iXTCFcOmlWvw4+TOE8CLWj6yX1GwzT0Y6cUfHHZqWnSk144VmVIRcVGtUAzrLES7C798lmvnt02C7rxaOX1HNA=="
        },
        "eslint-plugin-standard": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/eslint-plugin-standard/-/eslint-plugin-standard-4.0.1.tgz",
            "integrity": "sha512-v/KBnfyaOMPmZc/dmc6ozOdWqekGp7bBGq4jLAecEfPGmfKiWS4sA8sC0LqiV9w5qmXAtXVn4M3p1jSyhY85SQ==",
            "dev": true
        },
        "eslint-scope": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
            "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
            "requires": {
                "esrecurse": "^4.3.0",
                "estraverse": "^4.1.1"
            },
            "dependencies": {
                "estraverse": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
                    "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
                }
            }
        },
        "eslint-utils": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-2.1.0.tgz",
            "integrity": "sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==",
            "requires": {
                "eslint-visitor-keys": "^1.1.0"
            }
        },
        "eslint-visitor-keys": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-1.3.0.tgz",
            "integrity": "sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ=="
        },
        "espree": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/espree/-/espree-6.2.1.tgz",
            "integrity": "sha512-ysCxRQY3WaXJz9tdbWOwuWr5Y/XrPTGX9Kiz3yoUXwW0VZ4w30HTkQLaGx/+ttFjF8i+ACbArnB4ce68a9m5hw==",
            "requires": {
                "acorn": "^7.1.1",
                "acorn-jsx": "^5.2.0",
                "eslint-visitor-keys": "^1.1.0"
            }
        },
        "esprima": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-1.0.4.tgz",
            "integrity": "sha1-n1V+CPw7TSbs6d00+Pv0drYlha0="
        },
        "esquery": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.3.1.tgz",
            "integrity": "sha512-olpvt9QG0vniUBZspVRN6lwB7hOZoTRtT+jzR+tS4ffYx2mzbw+z0XCOk44aaLYKApNX5nMm+E+P6o25ip/DHQ==",
            "requires": {
                "estraverse": "^5.1.0"
            },
            "dependencies": {
                "estraverse": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
                    "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ=="
                }
            }
        },
        "esrecurse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
            "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
            "requires": {
                "estraverse": "^5.2.0"
            },
            "dependencies": {
                "estraverse": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
                    "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ=="
                }
            }
        },
        "estraverse": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-1.5.1.tgz",
            "integrity": "sha1-hno+jlip+EYYr7bC3bzZFrfLr3E="
        },
        "esutils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/esutils/-/esutils-1.0.0.tgz",
            "integrity": "sha1-gVHTWOIMisx/t0XnRywAJf5JZXA="
        },
        "etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
        },
        "eve": {
            "version": "0.5.4",
            "resolved": "https://registry.npmjs.org/eve/-/eve-0.5.4.tgz",
            "integrity": "sha1-Z9CAuXJSkdfjieNMJoYN2X8d66o="
        },
        "eventemitter3": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
            "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw=="
        },
        "events": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
            "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg=="
        },
        "eventsource": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-1.0.7.tgz",
            "integrity": "sha512-4Ln17+vVT0k8aWq+t/bF5arcS3EpT9gYtW66EPacdj/mAFevznsnyoHLPy2BA8gbIQeIHoPsvwmfBftfcG//BQ==",
            "requires": {
                "original": "^1.0.0"
            }
        },
        "evp_bytestokey": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
            "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
            "requires": {
                "md5.js": "^1.3.4",
                "safe-buffer": "^5.1.1"
            }
        },
        "exec-sh": {
            "version": "0.3.4",
            "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.4.tgz",
            "integrity": "sha512-sEFIkc61v75sWeOe72qyrqg2Qg0OuLESziUDk/O/z2qgS15y2gWVFrI6f2Qn/qw/0/NCfCEsmNA4zOjkwEZT1A=="
        },
        "execa": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
            "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
            "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^4.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
            },
            "dependencies": {
                "cross-spawn": {
                    "version": "6.0.5",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
                    "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
                    "requires": {
                        "nice-try": "^1.0.4",
                        "path-key": "^2.0.1",
                        "semver": "^5.5.0",
                        "shebang-command": "^1.2.0",
                        "which": "^1.2.9"
                    }
                }
            }
        },
        "execall": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/execall/-/execall-2.0.0.tgz",
            "integrity": "sha512-0FU2hZ5Hh6iQnarpRtQurM/aAvp3RIbfvgLHrcqJYzhXyV2KFruhuChf9NC6waAhiUR7FFtlugkI4p7f2Fqlow==",
            "requires": {
                "clone-regexp": "^2.1.0"
            }
        },
        "exit": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
            "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="
        },
        "expand-brackets": {
            "version": "2.1.4",
            "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
            "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
            "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "expect": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/expect/-/expect-24.9.0.tgz",
            "integrity": "sha512-wvVAx8XIol3Z5m9zvZXiyZOQ+sRJqNTIm6sGjdWlaZIeupQGO3WbYI+15D/AmEwZywL6wtJkbAbJtzkOfBuR0Q==",
            "requires": {
                "@jest/types": "^24.9.0",
                "ansi-styles": "^3.2.0",
                "jest-get-type": "^24.9.0",
                "jest-matcher-utils": "^24.9.0",
                "jest-message-util": "^24.9.0",
                "jest-regex-util": "^24.9.0"
            }
        },
        "express": {
            "version": "4.17.1",
            "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
            "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
            "requires": {
                "accepts": "~1.3.7",
                "array-flatten": "1.1.1",
                "body-parser": "1.19.0",
                "content-disposition": "0.5.3",
                "content-type": "~1.0.4",
                "cookie": "0.4.0",
                "cookie-signature": "1.0.6",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "finalhandler": "~1.1.2",
                "fresh": "0.5.2",
                "merge-descriptors": "1.0.1",
                "methods": "~1.1.2",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "path-to-regexp": "0.1.7",
                "proxy-addr": "~2.0.5",
                "qs": "6.7.0",
                "range-parser": "~1.2.1",
                "safe-buffer": "5.1.2",
                "send": "0.17.1",
                "serve-static": "1.14.1",
                "setprototypeof": "1.1.1",
                "statuses": "~1.5.0",
                "type-is": "~1.6.18",
                "utils-merge": "1.0.1",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "array-flatten": {
                    "version": "1.1.1",
                    "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
                    "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
                },
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                },
                "path-to-regexp": {
                    "version": "0.1.7",
                    "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
                    "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
                },
                "qs": {
                    "version": "6.7.0",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
                    "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
                }
            }
        },
        "ext": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/ext/-/ext-1.4.0.tgz",
            "integrity": "sha512-Key5NIsUxdqKg3vIsdw9dSuXpPCQ297y6wBjL30edxwPgt2E44WcWBZey/ZvUc6sERLTxKdyCu4gZFmUbk1Q7A==",
            "requires": {
                "type": "^2.0.0"
            },
            "dependencies": {
                "type": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/type/-/type-2.1.0.tgz",
                    "integrity": "sha512-G9absDWvhAWCV2gmF1zKud3OyC61nZDwWvBL2DApaVFogI07CprggiQAOOjvp2NRjYWFzPyu7vwtDrQFq8jeSA=="
                }
            }
        },
        "extend": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
            "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
        },
        "extend-shallow": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
            "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
            "requires": {
                "assign-symbols": "^1.0.0",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "external-editor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
            "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
            "requires": {
                "chardet": "^0.7.0",
                "iconv-lite": "^0.4.24",
                "tmp": "^0.0.33"
            }
        },
        "extglob": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
            "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
            "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                },
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                }
            }
        },
        "extsprintf": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
            "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
        },
        "fast-deep-equal": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
            "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
        },
        "fast-glob": {
            "version": "2.2.7",
            "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-2.2.7.tgz",
            "integrity": "sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==",
            "requires": {
                "@mrmlnc/readdir-enhanced": "^2.2.1",
                "@nodelib/fs.stat": "^1.1.2",
                "glob-parent": "^3.1.0",
                "is-glob": "^4.0.0",
                "merge2": "^1.2.3",
                "micromatch": "^3.1.10"
            },
            "dependencies": {
                "glob-parent": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
                    "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
                    "requires": {
                        "is-glob": "^3.1.0",
                        "path-dirname": "^1.0.0"
                    },
                    "dependencies": {
                        "is-glob": {
                            "version": "3.1.0",
                            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                            "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                            "requires": {
                                "is-extglob": "^2.1.0"
                            }
                        }
                    }
                }
            }
        },
        "fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
        },
        "fast-levenshtein": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
            "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="
        },
        "fastest-levenshtein": {
            "version": "1.0.12",
            "resolved": "https://registry.npmjs.org/fastest-levenshtein/-/fastest-levenshtein-1.0.12.tgz",
            "integrity": "sha512-On2N+BpYJ15xIC974QNVuYGMOlEVt4s0EOI3wwMqOmK1fdDY+FN/zltPV8vosq4ad4c/gJ1KHScUn/6AWIgiow=="
        },
        "fastq": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.8.0.tgz",
            "integrity": "sha512-SMIZoZdLh/fgofivvIkmknUXyPnvxRE3DhtZ5Me3Mrsk5gyPL42F0xr51TdRXskBxHfMp+07bcYzfsYEsSQA9Q==",
            "requires": {
                "reusify": "^1.0.4"
            }
        },
        "faye-websocket": {
            "version": "0.10.0",
            "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.10.0.tgz",
            "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
            "requires": {
                "websocket-driver": ">=0.5.1"
            }
        },
        "fb-watchman": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
            "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
            "requires": {
                "bser": "2.1.1"
            }
        },
        "figgy-pudding": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/figgy-pudding/-/figgy-pudding-3.5.2.tgz",
            "integrity": "sha512-0btnI/H8f2pavGMN8w40mlSKOfTK2SVJmBfBeVIj3kNw0swwgzyRq0d5TJVOwodFmtvpPeWPN/MCcfuWF0Ezbw=="
        },
        "figures": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
            "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
            "requires": {
                "escape-string-regexp": "^1.0.5"
            }
        },
        "file-entry-cache": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-5.0.1.tgz",
            "integrity": "sha512-bCg29ictuBaKUwwArK4ouCaqDgLZcysCFLmM/Yn/FDoqndh/9vNuQfXRDvTuXKLxfD/JtZQGKFT8MGcJBK644g==",
            "requires": {
                "flat-cache": "^2.0.1"
            }
        },
        "file-loader": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-4.3.0.tgz",
            "integrity": "sha512-aKrYPYjF1yG3oX0kWRrqrSMfgftm7oJW5M+m4owoldH5C51C0RkIwB++JbRvEW3IU6/ZG5n8UvEcdgwOt2UOWA==",
            "requires": {
                "loader-utils": "^1.2.3",
                "schema-utils": "^2.5.0"
            }
        },
        "filesize": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/filesize/-/filesize-6.0.1.tgz",
            "integrity": "sha512-u4AYWPgbI5GBhs6id1KdImZWn5yfyFrrQ8OWZdN7ZMfA8Bf4HcO0BGo9bmUIEV8yrp8I1xVfJ/dn90GtFNNJcg=="
        },
        "fill-range": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
            "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
            "requires": {
                "to-regex-range": "^5.0.1"
            }
        },
        "finalhandler": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
            "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
            "requires": {
                "debug": "2.6.9",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "statuses": "~1.5.0",
                "unpipe": "~1.0.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                    "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                    "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "find-cache-dir": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
            "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
            "requires": {
                "commondir": "^1.0.1",
                "make-dir": "^2.0.0",
                "pkg-dir": "^3.0.0"
            },
            "dependencies": {
                "make-dir": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
                    "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
                    "requires": {
                        "pify": "^4.0.1",
                        "semver": "^5.6.0"
                    }
                },
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
                }
            }
        },
        "find-root": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/find-root/-/find-root-1.1.0.tgz",
            "integrity": "sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==",
            "dev": true
        },
        "find-up": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
            "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
            "requires": {
                "path-exists": "^2.0.0",
                "pinkie-promise": "^2.0.0"
            }
        },
        "flat-cache": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-2.0.1.tgz",
            "integrity": "sha512-LoQe6yDuUMDzQAEH8sgmh4Md6oZnc/7PjtwjNFSzveXqSHt6ka9fPBuso7IGf9Rz4uqnSnWiFH2B/zj24a5ReA==",
            "requires": {
                "flatted": "^2.0.0",
                "rimraf": "2.6.3",
                "write": "1.0.3"
            },
            "dependencies": {
                "rimraf": {
                    "version": "2.6.3",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.3.tgz",
                    "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
                    "requires": {
                        "glob": "^7.1.3"
                    }
                }
            }
        },
        "flatted": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/flatted/-/flatted-2.0.2.tgz",
            "integrity": "sha512-r5wGx7YeOwNWNlCA0wQ86zKyDLMQr+/RB8xy74M4hTphfmjlijTSSXGuH8rnvKZnfT9i+75zmd8jcKdMR4O6jA=="
        },
        "flatten": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/flatten/-/flatten-1.0.3.tgz",
            "integrity": "sha512-dVsPA/UwQ8+2uoFe5GHtiBMu48dWLTdsuEd7CKGlZlD78r1TTWBvDuFaFGKCo/ZfEr95Uk56vZoX86OsHkUeIg=="
        },
        "flush-write-stream": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",
            "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",
            "requires": {
                "inherits": "^2.0.3",
                "readable-stream": "^2.3.6"
            }
        },
        "fn-name": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/fn-name/-/fn-name-3.0.0.tgz",
            "integrity": "sha512-eNMNr5exLoavuAMhIUVsOKF79SWd/zG104ef6sxBTSw+cZc6BXdQXDvYcGvp0VbxVVSp1XDUNoz7mg1xMtSznA=="
        },
        "follow-redirects": {
            "version": "1.13.0",
            "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.13.0.tgz",
            "integrity": "sha512-aq6gF1BEKje4a9i9+5jimNFIpq4Q1WiwBToeRK5NvZBd/TRsmW8BsJfOEGkr76TbOyPVD3OVDN910EcUNtRYEA=="
        },
        "for-in": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
            "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
        },
        "for-own": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz",
            "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
            "requires": {
                "for-in": "^1.0.1"
            }
        },
        "forever-agent": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
            "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
        },
        "fork-ts-checker-webpack-plugin": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/fork-ts-checker-webpack-plugin/-/fork-ts-checker-webpack-plugin-3.1.1.tgz",
            "integrity": "sha512-DuVkPNrM12jR41KM2e+N+styka0EgLkTnXmNcXdgOM37vtGeY+oCBK/Jx0hzSeEU6memFCtWb4htrHPMDfwwUQ==",
            "requires": {
                "babel-code-frame": "^6.22.0",
                "chalk": "^2.4.1",
                "chokidar": "^3.3.0",
                "micromatch": "^3.1.10",
                "minimatch": "^3.0.4",
                "semver": "^5.6.0",
                "tapable": "^1.0.0",
                "worker-rpc": "^0.1.0"
            }
        },
        "form-data": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
            "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
            "requires": {
                "asynckit": "^0.4.0",
                "combined-stream": "^1.0.6",
                "mime-types": "^2.1.12"
            }
        },
        "formik": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/formik/-/formik-2.2.0.tgz",
            "integrity": "sha512-l47RfvejhfHNh8rTRVaCaPfx8nyeYDSTLaEqRvLX4qkWnrrq9ByGVCWggVR+0TVtzc5Ub1gLUuVu9UKuGwfhjA==",
            "requires": {
                "deepmerge": "^2.1.1",
                "hoist-non-react-statics": "^3.3.0",
                "lodash": "^4.17.14",
                "lodash-es": "^4.17.14",
                "react-fast-compare": "^2.0.1",
                "scheduler": "^0.18.0",
                "tiny-warning": "^1.0.2",
                "tslib": "^1.10.0"
            },
            "dependencies": {
                "scheduler": {
                    "version": "0.18.0",
                    "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.18.0.tgz",
                    "integrity": "sha512-agTSHR1Nbfi6ulI0kYNK0203joW2Y5W4po4l+v03tOoiJKpTBbxpNhWDvqc/4IcOw+KLmSiQLTasZ4cab2/UWQ==",
                    "requires": {
                        "loose-envify": "^1.1.0",
                        "object-assign": "^4.1.1"
                    }
                }
            }
        },
        "forwarded": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
            "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
        },
        "fragment-cache": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
            "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
            "requires": {
                "map-cache": "^0.2.2"
            }
        },
        "fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
        },
        "from2": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
            "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
            "requires": {
                "inherits": "^2.0.1",
                "readable-stream": "^2.0.0"
            }
        },
        "fs-extra": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
            "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
            "requires": {
                "graceful-fs": "^4.2.0",
                "jsonfile": "^4.0.0",
                "universalify": "^0.1.0"
            }
        },
        "fs-minipass": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
            "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "fs-write-stream-atomic": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
            "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
            "requires": {
                "graceful-fs": "^4.1.2",
                "iferr": "^0.1.5",
                "imurmurhash": "^0.1.4",
                "readable-stream": "1 || 2"
            }
        },
        "fs.realpath": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
            "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
        },
        "fsevents": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.3.tgz",
            "integrity": "sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==",
            "optional": true
        },
        "fstream": {
            "version": "1.0.12",
            "resolved": "https://registry.npmjs.org/fstream/-/fstream-1.0.12.tgz",
            "integrity": "sha512-WvJ193OHa0GHPEL+AycEJgxvBEwyfRkN1vhjca23OaPVMCaLCXTd5qAu82AjTcgP1UJmytkOKb63Ypde7raDIg==",
            "requires": {
                "graceful-fs": "^4.1.2",
                "inherits": "~2.0.0",
                "mkdirp": ">=0.5 0",
                "rimraf": "2"
            }
        },
        "function-bind": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
            "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
        },
        "functional-red-black-tree": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
            "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc="
        },
        "gauge": {
            "version": "2.7.4",
            "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
            "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
            "requires": {
                "aproba": "^1.0.3",
                "console-control-strings": "^1.0.0",
                "has-unicode": "^2.0.0",
                "object-assign": "^4.1.0",
                "signal-exit": "^3.0.0",
                "string-width": "^1.0.1",
                "strip-ansi": "^3.0.1",
                "wide-align": "^1.1.0"
            }
        },
        "gaze": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/gaze/-/gaze-1.1.3.tgz",
            "integrity": "sha512-BRdNm8hbWzFzWHERTrejLqwHDfS4GibPoq5wjTPIoJHoBtKGPg3xAFfxmM+9ztbXelxcf2hwQcaz1PtmFeue8g==",
            "requires": {
                "globule": "^1.0.0"
            }
        },
        "gensync": {
            "version": "1.0.0-beta.1",
            "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.1.tgz",
            "integrity": "sha512-r8EC6NO1sngH/zdD9fiRDLdcgnbayXah+mLgManTaIZJqEC1MZstmnox8KpnI2/fxQwrp5OpCOYWLp4rBl4Jcg=="
        },
        "get-caller-file": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
            "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
        },
        "get-own-enumerable-property-symbols": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/get-own-enumerable-property-symbols/-/get-own-enumerable-property-symbols-3.0.2.tgz",
            "integrity": "sha512-I0UBV/XOz1XkIJHEUDMZAbzCThU/H8DxmSfmdGcKPnVhu2VfFqr34jr9777IyaTYvxjedWhqVIilEDsCdP5G6g=="
        },
        "get-stdin": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
            "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4="
        },
        "get-stream": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
            "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
            "requires": {
                "pump": "^3.0.0"
            }
        },
        "get-value": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
            "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
        },
        "getpass": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
            "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "glob": {
            "version": "7.1.6",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
            "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
            "requires": {
                "fs.realpath": "^1.0.0",
                "inflight": "^1.0.4",
                "inherits": "2",
                "minimatch": "^3.0.4",
                "once": "^1.3.0",
                "path-is-absolute": "^1.0.0"
            }
        },
        "glob-parent": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
            "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
            "requires": {
                "is-glob": "^4.0.1"
            }
        },
        "glob-to-regexp": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
            "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs="
        },
        "global-dirs": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.0.1.tgz",
            "integrity": "sha512-5HqUqdhkEovj2Of/ms3IeS/EekcO54ytHRLV4PEY2rhRwrHXLQjeVEES0Lhka0xwNDtGYn58wyC4s5+MHsOO6A==",
            "requires": {
                "ini": "^1.3.5"
            }
        },
        "global-modules": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-2.0.0.tgz",
            "integrity": "sha512-NGbfmJBp9x8IxyJSd1P+otYK8vonoJactOogrVfFRIAEY1ukil8RSKDz2Yo7wh1oihl51l/r6W4epkeKJHqL8A==",
            "requires": {
                "global-prefix": "^3.0.0"
            }
        },
        "global-prefix": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-3.0.0.tgz",
            "integrity": "sha512-awConJSVCHVGND6x3tmMaKcQvwXLhjdkmomy2W+Goaui8YPgYgXJZewhg3fWC+DlfqqQuWg8AwqjGTD2nAPVWg==",
            "requires": {
                "ini": "^1.3.5",
                "kind-of": "^6.0.2",
                "which": "^1.3.1"
            },
            "dependencies": {
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                }
            }
        },
        "globals": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
            "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
        },
        "globby": {
            "version": "8.0.2",
            "resolved": "https://registry.npmjs.org/globby/-/globby-8.0.2.tgz",
            "integrity": "sha512-yTzMmKygLp8RUpG1Ymu2VXPSJQZjNAZPD4ywgYEaG7e4tBJeUQBO8OpXrf1RCNcEs5alsoJYPAMiIHP0cmeC7w==",
            "requires": {
                "array-union": "^1.0.1",
                "dir-glob": "2.0.0",
                "fast-glob": "^2.0.2",
                "glob": "^7.1.2",
                "ignore": "^3.3.5",
                "pify": "^3.0.0",
                "slash": "^1.0.0"
            },
            "dependencies": {
                "ignore": {
                    "version": "3.3.10",
                    "resolved": "https://registry.npmjs.org/ignore/-/ignore-3.3.10.tgz",
                    "integrity": "sha512-Pgs951kaMm5GXP7MOvxERINe3gsaVjUWFm+UZPSq9xYriQAksyhg0csnS0KXSNRD5NmNdapXEpjxG49+AKh/ug=="
                },
                "pify": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
                    "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY="
                },
                "slash": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
                    "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU="
                }
            }
        },
        "globjoin": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/globjoin/-/globjoin-0.1.4.tgz",
            "integrity": "sha1-L0SUrIkZ43Z8XLtpHp9GMyQoXUM="
        },
        "globule": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/globule/-/globule-1.3.2.tgz",
            "integrity": "sha512-7IDTQTIu2xzXkT+6mlluidnWo+BypnbSoEVVQCGfzqnl5Ik8d3e1d4wycb8Rj9tWW+Z39uPWsdlquqiqPCd/pA==",
            "requires": {
                "glob": "~7.1.1",
                "lodash": "~4.17.10",
                "minimatch": "~3.0.2"
            }
        },
        "gonzales-pe": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/gonzales-pe/-/gonzales-pe-4.3.0.tgz",
            "integrity": "sha512-otgSPpUmdWJ43VXyiNgEYE4luzHCL2pz4wQ0OnDluC6Eg4Ko3Vexy/SrSynglw/eR+OhkzmqFCZa/OFa/RgAOQ==",
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "got": {
            "version": "9.6.0",
            "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
            "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
            "requires": {
                "@sindresorhus/is": "^0.14.0",
                "@szmarczak/http-timer": "^1.1.2",
                "cacheable-request": "^6.0.0",
                "decompress-response": "^3.3.0",
                "duplexer3": "^0.1.4",
                "get-stream": "^4.1.0",
                "lowercase-keys": "^1.0.1",
                "mimic-response": "^1.0.1",
                "p-cancelable": "^1.0.0",
                "to-readable-stream": "^1.0.0",
                "url-parse-lax": "^3.0.0"
            }
        },
        "graceful-fs": {
            "version": "4.2.4",
            "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
            "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw=="
        },
        "growly": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
            "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE="
        },
        "gzip-size": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-5.1.1.tgz",
            "integrity": "sha512-FNHi6mmoHvs1mxZAds4PpdCS6QG8B4C1krxJsMutgxl5t3+GlRTzzI3NEkifXx2pVsOvJdOGSmIgDhQ55FwdPA==",
            "requires": {
                "duplexer": "^0.1.1",
                "pify": "^4.0.1"
            },
            "dependencies": {
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
                }
            }
        },
        "handle-thing": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
            "integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg=="
        },
        "har-schema": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
            "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI="
        },
        "har-validator": {
            "version": "5.1.5",
            "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
            "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
            "requires": {
                "ajv": "^6.12.3",
                "har-schema": "^2.0.0"
            }
        },
        "hard-rejection": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/hard-rejection/-/hard-rejection-2.1.0.tgz",
            "integrity": "sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA=="
        },
        "harmony-reflect": {
            "version": "1.6.1",
            "resolved": "https://registry.npmjs.org/harmony-reflect/-/harmony-reflect-1.6.1.tgz",
            "integrity": "sha512-WJTeyp0JzGtHcuMsi7rw2VwtkvLa+JyfEKJCFyfcS0+CDkjQ5lHPu7zEhFZP+PDSRrEgXa5Ah0l1MbgbE41XjA=="
        },
        "has": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
            "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
            "requires": {
                "function-bind": "^1.1.1"
            }
        },
        "has-ansi": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
            "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
            "requires": {
                "ansi-regex": "^2.0.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
                    "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
                }
            }
        },
        "has-flag": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
            "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
        },
        "has-symbols": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
            "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg=="
        },
        "has-unicode": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
            "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
        },
        "has-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
            "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
            "requires": {
                "get-value": "^2.0.6",
                "has-values": "^1.0.0",
                "isobject": "^3.0.0"
            }
        },
        "has-values": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
            "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
            "requires": {
                "is-number": "^3.0.0",
                "kind-of": "^4.0.0"
            },
            "dependencies": {
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "kind-of": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
                    "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "has-yarn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
            "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw=="
        },
        "hash-base": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
            "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
            "requires": {
                "inherits": "^2.0.4",
                "readable-stream": "^3.6.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
                }
            }
        },
        "hash.js": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
            "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
            "requires": {
                "inherits": "^2.0.3",
                "minimalistic-assert": "^1.0.1"
            }
        },
        "he": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
            "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw=="
        },
        "hex-color-regex": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
            "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ=="
        },
        "history": {
            "version": "4.10.1",
            "resolved": "https://registry.npmjs.org/history/-/history-4.10.1.tgz",
            "integrity": "sha512-36nwAD620w12kuzPAsyINPWJqlNbij+hpK1k9XRloDtym8mxzGYl2c17LnV6IAGB2Dmg4tEa7G7DlawS0+qjew==",
            "requires": {
                "@babel/runtime": "^7.1.2",
                "loose-envify": "^1.2.0",
                "resolve-pathname": "^3.0.0",
                "tiny-invariant": "^1.0.2",
                "tiny-warning": "^1.0.0",
                "value-equal": "^1.0.1"
            }
        },
        "hmac-drbg": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
            "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
            "requires": {
                "hash.js": "^1.0.3",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.1"
            }
        },
        "hoist-non-react-statics": {
            "version": "3.3.2",
            "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",
            "integrity": "sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==",
            "requires": {
                "react-is": "^16.7.0"
            }
        },
        "hosted-git-info": {
            "version": "2.8.8",
            "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz",
            "integrity": "sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg=="
        },
        "hpack.js": {
            "version": "2.1.6",
            "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
            "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
            "requires": {
                "inherits": "^2.0.1",
                "obuf": "^1.0.0",
                "readable-stream": "^2.0.1",
                "wbuf": "^1.1.0"
            }
        },
        "hsl-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/hsl-regex/-/hsl-regex-1.0.0.tgz",
            "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4="
        },
        "hsla-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/hsla-regex/-/hsla-regex-1.0.0.tgz",
            "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg="
        },
        "html-comment-regex": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
            "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ=="
        },
        "html-encoding-sniffer": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
            "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
            "requires": {
                "whatwg-encoding": "^1.0.1"
            }
        },
        "html-entities": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-1.3.1.tgz",
            "integrity": "sha512-rhE/4Z3hIhzHAUKbW8jVcCyuT5oJCXXqhN/6mXXVCpzTmvJnoH2HL/bt3EZ6p55jbFJBeAe1ZNpL5BugLujxNA=="
        },
        "html-escaper": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
            "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="
        },
        "html-minifier-terser": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/html-minifier-terser/-/html-minifier-terser-5.1.1.tgz",
            "integrity": "sha512-ZPr5MNObqnV/T9akshPKbVgyOqLmy+Bxo7juKCfTfnjNniTAMdy4hz21YQqoofMBJD2kdREaqPPdThoR78Tgxg==",
            "requires": {
                "camel-case": "^4.1.1",
                "clean-css": "^4.2.3",
                "commander": "^4.1.1",
                "he": "^1.2.0",
                "param-case": "^3.0.3",
                "relateurl": "^0.2.7",
                "terser": "^4.6.3"
            },
            "dependencies": {
                "commander": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
                    "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA=="
                }
            }
        },
        "html-tags": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/html-tags/-/html-tags-3.1.0.tgz",
            "integrity": "sha512-1qYz89hW3lFDEazhjW0yVAV87lw8lVkrJocr72XmBkMKsoSVJCQx3W8BXsC7hO2qAt8BoVjYjtAcZ9perqGnNg=="
        },
        "html-webpack-plugin": {
            "version": "4.0.0-beta.11",
            "resolved": "https://registry.npmjs.org/html-webpack-plugin/-/html-webpack-plugin-4.0.0-beta.11.tgz",
            "integrity": "sha512-4Xzepf0qWxf8CGg7/WQM5qBB2Lc/NFI7MhU59eUDTkuQp3skZczH4UA1d6oQyDEIoMDgERVhRyTdtUPZ5s5HBg==",
            "requires": {
                "html-minifier-terser": "^5.0.1",
                "loader-utils": "^1.2.3",
                "lodash": "^4.17.15",
                "pretty-error": "^2.1.1",
                "tapable": "^1.1.3",
                "util.promisify": "1.0.0"
            },
            "dependencies": {
                "util.promisify": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.0.tgz",
                    "integrity": "sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==",
                    "requires": {
                        "define-properties": "^1.1.2",
                        "object.getownpropertydescriptors": "^2.0.3"
                    }
                }
            }
        },
        "htmlparser2": {
            "version": "3.10.1",
            "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
            "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
            "requires": {
                "domelementtype": "^1.3.1",
                "domhandler": "^2.3.0",
                "domutils": "^1.5.1",
                "entities": "^1.1.1",
                "inherits": "^2.0.1",
                "readable-stream": "^3.1.1"
            },
            "dependencies": {
                "entities": {
                    "version": "1.1.2",
                    "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
                    "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w=="
                },
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                }
            }
        },
        "http-cache-semantics": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
            "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ=="
        },
        "http-deceiver": {
            "version": "1.2.7",
            "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
            "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc="
        },
        "http-errors": {
            "version": "1.7.2",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
            "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
            "requires": {
                "depd": "~1.1.2",
                "inherits": "2.0.3",
                "setprototypeof": "1.1.1",
                "statuses": ">= 1.5.0 < 2",
                "toidentifier": "1.0.0"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
                }
            }
        },
        "http-proxy": {
            "version": "1.18.1",
            "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
            "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
            "requires": {
                "eventemitter3": "^4.0.0",
                "follow-redirects": "^1.0.0",
                "requires-port": "^1.0.0"
            }
        },
        "http-proxy-middleware": {
            "version": "0.19.1",
            "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-0.19.1.tgz",
            "integrity": "sha512-yHYTgWMQO8VvwNS22eLLloAkvungsKdKTLO8AJlftYIKNfJr3GK3zK0ZCfzDDGUBttdGc8xFy1mCitvNKQtC3Q==",
            "requires": {
                "http-proxy": "^1.17.0",
                "is-glob": "^4.0.0",
                "lodash": "^4.17.11",
                "micromatch": "^3.1.10"
            }
        },
        "http-signature": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
            "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
            "requires": {
                "assert-plus": "^1.0.0",
                "jsprim": "^1.2.2",
                "sshpk": "^1.7.0"
            }
        },
        "https-browserify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
            "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM="
        },
        "iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "requires": {
                "safer-buffer": ">= 2.1.2 < 3"
            }
        },
        "icss-utils": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-4.1.1.tgz",
            "integrity": "sha512-4aFq7wvWyMHKgxsH8QQtGpvbASCf+eM3wPRLI6R+MgAnTCZ6STYsRvttLvRWK0Nfif5piF394St3HeJDaljGPA==",
            "requires": {
                "postcss": "^7.0.14"
            }
        },
        "identity-obj-proxy": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/identity-obj-proxy/-/identity-obj-proxy-3.0.0.tgz",
            "integrity": "sha1-lNK9qWCERT7zb7xarsN+D3nx/BQ=",
            "requires": {
                "harmony-reflect": "^1.4.6"
            }
        },
        "ieee754": {
            "version": "1.1.13",
            "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.13.tgz",
            "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg=="
        },
        "iferr": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/iferr/-/iferr-0.1.5.tgz",
            "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE="
        },
        "ignore": {
            "version": "4.0.6",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
            "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg=="
        },
        "ignore-by-default": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
            "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk="
        },
        "immer": {
            "version": "1.10.0",
            "resolved": "https://registry.npmjs.org/immer/-/immer-1.10.0.tgz",
            "integrity": "sha512-O3sR1/opvCDGLEVcvrGTMtLac8GJ5IwZC4puPrLuRj3l7ICKvkmA0vGuU9OW8mV9WIBRnaxp5GJh9IEAaNOoYg=="
        },
        "import-cwd": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/import-cwd/-/import-cwd-2.1.0.tgz",
            "integrity": "sha1-qmzzbnInYShcs3HsZRn1PiQ1sKk=",
            "requires": {
                "import-from": "^2.1.0"
            }
        },
        "import-fresh": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
            "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
            "requires": {
                "caller-path": "^2.0.0",
                "resolve-from": "^3.0.0"
            }
        },
        "import-from": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/import-from/-/import-from-2.1.0.tgz",
            "integrity": "sha1-M1238qev/VOqpHHUuAId7ja387E=",
            "requires": {
                "resolve-from": "^3.0.0"
            }
        },
        "import-lazy": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
            "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM="
        },
        "import-local": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/import-local/-/import-local-2.0.0.tgz",
            "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
            "requires": {
                "pkg-dir": "^3.0.0",
                "resolve-cwd": "^2.0.0"
            }
        },
        "imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
        },
        "in-publish": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/in-publish/-/in-publish-2.0.1.tgz",
            "integrity": "sha512-oDM0kUSNFC31ShNxHKUyfZKy8ZeXZBWMjMdZHKLOk13uvT27VTL/QzRGfRUcevJhpkZAvlhPYuXkF7eNWrtyxQ=="
        },
        "indent-string": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
            "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg=="
        },
        "indexes-of": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
            "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc="
        },
        "infer-owner": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
            "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A=="
        },
        "inflight": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
            "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
            "requires": {
                "once": "^1.3.0",
                "wrappy": "1"
            }
        },
        "inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
        },
        "ini": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.5.tgz",
            "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw=="
        },
        "inquirer": {
            "version": "7.3.3",
            "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.3.3.tgz",
            "integrity": "sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==",
            "requires": {
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.1.0",
                "cli-cursor": "^3.1.0",
                "cli-width": "^3.0.0",
                "external-editor": "^3.0.3",
                "figures": "^3.0.0",
                "lodash": "^4.17.19",
                "mute-stream": "0.0.8",
                "run-async": "^2.4.0",
                "rxjs": "^6.6.0",
                "string-width": "^4.1.0",
                "strip-ansi": "^6.0.0",
                "through": "^2.3.6"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
                    "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
                },
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
                },
                "emoji-regex": {
                    "version": "8.0.0",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
                    "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
                },
                "is-fullwidth-code-point": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
                    "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
                },
                "string-width": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
                    "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
                    "requires": {
                        "emoji-regex": "^8.0.0",
                        "is-fullwidth-code-point": "^3.0.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "strip-ansi": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
                    "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
                    "requires": {
                        "ansi-regex": "^5.0.0"
                    }
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "internal-ip": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/internal-ip/-/internal-ip-4.3.0.tgz",
            "integrity": "sha512-S1zBo1D6zcsyuC6PMmY5+55YMILQ9av8lotMx447Bq6SAgo/sDK6y6uUKmuYhW7eacnIhFfsPmCNYdDzsnnDCg==",
            "requires": {
                "default-gateway": "^4.2.0",
                "ipaddr.js": "^1.9.0"
            }
        },
        "internal-slot": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.2.tgz",
            "integrity": "sha512-2cQNfwhAfJIkU4KZPkDI+Gj5yNNnbqi40W9Gge6dfnk4TocEVm00B3bdiL+JINrbGJil2TeHvM4rETGzk/f/0g==",
            "requires": {
                "es-abstract": "^1.17.0-next.1",
                "has": "^1.0.3",
                "side-channel": "^1.0.2"
            }
        },
        "invariant": {
            "version": "2.2.4",
            "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
            "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
            "requires": {
                "loose-envify": "^1.0.0"
            }
        },
        "ip": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
            "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
        },
        "ip-regex": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-2.1.0.tgz",
            "integrity": "sha1-+ni/XS5pE8kRzp+BnuUUa7bYROk="
        },
        "ipaddr.js": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
        },
        "is-absolute-url": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
            "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY="
        },
        "is-accessor-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
            "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
            "requires": {
                "kind-of": "^3.0.2"
            }
        },
        "is-alphabetical": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-alphabetical/-/is-alphabetical-1.0.4.tgz",
            "integrity": "sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg=="
        },
        "is-alphanumeric": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-alphanumeric/-/is-alphanumeric-1.0.0.tgz",
            "integrity": "sha1-Spzvcdr0wAHB2B1j0UDPU/1oifQ="
        },
        "is-alphanumerical": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-alphanumerical/-/is-alphanumerical-1.0.4.tgz",
            "integrity": "sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==",
            "requires": {
                "is-alphabetical": "^1.0.0",
                "is-decimal": "^1.0.0"
            }
        },
        "is-arguments": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.0.4.tgz",
            "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA=="
        },
        "is-arrayish": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
            "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
        },
        "is-binary-path": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
            "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
            "requires": {
                "binary-extensions": "^2.0.0"
            }
        },
        "is-buffer": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
            "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
        },
        "is-callable": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.2.tgz",
            "integrity": "sha512-dnMqspv5nU3LoewK2N/y7KLtxtakvTuaCsU9FU50/QDmdbHNy/4/JuRtMHqRU22o3q+W89YQndQEeCVwK+3qrA=="
        },
        "is-ci": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
            "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
            "requires": {
                "ci-info": "^2.0.0"
            }
        },
        "is-color-stop": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-color-stop/-/is-color-stop-1.1.0.tgz",
            "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
            "requires": {
                "css-color-names": "^0.0.4",
                "hex-color-regex": "^1.1.0",
                "hsl-regex": "^1.0.0",
                "hsla-regex": "^1.0.0",
                "rgb-regex": "^1.0.1",
                "rgba-regex": "^1.0.0"
            }
        },
        "is-data-descriptor": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
            "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
            "requires": {
                "kind-of": "^3.0.2"
            }
        },
        "is-date-object": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
            "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g=="
        },
        "is-decimal": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-decimal/-/is-decimal-1.0.4.tgz",
            "integrity": "sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw=="
        },
        "is-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
            "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
            "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                    "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
                }
            }
        },
        "is-directory": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
            "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE="
        },
        "is-docker": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.1.1.tgz",
            "integrity": "sha512-ZOoqiXfEwtGknTiuDEy8pN2CfE3TxMHprvNer1mXiqwkOT77Rw3YVrUQ52EqAOU3QAWDQ+bQdx7HJzrv7LS2Hw=="
        },
        "is-extendable": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
            "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        },
        "is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
        },
        "is-finite": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
            "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w=="
        },
        "is-fullwidth-code-point": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
            "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
            "requires": {
                "number-is-nan": "^1.0.0"
            }
        },
        "is-generator-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
            "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="
        },
        "is-glob": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
            "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
            "requires": {
                "is-extglob": "^2.1.1"
            }
        },
        "is-hexadecimal": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-hexadecimal/-/is-hexadecimal-1.0.4.tgz",
            "integrity": "sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw=="
        },
        "is-installed-globally": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
            "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
            "requires": {
                "global-dirs": "^2.0.1",
                "is-path-inside": "^3.0.1"
            }
        },
        "is-negative-zero": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.0.tgz",
            "integrity": "sha1-lVOxIbD6wohp2p7UWeIMdUN4hGE="
        },
        "is-npm": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
            "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig=="
        },
        "is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
        },
        "is-obj": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
            "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w=="
        },
        "is-path-cwd": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
            "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ=="
        },
        "is-path-in-cwd": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-path-in-cwd/-/is-path-in-cwd-2.1.0.tgz",
            "integrity": "sha512-rNocXHgipO+rvnP6dk3zI20RpOtrAM/kzbB258Uw5BWr3TpXi861yzjo16Dn4hUox07iw5AyeMLHWsujkjzvRQ==",
            "requires": {
                "is-path-inside": "^2.1.0"
            },
            "dependencies": {
                "is-path-inside": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-2.1.0.tgz",
                    "integrity": "sha512-wiyhTzfDWsvwAW53OBWF5zuvaOGlZ6PwYxAbPVDhpm+gM09xKQGjBq/8uYN12aDvMxnAnq3dxTyoSoRNmg5YFg==",
                    "requires": {
                        "path-is-inside": "^1.0.2"
                    }
                }
            }
        },
        "is-path-inside": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.2.tgz",
            "integrity": "sha512-/2UGPSgmtqwo1ktx8NDHjuPwZWmHhO+gj0f93EkhLB5RgW9RZevWYYlIkS6zePc6U2WpOdQYIwHe9YC4DWEBVg=="
        },
        "is-plain-obj": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
            "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4="
        },
        "is-plain-object": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
            "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "is-regex": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
            "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
            "requires": {
                "has-symbols": "^1.0.1"
            }
        },
        "is-regexp": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-regexp/-/is-regexp-1.0.0.tgz",
            "integrity": "sha1-/S2INUXEa6xaYz57mgnof6LLUGk="
        },
        "is-resolvable": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-resolvable/-/is-resolvable-1.1.0.tgz",
            "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg=="
        },
        "is-root": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-root/-/is-root-2.1.0.tgz",
            "integrity": "sha512-AGOriNp96vNBd3HtU+RzFEc75FfR5ymiYv8E553I71SCeXBiMsVDUtdio1OEFvrPyLIQ9tVR5RxXIFe5PUFjMg=="
        },
        "is-stream": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
            "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
        },
        "is-string": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.5.tgz",
            "integrity": "sha512-buY6VNRjhQMiF1qWDouloZlQbRhDPCebwxSjxMjxgemYT46YMd2NR0/H+fBhEfWX4A/w9TBJ+ol+okqJKFE6vQ=="
        },
        "is-supported-regexp-flag": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-supported-regexp-flag/-/is-supported-regexp-flag-1.0.1.tgz",
            "integrity": "sha512-3vcJecUUrpgCqc/ca0aWeNu64UGgxcvO60K/Fkr1N6RSvfGCTU60UKN68JDmKokgba0rFFJs12EnzOQa14ubKQ=="
        },
        "is-svg": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-3.0.0.tgz",
            "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
            "requires": {
                "html-comment-regex": "^1.1.0"
            }
        },
        "is-symbol": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
            "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
            "requires": {
                "has-symbols": "^1.0.1"
            }
        },
        "is-typedarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
            "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
        },
        "is-utf8": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
            "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI="
        },
        "is-whitespace-character": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-whitespace-character/-/is-whitespace-character-1.0.4.tgz",
            "integrity": "sha512-SDweEzfIZM0SJV0EUga669UTKlmL0Pq8Lno0QDQsPnvECB3IM2aP0gdx5TrU0A01MAPfViaZiI2V1QMZLaKK5w=="
        },
        "is-windows": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
            "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
        },
        "is-word-character": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-word-character/-/is-word-character-1.0.4.tgz",
            "integrity": "sha512-5SMO8RVennx3nZrqtKwCGyyetPE9VDba5ugvKLaD4KopPG5kR4mQ7tNt/r7feL5yt5h3lpuBbIUmCOG2eSzXHA=="
        },
        "is-wsl": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
            "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0="
        },
        "is-yarn-global": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
            "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw=="
        },
        "isarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
        },
        "isobject": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
            "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
        },
        "isstream": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
            "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
        },
        "istanbul-lib-coverage": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.5.tgz",
            "integrity": "sha512-8aXznuEPCJvGnMSRft4udDRDtb1V3pkQkMMI5LI+6HuQz5oQ4J2UFn1H82raA3qJtyOLkkwVqICBQkjnGtn5mA=="
        },
        "istanbul-lib-instrument": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-3.3.0.tgz",
            "integrity": "sha512-5nnIN4vo5xQZHdXno/YDXJ0G+I3dAm4XgzfSVTPLQpj/zAV2dV6Juy0yaf10/zrJOJeHoN3fraFe+XRq2bFVZA==",
            "requires": {
                "@babel/generator": "^7.4.0",
                "@babel/parser": "^7.4.3",
                "@babel/template": "^7.4.0",
                "@babel/traverse": "^7.4.3",
                "@babel/types": "^7.4.0",
                "istanbul-lib-coverage": "^2.0.5",
                "semver": "^6.0.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
                }
            }
        },
        "istanbul-lib-report": {
            "version": "2.0.8",
            "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-2.0.8.tgz",
            "integrity": "sha512-fHBeG573EIihhAblwgxrSenp0Dby6tJMFR/HvlerBsrCTD5bkUuoNtn3gVh29ZCS824cGGBPn7Sg7cNk+2xUsQ==",
            "requires": {
                "istanbul-lib-coverage": "^2.0.5",
                "make-dir": "^2.1.0",
                "supports-color": "^6.1.0"
            },
            "dependencies": {
                "make-dir": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
                    "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
                    "requires": {
                        "pify": "^4.0.1",
                        "semver": "^5.6.0"
                    }
                },
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
                },
                "supports-color": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
                    "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "istanbul-lib-source-maps": {
            "version": "3.0.6",
            "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-3.0.6.tgz",
            "integrity": "sha512-R47KzMtDJH6X4/YW9XTx+jrLnZnscW4VpNN+1PViSYTejLVPWv7oov+Duf8YQSPyVRUvueQqz1TcsC6mooZTXw==",
            "requires": {
                "debug": "^4.1.1",
                "istanbul-lib-coverage": "^2.0.5",
                "make-dir": "^2.1.0",
                "rimraf": "^2.6.3",
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "debug": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.2.0.tgz",
                    "integrity": "sha512-IX2ncY78vDTjZMFUdmsvIRFY2Cf4FnD0wRs+nQwJU8Lu99/tPFdb0VybiiMTPe3I6rQmwsqQqRBvxU+bZ/I8sg==",
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "make-dir": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
                    "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
                    "requires": {
                        "pify": "^4.0.1",
                        "semver": "^5.6.0"
                    }
                },
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
                }
            }
        },
        "istanbul-reports": {
            "version": "2.2.7",
            "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-2.2.7.tgz",
            "integrity": "sha512-uu1F/L1o5Y6LzPVSVZXNOoD/KXpJue9aeLRd0sM9uMXfZvzomB0WxVamWb5ue8kA2vVWEmW7EG+A5n3f1kqHKg==",
            "requires": {
                "html-escaper": "^2.0.0"
            }
        },
        "jest": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest/-/jest-24.9.0.tgz",
            "integrity": "sha512-YvkBL1Zm7d2B1+h5fHEOdyjCG+sGMz4f8D86/0HiqJ6MB4MnDc8FgP5vdWsGnemOQro7lnYo8UakZ3+5A0jxGw==",
            "requires": {
                "import-local": "^2.0.0",
                "jest-cli": "^24.9.0"
            },
            "dependencies": {
                "jest-cli": {
                    "version": "24.9.0",
                    "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-24.9.0.tgz",
                    "integrity": "sha512-+VLRKyitT3BWoMeSUIHRxV/2g8y9gw91Jh5z2UmXZzkZKpbC08CSehVxgHUwTpy+HwGcns/tqafQDJW7imYvGg==",
                    "requires": {
                        "@jest/core": "^24.9.0",
                        "@jest/test-result": "^24.9.0",
                        "@jest/types": "^24.9.0",
                        "chalk": "^2.0.1",
                        "exit": "^0.1.2",
                        "import-local": "^2.0.0",
                        "is-ci": "^2.0.0",
                        "jest-config": "^24.9.0",
                        "jest-util": "^24.9.0",
                        "jest-validate": "^24.9.0",
                        "prompts": "^2.0.1",
                        "realpath-native": "^1.1.0",
                        "yargs": "^13.3.0"
                    }
                }
            }
        },
        "jest-changed-files": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-24.9.0.tgz",
            "integrity": "sha512-6aTWpe2mHF0DhL28WjdkO8LyGjs3zItPET4bMSeXU6T3ub4FPMw+mcOcbdGXQOAfmLcxofD23/5Bl9Z4AkFwqg==",
            "requires": {
                "@jest/types": "^24.9.0",
                "execa": "^1.0.0",
                "throat": "^4.0.0"
            }
        },
        "jest-config": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-24.9.0.tgz",
            "integrity": "sha512-RATtQJtVYQrp7fvWg6f5y3pEFj9I+H8sWw4aKxnDZ96mob5i5SD6ZEGWgMLXQ4LE8UurrjbdlLWdUeo+28QpfQ==",
            "requires": {
                "@babel/core": "^7.1.0",
                "@jest/test-sequencer": "^24.9.0",
                "@jest/types": "^24.9.0",
                "babel-jest": "^24.9.0",
                "chalk": "^2.0.1",
                "glob": "^7.1.1",
                "jest-environment-jsdom": "^24.9.0",
                "jest-environment-node": "^24.9.0",
                "jest-get-type": "^24.9.0",
                "jest-jasmine2": "^24.9.0",
                "jest-regex-util": "^24.3.0",
                "jest-resolve": "^24.9.0",
                "jest-util": "^24.9.0",
                "jest-validate": "^24.9.0",
                "micromatch": "^3.1.10",
                "pretty-format": "^24.9.0",
                "realpath-native": "^1.1.0"
            }
        },
        "jest-diff": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-24.9.0.tgz",
            "integrity": "sha512-qMfrTs8AdJE2iqrTp0hzh7kTd2PQWrsFyj9tORoKmu32xjPjeE4NyjVRDz8ybYwqS2ik8N4hsIpiVTyFeo2lBQ==",
            "requires": {
                "chalk": "^2.0.1",
                "diff-sequences": "^24.9.0",
                "jest-get-type": "^24.9.0",
                "pretty-format": "^24.9.0"
            }
        },
        "jest-docblock": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-24.9.0.tgz",
            "integrity": "sha512-F1DjdpDMJMA1cN6He0FNYNZlo3yYmOtRUnktrT9Q37njYzC5WEaDdmbynIgy0L/IvXvvgsG8OsqhLPXTpfmZAA==",
            "requires": {
                "detect-newline": "^2.1.0"
            }
        },
        "jest-each": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-24.9.0.tgz",
            "integrity": "sha512-ONi0R4BvW45cw8s2Lrx8YgbeXL1oCQ/wIDwmsM3CqM/nlblNCPmnC3IPQlMbRFZu3wKdQ2U8BqM6lh3LJ5Bsog==",
            "requires": {
                "@jest/types": "^24.9.0",
                "chalk": "^2.0.1",
                "jest-get-type": "^24.9.0",
                "jest-util": "^24.9.0",
                "pretty-format": "^24.9.0"
            }
        },
        "jest-environment-jsdom": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-24.9.0.tgz",
            "integrity": "sha512-Zv9FV9NBRzLuALXjvRijO2351DRQeLYXtpD4xNvfoVFw21IOKNhZAEUKcbiEtjTkm2GsJ3boMVgkaR7rN8qetA==",
            "requires": {
                "@jest/environment": "^24.9.0",
                "@jest/fake-timers": "^24.9.0",
                "@jest/types": "^24.9.0",
                "jest-mock": "^24.9.0",
                "jest-util": "^24.9.0",
                "jsdom": "^11.5.1"
            }
        },
        "jest-environment-jsdom-fourteen": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/jest-environment-jsdom-fourteen/-/jest-environment-jsdom-fourteen-1.0.1.tgz",
            "integrity": "sha512-DojMX1sY+at5Ep+O9yME34CdidZnO3/zfPh8UW+918C5fIZET5vCjfkegixmsi7AtdYfkr4bPlIzmWnlvQkP7Q==",
            "requires": {
                "@jest/environment": "^24.3.0",
                "@jest/fake-timers": "^24.3.0",
                "@jest/types": "^24.3.0",
                "jest-mock": "^24.0.0",
                "jest-util": "^24.0.0",
                "jsdom": "^14.1.0"
            },
            "dependencies": {
                "acorn": {
                    "version": "6.4.2",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
                    "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ=="
                },
                "escodegen": {
                    "version": "1.14.3",
                    "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
                    "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
                    "requires": {
                        "esprima": "^4.0.1",
                        "estraverse": "^4.2.0",
                        "esutils": "^2.0.2",
                        "optionator": "^0.8.1",
                        "source-map": "~0.6.1"
                    }
                },
                "esprima": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
                    "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
                },
                "estraverse": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
                    "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
                },
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
                },
                "jsdom": {
                    "version": "14.1.0",
                    "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-14.1.0.tgz",
                    "integrity": "sha512-O901mfJSuTdwU2w3Sn+74T+RnDVP+FuV5fH8tcPWyqrseRAb0s5xOtPgCFiPOtLcyK7CLIJwPyD83ZqQWvA5ng==",
                    "requires": {
                        "abab": "^2.0.0",
                        "acorn": "^6.0.4",
                        "acorn-globals": "^4.3.0",
                        "array-equal": "^1.0.0",
                        "cssom": "^0.3.4",
                        "cssstyle": "^1.1.1",
                        "data-urls": "^1.1.0",
                        "domexception": "^1.0.1",
                        "escodegen": "^1.11.0",
                        "html-encoding-sniffer": "^1.0.2",
                        "nwsapi": "^2.1.3",
                        "parse5": "5.1.0",
                        "pn": "^1.1.0",
                        "request": "^2.88.0",
                        "request-promise-native": "^1.0.5",
                        "saxes": "^3.1.9",
                        "symbol-tree": "^3.2.2",
                        "tough-cookie": "^2.5.0",
                        "w3c-hr-time": "^1.0.1",
                        "w3c-xmlserializer": "^1.1.2",
                        "webidl-conversions": "^4.0.2",
                        "whatwg-encoding": "^1.0.5",
                        "whatwg-mimetype": "^2.3.0",
                        "whatwg-url": "^7.0.0",
                        "ws": "^6.1.2",
                        "xml-name-validator": "^3.0.0"
                    }
                },
                "parse5": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/parse5/-/parse5-5.1.0.tgz",
                    "integrity": "sha512-fxNG2sQjHvlVAYmzBZS9YlDp6PTSSDwa98vkD4QgVDDCAo84z5X1t5XyJQ62ImdLXx5NdIIfihey6xpum9/gRQ=="
                },
                "whatwg-url": {
                    "version": "7.1.0",
                    "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
                    "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
                    "requires": {
                        "lodash.sortby": "^4.7.0",
                        "tr46": "^1.0.1",
                        "webidl-conversions": "^4.0.2"
                    }
                },
                "ws": {
                    "version": "6.2.1",
                    "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
                    "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
                    "requires": {
                        "async-limiter": "~1.0.0"
                    }
                }
            }
        },
        "jest-environment-node": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-24.9.0.tgz",
            "integrity": "sha512-6d4V2f4nxzIzwendo27Tr0aFm+IXWa0XEUnaH6nU0FMaozxovt+sfRvh4J47wL1OvF83I3SSTu0XK+i4Bqe7uA==",
            "requires": {
                "@jest/environment": "^24.9.0",
                "@jest/fake-timers": "^24.9.0",
                "@jest/types": "^24.9.0",
                "jest-mock": "^24.9.0",
                "jest-util": "^24.9.0"
            }
        },
        "jest-get-type": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
            "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q=="
        },
        "jest-haste-map": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
            "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
            "requires": {
                "@jest/types": "^24.9.0",
                "anymatch": "^2.0.0",
                "fb-watchman": "^2.0.0",
                "fsevents": "^1.2.7",
                "graceful-fs": "^4.1.15",
                "invariant": "^2.2.4",
                "jest-serializer": "^24.9.0",
                "jest-util": "^24.9.0",
                "jest-worker": "^24.9.0",
                "micromatch": "^3.1.10",
                "sane": "^4.0.3",
                "walker": "^1.0.7"
            },
            "dependencies": {
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    }
                },
                "fsevents": {
                    "version": "1.2.13",
                    "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
                    "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
                    "optional": true,
                    "requires": {
                        "nan": "^2.12.1"
                    }
                },
                "normalize-path": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                    "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                    "requires": {
                        "remove-trailing-separator": "^1.0.1"
                    }
                }
            }
        },
        "jest-jasmine2": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-24.9.0.tgz",
            "integrity": "sha512-Cq7vkAgaYKp+PsX+2/JbTarrk0DmNhsEtqBXNwUHkdlbrTBLtMJINADf2mf5FkowNsq8evbPc07/qFO0AdKTzw==",
            "requires": {
                "@babel/traverse": "^7.1.0",
                "@jest/environment": "^24.9.0",
                "@jest/test-result": "^24.9.0",
                "@jest/types": "^24.9.0",
                "chalk": "^2.0.1",
                "co": "^4.6.0",
                "expect": "^24.9.0",
                "is-generator-fn": "^2.0.0",
                "jest-each": "^24.9.0",
                "jest-matcher-utils": "^24.9.0",
                "jest-message-util": "^24.9.0",
                "jest-runtime": "^24.9.0",
                "jest-snapshot": "^24.9.0",
                "jest-util": "^24.9.0",
                "pretty-format": "^24.9.0",
                "throat": "^4.0.0"
            }
        },
        "jest-leak-detector": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-24.9.0.tgz",
            "integrity": "sha512-tYkFIDsiKTGwb2FG1w8hX9V0aUb2ot8zY/2nFg087dUageonw1zrLMP4W6zsRO59dPkTSKie+D4rhMuP9nRmrA==",
            "requires": {
                "jest-get-type": "^24.9.0",
                "pretty-format": "^24.9.0"
            }
        },
        "jest-matcher-utils": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-24.9.0.tgz",
            "integrity": "sha512-OZz2IXsu6eaiMAwe67c1T+5tUAtQyQx27/EMEkbFAGiw52tB9em+uGbzpcgYVpA8wl0hlxKPZxrly4CXU/GjHA==",
            "requires": {
                "chalk": "^2.0.1",
                "jest-diff": "^24.9.0",
                "jest-get-type": "^24.9.0",
                "pretty-format": "^24.9.0"
            }
        },
        "jest-message-util": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
            "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "@jest/test-result": "^24.9.0",
                "@jest/types": "^24.9.0",
                "@types/stack-utils": "^1.0.1",
                "chalk": "^2.0.1",
                "micromatch": "^3.1.10",
                "slash": "^2.0.0",
                "stack-utils": "^1.0.1"
            }
        },
        "jest-mock": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
            "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
            "requires": {
                "@jest/types": "^24.9.0"
            }
        },
        "jest-pnp-resolver": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz",
            "integrity": "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w=="
        },
        "jest-regex-util": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-24.9.0.tgz",
            "integrity": "sha512-05Cmb6CuxaA+Ys6fjr3PhvV3bGQmO+2p2La4hFbU+W5uOc479f7FdLXUWXw4pYMAhhSZIuKHwSXSu6CsSBAXQA=="
        },
        "jest-resolve": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-24.9.0.tgz",
            "integrity": "sha512-TaLeLVL1l08YFZAt3zaPtjiVvyy4oSA6CRe+0AFPPVX3Q/VI0giIWWoAvoS5L96vj9Dqxj4fB5p2qrHCmTU/MQ==",
            "requires": {
                "@jest/types": "^24.9.0",
                "browser-resolve": "^1.11.3",
                "chalk": "^2.0.1",
                "jest-pnp-resolver": "^1.2.1",
                "realpath-native": "^1.1.0"
            }
        },
        "jest-resolve-dependencies": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-24.9.0.tgz",
            "integrity": "sha512-Fm7b6AlWnYhT0BXy4hXpactHIqER7erNgIsIozDXWl5dVm+k8XdGVe1oTg1JyaFnOxarMEbax3wyRJqGP2Pq+g==",
            "requires": {
                "@jest/types": "^24.9.0",
                "jest-regex-util": "^24.3.0",
                "jest-snapshot": "^24.9.0"
            }
        },
        "jest-runner": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-24.9.0.tgz",
            "integrity": "sha512-KksJQyI3/0mhcfspnxxEOBueGrd5E4vV7ADQLT9ESaCzz02WnbdbKWIf5Mkaucoaj7obQckYPVX6JJhgUcoWWg==",
            "requires": {
                "@jest/console": "^24.7.1",
                "@jest/environment": "^24.9.0",
                "@jest/test-result": "^24.9.0",
                "@jest/types": "^24.9.0",
                "chalk": "^2.4.2",
                "exit": "^0.1.2",
                "graceful-fs": "^4.1.15",
                "jest-config": "^24.9.0",
                "jest-docblock": "^24.3.0",
                "jest-haste-map": "^24.9.0",
                "jest-jasmine2": "^24.9.0",
                "jest-leak-detector": "^24.9.0",
                "jest-message-util": "^24.9.0",
                "jest-resolve": "^24.9.0",
                "jest-runtime": "^24.9.0",
                "jest-util": "^24.9.0",
                "jest-worker": "^24.6.0",
                "source-map-support": "^0.5.6",
                "throat": "^4.0.0"
            }
        },
        "jest-runtime": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-24.9.0.tgz",
            "integrity": "sha512-8oNqgnmF3v2J6PVRM2Jfuj8oX3syKmaynlDMMKQ4iyzbQzIG6th5ub/lM2bCMTmoTKM3ykcUYI2Pw9xwNtjMnw==",
            "requires": {
                "@jest/console": "^24.7.1",
                "@jest/environment": "^24.9.0",
                "@jest/source-map": "^24.3.0",
                "@jest/transform": "^24.9.0",
                "@jest/types": "^24.9.0",
                "@types/yargs": "^13.0.0",
                "chalk": "^2.0.1",
                "exit": "^0.1.2",
                "glob": "^7.1.3",
                "graceful-fs": "^4.1.15",
                "jest-config": "^24.9.0",
                "jest-haste-map": "^24.9.0",
                "jest-message-util": "^24.9.0",
                "jest-mock": "^24.9.0",
                "jest-regex-util": "^24.3.0",
                "jest-resolve": "^24.9.0",
                "jest-snapshot": "^24.9.0",
                "jest-util": "^24.9.0",
                "jest-validate": "^24.9.0",
                "realpath-native": "^1.1.0",
                "slash": "^2.0.0",
                "strip-bom": "^3.0.0",
                "yargs": "^13.3.0"
            },
            "dependencies": {
                "strip-bom": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
                    "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM="
                }
            }
        },
        "jest-serializer": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
            "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ=="
        },
        "jest-snapshot": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-24.9.0.tgz",
            "integrity": "sha512-uI/rszGSs73xCM0l+up7O7a40o90cnrk429LOiK3aeTvfC0HHmldbd81/B7Ix81KSFe1lwkbl7GnBGG4UfuDew==",
            "requires": {
                "@babel/types": "^7.0.0",
                "@jest/types": "^24.9.0",
                "chalk": "^2.0.1",
                "expect": "^24.9.0",
                "jest-diff": "^24.9.0",
                "jest-get-type": "^24.9.0",
                "jest-matcher-utils": "^24.9.0",
                "jest-message-util": "^24.9.0",
                "jest-resolve": "^24.9.0",
                "mkdirp": "^0.5.1",
                "natural-compare": "^1.4.0",
                "pretty-format": "^24.9.0",
                "semver": "^6.2.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
                }
            }
        },
        "jest-util": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
            "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
            "requires": {
                "@jest/console": "^24.9.0",
                "@jest/fake-timers": "^24.9.0",
                "@jest/source-map": "^24.9.0",
                "@jest/test-result": "^24.9.0",
                "@jest/types": "^24.9.0",
                "callsites": "^3.0.0",
                "chalk": "^2.0.1",
                "graceful-fs": "^4.1.15",
                "is-ci": "^2.0.0",
                "mkdirp": "^0.5.1",
                "slash": "^2.0.0",
                "source-map": "^0.6.0"
            },
            "dependencies": {
                "callsites": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
                    "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
                }
            }
        },
        "jest-validate": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.9.0.tgz",
            "integrity": "sha512-HPIt6C5ACwiqSiwi+OfSSHbK8sG7akG8eATl+IPKaeIjtPOeBUd/g3J7DghugzxrGjI93qS/+RPKe1H6PqvhRQ==",
            "requires": {
                "@jest/types": "^24.9.0",
                "camelcase": "^5.3.1",
                "chalk": "^2.0.1",
                "jest-get-type": "^24.9.0",
                "leven": "^3.1.0",
                "pretty-format": "^24.9.0"
            },
            "dependencies": {
                "camelcase": {
                    "version": "5.3.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
                    "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
                }
            }
        },
        "jest-watch-typeahead": {
            "version": "0.4.2",
            "resolved": "https://registry.npmjs.org/jest-watch-typeahead/-/jest-watch-typeahead-0.4.2.tgz",
            "integrity": "sha512-f7VpLebTdaXs81rg/oj4Vg/ObZy2QtGzAmGLNsqUS5G5KtSN68tFcIsbvNODfNyQxU78g7D8x77o3bgfBTR+2Q==",
            "requires": {
                "ansi-escapes": "^4.2.1",
                "chalk": "^2.4.1",
                "jest-regex-util": "^24.9.0",
                "jest-watcher": "^24.3.0",
                "slash": "^3.0.0",
                "string-length": "^3.1.0",
                "strip-ansi": "^5.0.0"
            },
            "dependencies": {
                "slash": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
                    "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
                },
                "string-length": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-length/-/string-length-3.1.0.tgz",
                    "integrity": "sha512-Ttp5YvkGm5v9Ijagtaz1BnN+k9ObpvS0eIBblPMp2YWL8FBmi9qblQ9fexc2k/CXFgrTIteU3jAw3payCnwSTA==",
                    "requires": {
                        "astral-regex": "^1.0.0",
                        "strip-ansi": "^5.2.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "jest-watcher": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-24.9.0.tgz",
            "integrity": "sha512-+/fLOfKPXXYJDYlks62/4R4GoT+GU1tYZed99JSCOsmzkkF7727RqKrjNAxtfO4YpGv11wybgRvCjR73lK2GZw==",
            "requires": {
                "@jest/test-result": "^24.9.0",
                "@jest/types": "^24.9.0",
                "@types/yargs": "^13.0.0",
                "ansi-escapes": "^3.0.0",
                "chalk": "^2.0.1",
                "jest-util": "^24.9.0",
                "string-length": "^2.0.0"
            },
            "dependencies": {
                "ansi-escapes": {
                    "version": "3.2.0",
                    "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
                    "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
                }
            }
        },
        "jest-worker": {
            "version": "24.9.0",
            "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
            "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
            "requires": {
                "merge-stream": "^2.0.0",
                "supports-color": "^6.1.0"
            },
            "dependencies": {
                "supports-color": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
                    "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "js-base64": {
            "version": "2.6.4",
            "resolved": "https://registry.npmjs.org/js-base64/-/js-base64-2.6.4.tgz",
            "integrity": "sha512-pZe//GGmwJndub7ZghVHz7vjb2LgC1m8B07Au3eYqeqv9emhESByMXxaEgkUkEqJe87oBbSniGYoQNIBklc7IQ=="
        },
        "js-tokens": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
            "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
        },
        "js-yaml": {
            "version": "3.14.0",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.0.tgz",
            "integrity": "sha512-/4IbIeHcD9VMHFqDR/gQ7EdZdLimOvW2DdcxFjdyyZ9NsbS+ccrXqVWDtab/lRl5AlUqmpBx8EhPaWR+OtY17A==",
            "requires": {
                "argparse": "^1.0.7",
                "esprima": "^4.0.0"
            },
            "dependencies": {
                "esprima": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
                    "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
                }
            }
        },
        "jsbn": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
            "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
        },
        "jsdom": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-11.12.0.tgz",
            "integrity": "sha512-y8Px43oyiBM13Zc1z780FrfNLJCXTL40EWlty/LXUtcjykRBNgLlCjWXpfSPBl2iv+N7koQN+dvqszHZgT/Fjw==",
            "requires": {
                "abab": "^2.0.0",
                "acorn": "^5.5.3",
                "acorn-globals": "^4.1.0",
                "array-equal": "^1.0.0",
                "cssom": ">= 0.3.2 < 0.4.0",
                "cssstyle": "^1.0.0",
                "data-urls": "^1.0.0",
                "domexception": "^1.0.1",
                "escodegen": "^1.9.1",
                "html-encoding-sniffer": "^1.0.2",
                "left-pad": "^1.3.0",
                "nwsapi": "^2.0.7",
                "parse5": "4.0.0",
                "pn": "^1.1.0",
                "request": "^2.87.0",
                "request-promise-native": "^1.0.5",
                "sax": "^1.2.4",
                "symbol-tree": "^3.2.2",
                "tough-cookie": "^2.3.4",
                "w3c-hr-time": "^1.0.1",
                "webidl-conversions": "^4.0.2",
                "whatwg-encoding": "^1.0.3",
                "whatwg-mimetype": "^2.1.0",
                "whatwg-url": "^6.4.1",
                "ws": "^5.2.0",
                "xml-name-validator": "^3.0.0"
            },
            "dependencies": {
                "acorn": {
                    "version": "5.7.4",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.4.tgz",
                    "integrity": "sha512-1D++VG7BhrtvQpNbBzovKNc1FLGGEE/oGe7b9xJm/RFHMBeUaUGpluV9RLjZa47YFdPcDAenEYuq9pQPcMdLJg=="
                },
                "escodegen": {
                    "version": "1.14.3",
                    "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
                    "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
                    "requires": {
                        "esprima": "^4.0.1",
                        "estraverse": "^4.2.0",
                        "esutils": "^2.0.2",
                        "optionator": "^0.8.1",
                        "source-map": "~0.6.1"
                    }
                },
                "esprima": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
                    "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
                },
                "estraverse": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
                    "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
                },
                "esutils": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
                    "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
                }
            }
        },
        "jsesc": {
            "version": "2.5.2",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
            "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
        },
        "json-buffer": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
            "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg="
        },
        "json-parse-better-errors": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
            "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
        },
        "json-parse-even-better-errors": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
            "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w=="
        },
        "json-schema": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
            "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
        },
        "json-schema-traverse": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
            "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
        },
        "json-stable-stringify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
            "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
            "requires": {
                "jsonify": "~0.0.0"
            }
        },
        "json-stable-stringify-without-jsonify": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
            "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE="
        },
        "json-stringify-safe": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
            "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
        },
        "json3": {
            "version": "3.3.3",
            "resolved": "https://registry.npmjs.org/json3/-/json3-3.3.3.tgz",
            "integrity": "sha512-c7/8mbUsKigAbLkD5B010BK4D9LZm7A1pNItkEwiUZRpIN66exu/e7YQWysGun+TRKaJp8MhemM+VkfWv42aCA=="
        },
        "json5": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.1.3.tgz",
            "integrity": "sha512-KXPvOm8K9IJKFM0bmdn8QXh7udDh1g/giieX0NLCaMnb4hEiVFqnop2ImTXCc5e0/oHz3LTqmHGtExn5hfMkOA==",
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "jsonfile": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
            "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
            "requires": {
                "graceful-fs": "^4.1.6"
            }
        },
        "jsonify": {
            "version": "0.0.0",
            "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
            "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM="
        },
        "jsprim": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
            "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
            "requires": {
                "assert-plus": "1.0.0",
                "extsprintf": "1.3.0",
                "json-schema": "0.2.3",
                "verror": "1.10.0"
            }
        },
        "jsx-ast-utils": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-2.4.1.tgz",
            "integrity": "sha512-z1xSldJ6imESSzOjd3NNkieVJKRlKYSOtMG8SFyCj2FIrvSaSuli/WjpBkEzCBoR9bYYYFgqJw61Xhu7Lcgk+w==",
            "requires": {
                "array-includes": "^3.1.1",
                "object.assign": "^4.1.0"
            }
        },
        "keyv": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
            "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
            "requires": {
                "json-buffer": "3.0.0"
            }
        },
        "killable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/killable/-/killable-1.0.1.tgz",
            "integrity": "sha512-LzqtLKlUwirEUyl/nicirVmNiPvYs7l5n8wOPP7fyJVpUPkvCnW/vuiXGpylGUlnPDnB7311rARzAt3Mhswpjg=="
        },
        "kind-of": {
            "version": "3.2.2",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
            "requires": {
                "is-buffer": "^1.1.5"
            }
        },
        "kleur": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
            "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="
        },
        "known-css-properties": {
            "version": "0.19.0",
            "resolved": "https://registry.npmjs.org/known-css-properties/-/known-css-properties-0.19.0.tgz",
            "integrity": "sha512-eYboRV94Vco725nKMlpkn3nV2+96p9c3gKXRsYqAJSswSENvBhN7n5L+uDhY58xQa0UukWsDMTGELzmD8Q+wTA=="
        },
        "last-call-webpack-plugin": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/last-call-webpack-plugin/-/last-call-webpack-plugin-3.0.0.tgz",
            "integrity": "sha512-7KI2l2GIZa9p2spzPIVZBYyNKkN+e/SQPpnjlTiPhdbDW3F86tdKKELxKpzJ5sgU19wQWsACULZmpTPYHeWO5w==",
            "requires": {
                "lodash": "^4.17.5",
                "webpack-sources": "^1.1.0"
            }
        },
        "latest-version": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
            "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
            "requires": {
                "package-json": "^6.3.0"
            }
        },
        "lazy-cache": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-1.0.4.tgz",
            "integrity": "sha1-odePw6UEdMuAhF07O24dpJpEbo4="
        },
        "left-pad": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/left-pad/-/left-pad-1.3.0.tgz",
            "integrity": "sha512-XI5MPzVNApjAyhQzphX8BkmKsKUxD4LdyK24iZeQGinBN9yTQT3bFlCBy/aVx2HrNcqQGsdot8ghrjyrvMCoEA=="
        },
        "leven": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
            "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
        },
        "levenary": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/levenary/-/levenary-1.1.1.tgz",
            "integrity": "sha512-mkAdOIt79FD6irqjYSs4rdbnlT5vRonMEvBVPVb3XmevfS8kgRXwfes0dhPdEtzTWD/1eNE/Bm/G1iRt6DcnQQ==",
            "requires": {
                "leven": "^3.1.0"
            }
        },
        "levn": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
            "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
            "requires": {
                "prelude-ls": "~1.1.2",
                "type-check": "~0.3.2"
            }
        },
        "lines-and-columns": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
            "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA="
        },
        "load-json-file": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
            "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
            "requires": {
                "graceful-fs": "^4.1.2",
                "parse-json": "^2.2.0",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0",
                "strip-bom": "^2.0.0"
            }
        },
        "loader-fs-cache": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/loader-fs-cache/-/loader-fs-cache-1.0.3.tgz",
            "integrity": "sha512-ldcgZpjNJj71n+2Mf6yetz+c9bM4xpKtNds4LbqXzU/PTdeAX0g3ytnU1AJMEcTk2Lex4Smpe3Q/eCTsvUBxbA==",
            "requires": {
                "find-cache-dir": "^0.1.1",
                "mkdirp": "^0.5.1"
            },
            "dependencies": {
                "find-cache-dir": {
                    "version": "0.1.1",
                    "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-0.1.1.tgz",
                    "integrity": "sha1-yN765XyKUqinhPnjHFfHQumToLk=",
                    "requires": {
                        "commondir": "^1.0.1",
                        "mkdirp": "^0.5.1",
                        "pkg-dir": "^1.0.0"
                    }
                },
                "pkg-dir": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-1.0.0.tgz",
                    "integrity": "sha1-ektQio1bstYp1EcFb/TpyTFM89Q=",
                    "requires": {
                        "find-up": "^1.0.0"
                    }
                }
            }
        },
        "loader-runner": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-2.4.0.tgz",
            "integrity": "sha512-Jsmr89RcXGIwivFY21FcRrisYZfvLMTWx5kOLc+JTxtpBOG6xML0vzbc6SEQG2FO9/4Fc3wW4LVcB5DmGflaRw=="
        },
        "loader-utils": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
            "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
            "requires": {
                "big.js": "^5.2.2",
                "emojis-list": "^3.0.0",
                "json5": "^1.0.1"
            },
            "dependencies": {
                "json5": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
                    "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
                    "requires": {
                        "minimist": "^1.2.0"
                    }
                }
            }
        },
        "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "requires": {
                "p-locate": "^3.0.0",
                "path-exists": "^3.0.0"
            },
            "dependencies": {
                "path-exists": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
                    "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
                }
            }
        },
        "lodash": {
            "version": "4.17.20",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz",
            "integrity": "sha512-PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5hagpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA=="
        },
        "lodash-es": {
            "version": "4.17.15",
            "resolved": "https://registry.npmjs.org/lodash-es/-/lodash-es-4.17.15.tgz",
            "integrity": "sha512-rlrc3yU3+JNOpZ9zj5pQtxnx2THmvRykwL4Xlxoa8I9lHBlVbbyPhgyPMioxVZ4NqyxaVVtaJnzsyOidQIhyyQ=="
        },
        "lodash._reinterpolate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
            "integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0="
        },
        "lodash.memoize": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
            "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4="
        },
        "lodash.sortby": {
            "version": "4.7.0",
            "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
            "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg="
        },
        "lodash.template": {
            "version": "4.5.0",
            "resolved": "https://registry.npmjs.org/lodash.template/-/lodash.template-4.5.0.tgz",
            "integrity": "sha512-84vYFxIkmidUiFxidA/KjjH9pAycqW+h980j7Fuz5qxRtO9pgB7MDFTdys1N7A5mcucRiDyEq4fusljItR1T/A==",
            "requires": {
                "lodash._reinterpolate": "^3.0.0",
                "lodash.templatesettings": "^4.0.0"
            }
        },
        "lodash.templatesettings": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-4.2.0.tgz",
            "integrity": "sha512-stgLz+i3Aa9mZgnjr/O+v9ruKZsPsndy7qPZOchbqk2cnTU1ZaldKK+v7m54WoKIyxiuMZTKT2H81F8BeAc3ZQ==",
            "requires": {
                "lodash._reinterpolate": "^3.0.0"
            }
        },
        "lodash.uniq": {
            "version": "4.5.0",
            "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
            "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M="
        },
        "log-symbols": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.0.0.tgz",
            "integrity": "sha512-FN8JBzLx6CzeMrB0tg6pqlGU1wCrXW+ZXGH481kfsBqer0hToTIiHdjH4Mq8xJUbvATujKCvaREGWpGUionraA==",
            "requires": {
                "chalk": "^4.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                    "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                    "requires": {
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
                },
                "supports-color": {
                    "version": "7.2.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                    "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "loglevel": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.7.0.tgz",
            "integrity": "sha512-i2sY04nal5jDcagM3FMfG++T69GEEM8CYuOfeOIvmXzOIcwE9a/CJPR0MFM97pYMj/u10lzz7/zd7+qwhrBTqQ=="
        },
        "longest-streak": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/longest-streak/-/longest-streak-2.0.4.tgz",
            "integrity": "sha512-vM6rUVCVUJJt33bnmHiZEvr7wPT78ztX7rojL+LW51bHtLh6HTjx84LA5W4+oa6aKEJA7jJu5LR6vQRBpA5DVg=="
        },
        "loose-envify": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
            "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
            "requires": {
                "js-tokens": "^3.0.0 || ^4.0.0"
            }
        },
        "loud-rejection": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
            "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
            "requires": {
                "currently-unhandled": "^0.4.1",
                "signal-exit": "^3.0.0"
            }
        },
        "lower-case": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.1.tgz",
            "integrity": "sha512-LiWgfDLLb1dwbFQZsSglpRj+1ctGnayXz3Uv0/WO8n558JycT5fg6zkNcnW0G68Nn0aEldTFeEfmjCfmqry/rQ==",
            "requires": {
                "tslib": "^1.10.0"
            }
        },
        "lowercase-keys": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
            "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
        },
        "lru-cache": {
            "version": "4.1.5",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
            "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
            "requires": {
                "pseudomap": "^1.0.2",
                "yallist": "^2.1.2"
            }
        },
        "make-dir": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
            "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
            "requires": {
                "semver": "^6.0.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
                }
            }
        },
        "makeerror": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
            "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
            "requires": {
                "tmpl": "1.0.x"
            }
        },
        "mamacro": {
            "version": "0.0.3",
            "resolved": "https://registry.npmjs.org/mamacro/-/mamacro-0.0.3.tgz",
            "integrity": "sha512-qMEwh+UujcQ+kbz3T6V+wAmO2U8veoq2w+3wY8MquqwVA3jChfwY+Tk52GZKDfACEPjuZ7r2oJLejwpt8jtwTA=="
        },
        "map-cache": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
            "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
        },
        "map-obj": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
            "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0="
        },
        "map-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
            "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
            "requires": {
                "object-visit": "^1.0.0"
            }
        },
        "markdown-escapes": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/markdown-escapes/-/markdown-escapes-1.0.4.tgz",
            "integrity": "sha512-8z4efJYk43E0upd0NbVXwgSTQs6cT3T06etieCMEg7dRbzCbxUCK/GHlX8mhHRDcp+OLlHkPKsvqQTCvsRl2cg=="
        },
        "markdown-table": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/markdown-table/-/markdown-table-2.0.0.tgz",
            "integrity": "sha512-Ezda85ToJUBhM6WGaG6veasyym+Tbs3cMAw/ZhOPqXiYsr0jgocBV3j3nx+4lk47plLlIqjwuTm/ywVI+zjJ/A==",
            "requires": {
                "repeat-string": "^1.0.0"
            }
        },
        "mathml-tag-names": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/mathml-tag-names/-/mathml-tag-names-2.1.3.tgz",
            "integrity": "sha512-APMBEanjybaPzUrfqU0IMU5I0AswKMH7k8OTLs0vvV4KZpExkTkY87nR/zpbuTPj+gARop7aGUbl11pnDfW6xg=="
        },
        "md5.js": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
            "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
            "requires": {
                "hash-base": "^3.0.0",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.1.2"
            }
        },
        "mdast-util-compact": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/mdast-util-compact/-/mdast-util-compact-2.0.1.tgz",
            "integrity": "sha512-7GlnT24gEwDrdAwEHrU4Vv5lLWrEer4KOkAiKT9nYstsTad7Oc1TwqT2zIMKRdZF7cTuaf+GA1E4Kv7jJh8mPA==",
            "requires": {
                "unist-util-visit": "^2.0.0"
            }
        },
        "mdn-data": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
            "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA=="
        },
        "media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
        },
        "memory-fs": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
            "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
            "requires": {
                "errno": "^0.1.3",
                "readable-stream": "^2.0.1"
            }
        },
        "memorystream": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/memorystream/-/memorystream-0.3.1.tgz",
            "integrity": "sha1-htcJCzDORV1j+64S3aUaR93K+bI="
        },
        "meow": {
            "version": "3.7.0",
            "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
            "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
            "requires": {
                "camelcase-keys": "^2.0.0",
                "decamelize": "^1.1.2",
                "loud-rejection": "^1.0.0",
                "map-obj": "^1.0.1",
                "minimist": "^1.1.3",
                "normalize-package-data": "^2.3.4",
                "object-assign": "^4.0.1",
                "read-pkg-up": "^1.0.1",
                "redent": "^1.0.0",
                "trim-newlines": "^1.0.0"
            },
            "dependencies": {
                "indent-string": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
                    "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
                    "requires": {
                        "repeating": "^2.0.0"
                    }
                },
                "redent": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
                    "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
                    "requires": {
                        "indent-string": "^2.1.0",
                        "strip-indent": "^1.0.1"
                    }
                },
                "strip-indent": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
                    "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
                    "requires": {
                        "get-stdin": "^4.0.1"
                    }
                }
            }
        },
        "merge-deep": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/merge-deep/-/merge-deep-3.0.2.tgz",
            "integrity": "sha512-T7qC8kg4Zoti1cFd8Cr0M+qaZfOwjlPDEdZIIPPB2JZctjaPM4fX+i7HOId69tAti2fvO6X5ldfYUONDODsrkA==",
            "requires": {
                "arr-union": "^3.1.0",
                "clone-deep": "^0.2.4",
                "kind-of": "^3.0.2"
            }
        },
        "merge-descriptors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
            "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
        },
        "merge-stream": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
            "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
        },
        "merge2": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
            "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg=="
        },
        "methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
        },
        "microevent.ts": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/microevent.ts/-/microevent.ts-0.1.1.tgz",
            "integrity": "sha512-jo1OfR4TaEwd5HOrt5+tAZ9mqT4jmpNAusXtyfNzqVm9uiSYFZlKM1wYL4oU7azZW/PxQW53wM0S6OR1JHNa2g=="
        },
        "micromatch": {
            "version": "3.1.10",
            "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
            "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
            "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "braces": "^2.3.1",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "extglob": "^2.0.4",
                "fragment-cache": "^0.2.1",
                "kind-of": "^6.0.2",
                "nanomatch": "^1.2.9",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.2"
            },
            "dependencies": {
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                }
            }
        },
        "miller-rabin": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
            "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
            "requires": {
                "bn.js": "^4.0.0",
                "brorand": "^1.0.1"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw=="
                }
            }
        },
        "mime": {
            "version": "2.4.6",
            "resolved": "https://registry.npmjs.org/mime/-/mime-2.4.6.tgz",
            "integrity": "sha512-RZKhC3EmpBchfTGBVb8fb+RL2cWyw/32lshnsETttkBAyAUXSGHxbEJWWRXc751DrIxG1q04b8QwMbAwkRPpUA=="
        },
        "mime-db": {
            "version": "1.44.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
            "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg=="
        },
        "mime-types": {
            "version": "2.1.27",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
            "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
            "requires": {
                "mime-db": "1.44.0"
            }
        },
        "mimic-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
            "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
        },
        "mimic-response": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
            "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ=="
        },
        "min-indent": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
            "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg=="
        },
        "mini-create-react-context": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/mini-create-react-context/-/mini-create-react-context-0.4.0.tgz",
            "integrity": "sha512-b0TytUgFSbgFJGzJqXPKCFCBWigAjpjo+Fl7Vf7ZbKRDptszpppKxXH6DRXEABZ/gcEQczeb0iZ7JvL8e8jjCA==",
            "requires": {
                "@babel/runtime": "^7.5.5",
                "tiny-warning": "^1.0.3"
            }
        },
        "mini-css-extract-plugin": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-0.9.0.tgz",
            "integrity": "sha512-lp3GeY7ygcgAmVIcRPBVhIkf8Us7FZjA+ILpal44qLdSu11wmjKQ3d9k15lfD7pO4esu9eUIAW7qiYIBppv40A==",
            "requires": {
                "loader-utils": "^1.1.0",
                "normalize-url": "1.9.1",
                "schema-utils": "^1.0.0",
                "webpack-sources": "^1.1.0"
            },
            "dependencies": {
                "normalize-url": {
                    "version": "1.9.1",
                    "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-1.9.1.tgz",
                    "integrity": "sha1-LMDWazHqIwNkWENuNiDYWVTGbDw=",
                    "requires": {
                        "object-assign": "^4.0.1",
                        "prepend-http": "^1.0.0",
                        "query-string": "^4.1.0",
                        "sort-keys": "^1.0.0"
                    }
                },
                "prepend-http": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
                    "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw="
                },
                "schema-utils": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
                    "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
                    "requires": {
                        "ajv": "^6.1.0",
                        "ajv-errors": "^1.0.0",
                        "ajv-keywords": "^3.1.0"
                    }
                }
            }
        },
        "minimalistic-assert": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
            "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A=="
        },
        "minimalistic-crypto-utils": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
            "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo="
        },
        "minimatch": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
            "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
            "requires": {
                "brace-expansion": "^1.1.7"
            }
        },
        "minimist": {
            "version": "1.2.5",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
            "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
        },
        "minimist-options": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/minimist-options/-/minimist-options-4.1.0.tgz",
            "integrity": "sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==",
            "requires": {
                "arrify": "^1.0.1",
                "is-plain-obj": "^1.1.0",
                "kind-of": "^6.0.3"
            },
            "dependencies": {
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                }
            }
        },
        "minipass": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
            "integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
            "requires": {
                "yallist": "^4.0.0"
            },
            "dependencies": {
                "yallist": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
                    "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
                }
            }
        },
        "minipass-collect": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
            "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minipass-flush": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
            "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minipass-pipeline": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
            "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "mississippi": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/mississippi/-/mississippi-3.0.0.tgz",
            "integrity": "sha512-x471SsVjUtBRtcvd4BzKE9kFC+/2TeWgKCgw0bZcw1b9l2X3QX5vCWgF+KaZaYm87Ss//rHnWryupDrgLvmSkA==",
            "requires": {
                "concat-stream": "^1.5.0",
                "duplexify": "^3.4.2",
                "end-of-stream": "^1.1.0",
                "flush-write-stream": "^1.0.0",
                "from2": "^2.1.0",
                "parallel-transform": "^1.1.0",
                "pump": "^3.0.0",
                "pumpify": "^1.3.3",
                "stream-each": "^1.1.0",
                "through2": "^2.0.0"
            }
        },
        "mixin-deep": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
            "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
            "requires": {
                "for-in": "^1.0.2",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "mixin-object": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/mixin-object/-/mixin-object-2.0.1.tgz",
            "integrity": "sha1-T7lJRB2rGCVA8f4DW6YOGUel5X4=",
            "requires": {
                "for-in": "^0.1.3",
                "is-extendable": "^0.1.1"
            },
            "dependencies": {
                "for-in": {
                    "version": "0.1.8",
                    "resolved": "https://registry.npmjs.org/for-in/-/for-in-0.1.8.tgz",
                    "integrity": "sha1-2Hc5COMSVhCZUrH9ubP6hn0ndeE="
                }
            }
        },
        "mkdirp": {
            "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
            "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "move-concurrently": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
            "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
            "requires": {
                "aproba": "^1.1.1",
                "copy-concurrently": "^1.0.0",
                "fs-write-stream-atomic": "^1.0.8",
                "mkdirp": "^0.5.1",
                "rimraf": "^2.5.4",
                "run-queue": "^1.0.3"
            }
        },
        "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        },
        "multicast-dns": {
            "version": "6.2.3",
            "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
            "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
            "requires": {
                "dns-packet": "^1.3.1",
                "thunky": "^1.0.2"
            }
        },
        "multicast-dns-service-types": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
            "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE="
        },
        "mute-stream": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
            "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
        },
        "nan": {
            "version": "2.14.2",
            "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.2.tgz",
            "integrity": "sha512-M2ufzIiINKCuDfBSAUr1vWQ+vuVcA9kqx8JJUsbQi6yf1uGRyb7HfpdfUr5qLXf3B/t8dPvcjhKMmlfnP47EzQ=="
        },
        "nanomatch": {
            "version": "1.2.13",
            "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
            "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
            "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "fragment-cache": "^0.2.1",
                "is-windows": "^1.0.2",
                "kind-of": "^6.0.2",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "kind-of": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
                    "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
                }
            }
        },
        "natural-compare": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
            "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="
        },
        "negotiator": {
            "version": "0.6.2",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
            "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
        },
        "neo-async": {
            "version": "2.6.2",
            "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
            "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw=="
        },
        "next-tick": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
            "integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw="
        },
        "nice-try": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
            "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
        },
        "no-case": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.3.tgz",
            "integrity": "sha512-ehY/mVQCf9BL0gKfsJBvFJen+1V//U+0HQMPrWct40ixE4jnv0bfvxDbWtAHL9EcaPEOJHVVYKoQn1TlZUB8Tw==",
            "requires": {
                "lower-case": "^2.0.1",
                "tslib": "^1.10.0"
            }
        },
        "node-forge": {
            "version": "0.10.0",
            "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.10.0.tgz",
            "integrity": "sha512-PPmu8eEeG9saEUvI97fm4OYxXVB6bFvyNTyiUOBichBpFG8A1Ljw3bY62+5oOjDEMHRnd0Y7HQ+x7uzxOzC6JA=="
        },
        "node-gyp": {
            "version": "3.8.0",
            "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-3.8.0.tgz",
            "integrity": "sha512-3g8lYefrRRzvGeSowdJKAKyks8oUpLEd/DyPV4eMhVlhJ0aNaZqIrNUIPuEWWTAoPqyFkfGrM67MC69baqn6vA==",
            "requires": {
                "fstream": "^1.0.0",
                "glob": "^7.0.3",
                "graceful-fs": "^4.1.2",
                "mkdirp": "^0.5.0",
                "nopt": "2 || 3",
                "npmlog": "0 || 1 || 2 || 3 || 4",
                "osenv": "0",
                "request": "^2.87.0",
                "rimraf": "2",
                "semver": "~5.3.0",
                "tar": "^2.0.0",
                "which": "1"
            },
            "dependencies": {
                "semver": {
                    "version": "5.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.3.0.tgz",
                    "integrity": "sha1-myzl094C0XxgEq0yaqa00M9U+U8="
                }
            }
        },
        "node-int64": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
            "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
        },
        "node-libs-browser": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
            "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
            "requires": {
                "assert": "^1.1.1",
                "browserify-zlib": "^0.2.0",
                "buffer": "^4.3.0",
                "console-browserify": "^1.1.0",
                "constants-browserify": "^1.0.0",
                "crypto-browserify": "^3.11.0",
                "domain-browser": "^1.1.1",
                "events": "^3.0.0",
                "https-browserify": "^1.0.0",
                "os-browserify": "^0.3.0",
                "path-browserify": "0.0.1",
                "process": "^0.11.10",
                "punycode": "^1.2.4",
                "querystring-es3": "^0.2.0",
                "readable-stream": "^2.3.3",
                "stream-browserify": "^2.0.1",
                "stream-http": "^2.7.2",
                "string_decoder": "^1.0.0",
                "timers-browserify": "^2.0.4",
                "tty-browserify": "0.0.0",
                "url": "^0.11.0",
                "util": "^0.11.0",
                "vm-browserify": "^1.0.1"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
                },
                "punycode": {
                    "version": "1.4.1",
                    "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
                    "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4="
                },
                "util": {
                    "version": "0.11.1",
                    "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
                    "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
                    "requires": {
                        "inherits": "2.0.3"
                    }
                }
            }
        },
        "node-modules-regexp": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
            "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA="
        },
        "node-notifier": {
            "version": "5.4.3",
            "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.3.tgz",
            "integrity": "sha512-M4UBGcs4jeOK9CjTsYwkvH6/MzuUmGCyTW+kCY7uO+1ZVr0+FHGdPdIf5CCLqAaxnRrWidyoQlNkMIIVwbKB8Q==",
            "requires": {
                "growly": "^1.3.0",
                "is-wsl": "^1.1.0",
                "semver": "^5.5.0",
                "shellwords": "^0.1.1",
                "which": "^1.3.0"
            }
        },
        "node-releases": {
            "version": "1.1.61",
            "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.61.tgz",
            "integrity": "sha512-DD5vebQLg8jLCOzwupn954fbIiZht05DAZs0k2u8NStSe6h9XdsuIQL8hSRKYiU8WUQRznmSDrKGbv3ObOmC7g=="
        },
        "node-sass": {
            "version": "4.14.1",
            "resolved": "https://registry.npmjs.org/node-sass/-/node-sass-4.14.1.tgz",
            "integrity": "sha512-sjCuOlvGyCJS40R8BscF5vhVlQjNN069NtQ1gSxyK1u9iqvn6tf7O1R4GNowVZfiZUCRt5MmMs1xd+4V/7Yr0g==",
            "requires": {
                "async-foreach": "^0.1.3",
                "chalk": "^1.1.1",
                "cross-spawn": "^3.0.0",
                "gaze": "^1.0.0",
                "get-stdin": "^4.0.1",
                "glob": "^7.0.3",
                "in-publish": "^2.0.0",
                "lodash": "^4.17.15",
                "meow": "^3.7.0",
                "mkdirp": "^0.5.1",
                "nan": "^2.13.2",
                "node-gyp": "^3.8.0",
                "npmlog": "^4.0.0",
                "request": "^2.88.0",
                "sass-graph": "2.2.5",
                "stdout-stream": "^1.4.0",
                "true-case-path": "^1.0.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
                    "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4="
                },
                "chalk": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
                    "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
                    "requires": {
                        "ansi-styles": "^2.2.1",
                        "escape-string-regexp": "^1.0.2",
                        "has-ansi": "^2.0.0",
                        "strip-ansi": "^3.0.0",
                        "supports-color": "^2.0.0"
                    }
                },
                "supports-color": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
                    "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc="
                }
            }
        },
        "nodemon": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.5.tgz",
            "integrity": "sha512-6/jqtZvJdk092pVnD2AIH19KQ9GQZAKOZVy/yT1ueL6aoV+Ix7a1lVZStXzvEh0fP4zE41DDWlkVoHjR6WlozA==",
            "requires": {
                "chokidar": "^3.2.2",
                "debug": "^3.2.6",
                "ignore-by-default": "^1.0.1",
                "minimatch": "^3.0.4",
                "pstree.remy": "^1.1.7",
                "semver": "^5.7.1",
                "supports-color": "^5.5.0",
                "touch": "^3.1.0",
                "undefsafe": "^2.0.3",
                "update-notifier": "^4.1.0"
            }
        },
        "nopt": {
            "version": "3.0.6",
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-3.0.6.tgz",
            "integrity": "sha1-xkZdvwirzU2zWTF/eaxopkayj/k=",
            "requires": {
                "abbrev": "1"
            }
        },
        "normalize-package-data": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
            "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
            "requires": {
                "hosted-git-info": "^2.1.4",
                "resolve": "^1.10.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
            }
        },
        "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
        },
        "normalize-range": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
            "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI="
        },
        "normalize-selector": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/normalize-selector/-/normalize-selector-0.2.0.tgz",
            "integrity": "sha1-0LFF62kRicY6eNIB3E/bEpPvDAM="
        },
        "normalize-url": {
            "version": "4.5.0",
            "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
            "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ=="
        },
        "npm-run-all": {
            "version": "4.1.5",
            "resolved": "https://registry.npmjs.org/npm-run-all/-/npm-run-all-4.1.5.tgz",
            "integrity": "sha512-Oo82gJDAVcaMdi3nuoKFavkIHBRVqQ1qvMb+9LHk/cF4P6B2m8aP04hGf7oL6wZ9BuGwX1onlLhpuoofSyoQDQ==",
            "requires": {
                "ansi-styles": "^3.2.1",
                "chalk": "^2.4.1",
                "cross-spawn": "^6.0.5",
                "memorystream": "^0.3.1",
                "minimatch": "^3.0.4",
                "pidtree": "^0.3.0",
                "read-pkg": "^3.0.0",
                "shell-quote": "^1.6.1",
                "string.prototype.padend": "^3.0.0"
            },
            "dependencies": {
                "cross-spawn": {
                    "version": "6.0.5",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
                    "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
                    "requires": {
                        "nice-try": "^1.0.4",
                        "path-key": "^2.0.1",
                        "semver": "^5.5.0",
                        "shebang-command": "^1.2.0",
                        "which": "^1.2.9"
                    }
                },
                "load-json-file": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-4.0.0.tgz",
                    "integrity": "sha1-L19Fq5HjMhYjT9U62rZo607AmTs=",
                    "requires": {
                        "graceful-fs": "^4.1.2",
                        "parse-json": "^4.0.0",
                        "pify": "^3.0.0",
                        "strip-bom": "^3.0.0"
                    }
                },
                "parse-json": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
                    "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
                    "requires": {
                        "error-ex": "^1.3.1",
                        "json-parse-better-errors": "^1.0.1"
                    }
                },
                "path-type": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
                    "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
                    "requires": {
                        "pify": "^3.0.0"
                    }
                },
                "pify": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
                    "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY="
                },
                "read-pkg": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-3.0.0.tgz",
                    "integrity": "sha1-nLxoaXj+5l0WwA4rGcI3/Pbjg4k=",
                    "requires": {
                        "load-json-file": "^4.0.0",
                        "normalize-package-data": "^2.3.2",
                        "path-type": "^3.0.0"
                    }
                },
                "strip-bom": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
                    "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM="
                }
            }
        },
        "npm-run-path": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
            "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
            "requires": {
                "path-key": "^2.0.0"
            }
        },
        "npm-watch": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/npm-watch/-/npm-watch-0.7.0.tgz",
            "integrity": "sha512-AN2scNyMljMGkn0mIkaRRk19I7Vx0qTK6GmsIcDblX5YRbSsoJORTAtrceICSx7Om9q48NWcwm/R0t6E7F4Ocg==",
            "requires": {
                "nodemon": "^2.0.3",
                "through2": "^2.0.0"
            }
        },
        "npmlog": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
            "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
            "requires": {
                "are-we-there-yet": "~1.1.2",
                "console-control-strings": "~1.1.0",
                "gauge": "~2.7.3",
                "set-blocking": "~2.0.0"
            }
        },
        "nth-check": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
            "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
            "requires": {
                "boolbase": "~1.0.0"
            }
        },
        "num2fraction": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/num2fraction/-/num2fraction-1.2.2.tgz",
            "integrity": "sha1-b2gragJ6Tp3fpFZM0lidHU5mnt4="
        },
        "number-is-nan": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
            "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
        },
        "nwsapi": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
            "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
        },
        "oauth-sign": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
            "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ=="
        },
        "object-assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
            "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
        },
        "object-copy": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
            "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
            "requires": {
                "copy-descriptor": "^0.1.0",
                "define-property": "^0.2.5",
                "kind-of": "^3.0.3"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "object-hash": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.0.3.tgz",
            "integrity": "sha512-JPKn0GMu+Fa3zt3Bmr66JhokJU5BaNBIh4ZeTlaCBzrBsOeXzwcKKAK1tbLiPKgvwmPXsDvvLHoWh5Bm7ofIYg=="
        },
        "object-inspect": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.8.0.tgz",
            "integrity": "sha512-jLdtEOB112fORuypAyl/50VRVIBIdVQOSUUGQHzJ4xBSbit81zRarz7GThkEFZy1RceYrWYcPcBFPQwHyAc1gA=="
        },
        "object-is": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.3.tgz",
            "integrity": "sha512-teyqLvFWzLkq5B9ki8FVWA902UER2qkxmdA4nLf+wjOLAWgxzCWZNCxpDq9MvE8MmhWNr+I8w3BN49Vx36Y6Xg==",
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.18.0-next.1"
            },
            "dependencies": {
                "es-abstract": {
                    "version": "1.18.0-next.1",
                    "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz",
                    "integrity": "sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==",
                    "requires": {
                        "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                        "has": "^1.0.3",
                        "has-symbols": "^1.0.1",
                        "is-callable": "^1.2.2",
                        "is-negative-zero": "^2.0.0",
                        "is-regex": "^1.1.1",
                        "object-inspect": "^1.8.0",
                        "object-keys": "^1.1.1",
                        "object.assign": "^4.1.1",
                        "string.prototype.trimend": "^1.0.1",
                        "string.prototype.trimstart": "^1.0.1"
                    }
                }
            }
        },
        "object-keys": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
            "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
        },
        "object-path": {
            "version": "0.11.4",
            "resolved": "https://registry.npmjs.org/object-path/-/object-path-0.11.4.tgz",
            "integrity": "sha1-NwrnUvvzfePqcKhhwju6iRVpGUk="
        },
        "object-visit": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
            "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
            "requires": {
                "isobject": "^3.0.0"
            }
        },
        "object.assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.1.tgz",
            "integrity": "sha512-VT/cxmx5yaoHSOTSyrCygIDFco+RsibY2NM0a4RdEeY/4KgqezwFtK1yr3U67xYhqJSlASm2pKhLVzPj2lr4bA==",
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.18.0-next.0",
                "has-symbols": "^1.0.1",
                "object-keys": "^1.1.1"
            },
            "dependencies": {
                "es-abstract": {
                    "version": "1.18.0-next.1",
                    "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.0-next.1.tgz",
                    "integrity": "sha512-I4UGspA0wpZXWENrdA0uHbnhte683t3qT/1VFH9aX2dA5PPSf6QW5HHXf5HImaqPmjXaVeVk4RGWnaylmV7uAA==",
                    "requires": {
                        "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                        "has": "^1.0.3",
                        "has-symbols": "^1.0.1",
                        "is-callable": "^1.2.2",
                        "is-negative-zero": "^2.0.0",
                        "is-regex": "^1.1.1",
                        "object-inspect": "^1.8.0",
                        "object-keys": "^1.1.1",
                        "object.assign": "^4.1.1",
                        "string.prototype.trimend": "^1.0.1",
                        "string.prototype.trimstart": "^1.0.1"
                    }
                }
            }
        },
        "object.entries": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.2.tgz",
            "integrity": "sha512-BQdB9qKmb/HyNdMNWVr7O3+z5MUIx3aiegEIJqjMBbBf0YT9RRxTJSim4mzFqtyr7PDAHigq0N9dO0m0tRakQA==",
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.5",
                "has": "^1.0.3"
            }
        },
        "object.fromentries": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.2.tgz",
            "integrity": "sha512-r3ZiBH7MQppDJVLx6fhD618GKNG40CZYH9wgwdhKxBDDbQgjeWGGd4AtkZad84d291YxvWe7bJGuE65Anh0dxQ==",
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1",
                "function-bind": "^1.1.1",
                "has": "^1.0.3"
            }
        },
        "object.getownpropertydescriptors": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
            "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1"
            }
        },
        "object.pick": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
            "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "object.values": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.1.tgz",
            "integrity": "sha512-WTa54g2K8iu0kmS/us18jEmdv1a4Wi//BZ/DTVYEcH0XhLM5NYdpDHja3gt57VrZLcNAO2WGA+KpWsDBaHt6eA==",
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1",
                "function-bind": "^1.1.1",
                "has": "^1.0.3"
            }
        },
        "obuf": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
            "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg=="
        },
        "on-finished": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
            "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
            "requires": {
                "ee-first": "1.1.1"
            }
        },
        "on-headers": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
            "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
        },
        "once": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
            "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
            "requires": {
                "wrappy": "1"
            }
        },
        "onetime": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
            "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
            "requires": {
                "mimic-fn": "^2.1.0"
            }
        },
        "open": {
            "version": "7.3.0",
            "resolved": "https://registry.npmjs.org/open/-/open-7.3.0.tgz",
            "integrity": "sha512-mgLwQIx2F/ye9SmbrUkurZCnkoXyXyu9EbHtJZrICjVAJfyMArdHp3KkixGdZx1ZHFPNIwl0DDM1dFFqXbTLZw==",
            "requires": {
                "is-docker": "^2.0.0",
                "is-wsl": "^2.1.1"
            },
            "dependencies": {
                "is-wsl": {
                    "version": "2.2.0",
                    "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
                    "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
                    "requires": {
                        "is-docker": "^2.0.0"
                    }
                }
            }
        },
        "opn": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
            "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
            "requires": {
                "is-wsl": "^1.1.0"
            }
        },
        "optimize-css-assets-webpack-plugin": {
            "version": "5.0.3",
            "resolved": "https://registry.npmjs.org/optimize-css-assets-webpack-plugin/-/optimize-css-assets-webpack-plugin-5.0.3.tgz",
            "integrity": "sha512-q9fbvCRS6EYtUKKSwI87qm2IxlyJK5b4dygW1rKUBT6mMDhdG5e5bZT63v6tnJR9F9FB/H5a0HTmtw+laUBxKA==",
            "requires": {
                "cssnano": "^4.1.10",
                "last-call-webpack-plugin": "^3.0.0"
            }
        },
        "optionator": {
            "version": "0.8.3",
            "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
            "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
            "requires": {
                "deep-is": "~0.1.3",
                "fast-levenshtein": "~2.0.6",
                "levn": "~0.3.0",
                "prelude-ls": "~1.1.2",
                "type-check": "~0.3.2",
                "word-wrap": "~1.2.3"
            }
        },
        "original": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/original/-/original-1.0.2.tgz",
            "integrity": "sha512-hyBVl6iqqUOJ8FqRe+l/gS8H+kKYjrEndd5Pm1MfBtsEKA038HkkdbAl/72EAXGyonD/PFsvmVG+EvcIpliMBg==",
            "requires": {
                "url-parse": "^1.4.3"
            }
        },
        "os-browserify": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
            "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc="
        },
        "os-homedir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
            "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M="
        },
        "os-tmpdir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
            "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
        },
        "osenv": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
            "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
            "requires": {
                "os-homedir": "^1.0.0",
                "os-tmpdir": "^1.0.0"
            }
        },
        "p-cancelable": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
            "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw=="
        },
        "p-each-series": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-1.0.0.tgz",
            "integrity": "sha1-kw89Et0fUOdDRFeiLNbwSsatf3E=",
            "requires": {
                "p-reduce": "^1.0.0"
            }
        },
        "p-finally": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
            "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
        },
        "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
                "p-try": "^2.0.0"
            }
        },
        "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "requires": {
                "p-limit": "^2.0.0"
            }
        },
        "p-map": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-map/-/p-map-3.0.0.tgz",
            "integrity": "sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==",
            "requires": {
                "aggregate-error": "^3.0.0"
            }
        },
        "p-reduce": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/p-reduce/-/p-reduce-1.0.0.tgz",
            "integrity": "sha1-GMKw3ZNqRpClKfgjH1ig/bakffo="
        },
        "p-retry": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-3.0.1.tgz",
            "integrity": "sha512-XE6G4+YTTkT2a0UWb2kjZe8xNwf8bIbnqpc/IS/idOBVhyves0mK5OJgeocjx7q5pvX/6m23xuzVPYT1uGM73w==",
            "requires": {
                "retry": "^0.12.0"
            }
        },
        "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
        },
        "package-json": {
            "version": "6.5.0",
            "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
            "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
            "requires": {
                "got": "^9.6.0",
                "registry-auth-token": "^4.0.0",
                "registry-url": "^5.0.0",
                "semver": "^6.2.0"
            },
            "dependencies": {
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
                }
            }
        },
        "pako": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
            "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw=="
        },
        "parallel-transform": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/parallel-transform/-/parallel-transform-1.2.0.tgz",
            "integrity": "sha512-P2vSmIu38uIlvdcU7fDkyrxj33gTUy/ABO5ZUbGowxNCopBq/OoD42bP4UmMrJoPyk4Uqf0mu3mtWBhHCZD8yg==",
            "requires": {
                "cyclist": "^1.0.1",
                "inherits": "^2.0.3",
                "readable-stream": "^2.1.5"
            }
        },
        "param-case": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.3.tgz",
            "integrity": "sha512-VWBVyimc1+QrzappRs7waeN2YmoZFCGXWASRYX1/rGHtXqEcrGEIDm+jqIwFa2fRXNgQEwrxaYuIrX0WcAguTA==",
            "requires": {
                "dot-case": "^3.0.3",
                "tslib": "^1.10.0"
            }
        },
        "parent-module": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
            "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
            "requires": {
                "callsites": "^3.0.0"
            },
            "dependencies": {
                "callsites": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
                    "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
                }
            }
        },
        "parse-asn1": {
            "version": "5.1.6",
            "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
            "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
            "requires": {
                "asn1.js": "^5.2.0",
                "browserify-aes": "^1.0.0",
                "evp_bytestokey": "^1.0.0",
                "pbkdf2": "^3.0.3",
                "safe-buffer": "^5.1.1"
            }
        },
        "parse-entities": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-2.0.0.tgz",
            "integrity": "sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==",
            "requires": {
                "character-entities": "^1.0.0",
                "character-entities-legacy": "^1.0.0",
                "character-reference-invalid": "^1.0.0",
                "is-alphanumerical": "^1.0.0",
                "is-decimal": "^1.0.0",
                "is-hexadecimal": "^1.0.0"
            }
        },
        "parse-json": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
            "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
            "requires": {
                "error-ex": "^1.2.0"
            }
        },
        "parse5": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-4.0.0.tgz",
            "integrity": "sha512-VrZ7eOd3T1Fk4XWNXMgiGBK/z0MG48BWG2uQNU4I72fkQuKUTZpl+u9k+CxEG0twMVzSmXEEz12z5Fnw1jIQFA=="
        },
        "parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
        },
        "pascal-case": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.1.tgz",
            "integrity": "sha512-XIeHKqIrsquVTQL2crjq3NfJUxmdLasn3TYOU0VBM+UX2a6ztAWBlJQBePLGY7VHW8+2dRadeIPK5+KImwTxQA==",
            "requires": {
                "no-case": "^3.0.3",
                "tslib": "^1.10.0"
            }
        },
        "pascalcase": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
            "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
        },
        "path-browserify": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
            "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ=="
        },
        "path-dirname": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
            "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA="
        },
        "path-exists": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
            "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
            "requires": {
                "pinkie-promise": "^2.0.0"
            }
        },
        "path-is-absolute": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
            "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
        },
        "path-is-inside": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
            "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM="
        },
        "path-key": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
            "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
        },
        "path-parse": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
            "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
        },
        "path-to-regexp": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-1.8.0.tgz",
            "integrity": "sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==",
            "requires": {
                "isarray": "0.0.1"
            },
            "dependencies": {
                "isarray": {
                    "version": "0.0.1",
                    "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
                    "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
                }
            }
        },
        "path-type": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
            "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
            "requires": {
                "graceful-fs": "^4.1.2",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0"
            }
        },
        "pbkdf2": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.1.tgz",
            "integrity": "sha512-4Ejy1OPxi9f2tt1rRV7Go7zmfDQ+ZectEQz3VGUQhgq62HtIRPDyG/JtnwIxs6x3uNMwo2V7q1fMvKjb+Tnpqg==",
            "requires": {
                "create-hash": "^1.1.2",
                "create-hmac": "^1.1.4",
                "ripemd160": "^2.0.1",
                "safe-buffer": "^5.0.1",
                "sha.js": "^2.4.8"
            }
        },
        "performance-now": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
            "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
        },
        "picomatch": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
            "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg=="
        },
        "pidtree": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/pidtree/-/pidtree-0.3.1.tgz",
            "integrity": "sha512-qQbW94hLHEqCg7nhby4yRC7G2+jYHY4Rguc2bjw7Uug4GIJuu1tvf2uHaZv5Q8zdt+WKJ6qK1FOI6amaWUo5FA=="
        },
        "pify": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw="
        },
        "pinkie": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
            "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA="
        },
        "pinkie-promise": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
            "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
            "requires": {
                "pinkie": "^2.0.0"
            }
        },
        "pirates": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
            "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
            "requires": {
                "node-modules-regexp": "^1.0.0"
            }
        },
        "pkg-conf": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/pkg-conf/-/pkg-conf-3.1.0.tgz",
            "integrity": "sha512-m0OTbR/5VPNPqO1ph6Fqbj7Hv6QU7gR/tQW40ZqrL1rjgCU85W6C1bJn0BItuJqnR98PWzw7Z8hHeChD1WrgdQ==",
            "dev": true,
            "requires": {
                "find-up": "^3.0.0",
                "load-json-file": "^5.2.0"
            },
            "dependencies": {
                "find-up": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                    "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^3.0.0"
                    }
                },
                "load-json-file": {
                    "version": "5.3.0",
                    "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-5.3.0.tgz",
                    "integrity": "sha512-cJGP40Jc/VXUsp8/OrnyKyTZ1y6v/dphm3bioS+RrKXjK2BB6wHUd6JptZEFDGgGahMT+InnZO5i1Ei9mpC8Bw==",
                    "dev": true,
                    "requires": {
                        "graceful-fs": "^4.1.15",
                        "parse-json": "^4.0.0",
                        "pify": "^4.0.1",
                        "strip-bom": "^3.0.0",
                        "type-fest": "^0.3.0"
                    }
                },
                "parse-json": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
                    "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
                    "dev": true,
                    "requires": {
                        "error-ex": "^1.3.1",
                        "json-parse-better-errors": "^1.0.1"
                    }
                },
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
                    "dev": true
                },
                "strip-bom": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
                    "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
                    "dev": true
                },
                "type-fest": {
                    "version": "0.3.1",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.3.1.tgz",
                    "integrity": "sha512-cUGJnCdr4STbePCgqNFbpVNCepa+kAVohJs1sLhxzdH+gnEoOd8VhbYa7pD3zZYGiURWM2xzEII3fQcRizDkYQ==",
                    "dev": true
                }
            }
        },
        "pkg-config": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/pkg-config/-/pkg-config-1.1.1.tgz",
            "integrity": "sha1-VX7yLXPaPIg3EHdmxS6tq94pj+Q=",
            "dev": true,
            "requires": {
                "debug-log": "^1.0.0",
                "find-root": "^1.0.0",
                "xtend": "^4.0.1"
            }
        },
        "pkg-dir": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
            "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
            "requires": {
                "find-up": "^3.0.0"
            },
            "dependencies": {
                "find-up": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                    "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                    "requires": {
                        "locate-path": "^3.0.0"
                    }
                }
            }
        },
        "pkg-up": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-3.1.0.tgz",
            "integrity": "sha512-nDywThFk1i4BQK4twPQ6TA4RT8bDY96yeuCVBWL3ePARCiEKDRSrNGbFIgUJpLp+XeIR65v8ra7WuJOFUBtkMA==",
            "requires": {
                "find-up": "^3.0.0"
            },
            "dependencies": {
                "find-up": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                    "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                    "requires": {
                        "locate-path": "^3.0.0"
                    }
                }
            }
        },
        "pn": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
            "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA=="
        },
        "pnp-webpack-plugin": {
            "version": "1.6.4",
            "resolved": "https://registry.npmjs.org/pnp-webpack-plugin/-/pnp-webpack-plugin-1.6.4.tgz",
            "integrity": "sha512-7Wjy+9E3WwLOEL30D+m8TSTF7qJJUJLONBnwQp0518siuMxUQUbgZwssaFX+QKlZkjHZcw/IpZCt/H0srrntSg==",
            "requires": {
                "ts-pnp": "^1.1.6"
            }
        },
        "portfinder": {
            "version": "1.0.28",
            "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",
            "integrity": "sha512-Se+2isanIcEqf2XMHjyUKskczxbPH7dQnlMjXX6+dybayyHvAf/TCgyMRlzf/B6QDhAEFOGes0pzRo3by4AbMA==",
            "requires": {
                "async": "^2.6.2",
                "debug": "^3.1.1",
                "mkdirp": "^0.5.5"
            }
        },
        "posix-character-classes": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
            "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
        },
        "postcss": {
            "version": "7.0.35",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.35.tgz",
            "integrity": "sha512-3QT8bBJeX/S5zKTTjTCIjRF3If4avAT6kqxcASlTWEtAFCb9NH0OUxNDfgZSWdP5fJnBYCMEWkIFfWeugjzYMg==",
            "requires": {
                "chalk": "^2.4.2",
                "source-map": "^0.6.1",
                "supports-color": "^6.1.0"
            },
            "dependencies": {
                "supports-color": {
                    "version": "6.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
                    "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "postcss-attribute-case-insensitive": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-attribute-case-insensitive/-/postcss-attribute-case-insensitive-4.0.2.tgz",
            "integrity": "sha512-clkFxk/9pcdb4Vkn0hAHq3YnxBQ2p0CGD1dy24jN+reBck+EWxMbxSUqN4Yj7t0w8csl87K6p0gxBe1utkJsYA==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-selector-parser": "^6.0.2"
            }
        },
        "postcss-browser-comments": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-browser-comments/-/postcss-browser-comments-3.0.0.tgz",
            "integrity": "sha512-qfVjLfq7HFd2e0HW4s1dvU8X080OZdG46fFbIBFjW7US7YPDcWfRvdElvwMJr2LI6hMmD+7LnH2HcmXTs+uOig==",
            "requires": {
                "postcss": "^7"
            }
        },
        "postcss-calc": {
            "version": "7.0.5",
            "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-7.0.5.tgz",
            "integrity": "sha512-1tKHutbGtLtEZF6PT4JSihCHfIVldU72mZ8SdZHIYriIZ9fh9k9aWSppaT8rHsyI3dX+KSR+W+Ix9BMY3AODrg==",
            "requires": {
                "postcss": "^7.0.27",
                "postcss-selector-parser": "^6.0.2",
                "postcss-value-parser": "^4.0.2"
            }
        },
        "postcss-color-functional-notation": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/postcss-color-functional-notation/-/postcss-color-functional-notation-2.0.1.tgz",
            "integrity": "sha512-ZBARCypjEDofW4P6IdPVTLhDNXPRn8T2s1zHbZidW6rPaaZvcnCS2soYFIQJrMZSxiePJ2XIYTlcb2ztr/eT2g==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-color-gray": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-color-gray/-/postcss-color-gray-5.0.0.tgz",
            "integrity": "sha512-q6BuRnAGKM/ZRpfDascZlIZPjvwsRye7UDNalqVz3s7GDxMtqPY6+Q871liNxsonUw8oC61OG+PSaysYpl1bnw==",
            "requires": {
                "@csstools/convert-colors": "^1.4.0",
                "postcss": "^7.0.5",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-color-hex-alpha": {
            "version": "5.0.3",
            "resolved": "https://registry.npmjs.org/postcss-color-hex-alpha/-/postcss-color-hex-alpha-5.0.3.tgz",
            "integrity": "sha512-PF4GDel8q3kkreVXKLAGNpHKilXsZ6xuu+mOQMHWHLPNyjiUBOr75sp5ZKJfmv1MCus5/DWUGcK9hm6qHEnXYw==",
            "requires": {
                "postcss": "^7.0.14",
                "postcss-values-parser": "^2.0.1"
            }
        },
        "postcss-color-mod-function": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/postcss-color-mod-function/-/postcss-color-mod-function-3.0.3.tgz",
            "integrity": "sha512-YP4VG+xufxaVtzV6ZmhEtc+/aTXH3d0JLpnYfxqTvwZPbJhWqp8bSY3nfNzNRFLgB4XSaBA82OE4VjOOKpCdVQ==",
            "requires": {
                "@csstools/convert-colors": "^1.4.0",
                "postcss": "^7.0.2",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-color-rebeccapurple": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-color-rebeccapurple/-/postcss-color-rebeccapurple-4.0.1.tgz",
            "integrity": "sha512-aAe3OhkS6qJXBbqzvZth2Au4V3KieR5sRQ4ptb2b2O8wgvB3SJBsdG+jsn2BZbbwekDG8nTfcCNKcSfe/lEy8g==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-colormin": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
            "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
            "requires": {
                "browserslist": "^4.0.0",
                "color": "^3.0.0",
                "has": "^1.0.0",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
                }
            }
        },
        "postcss-convert-values": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
            "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
            "requires": {
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
                }
            }
        },
        "postcss-custom-media": {
            "version": "7.0.8",
            "resolved": "https://registry.npmjs.org/postcss-custom-media/-/postcss-custom-media-7.0.8.tgz",
            "integrity": "sha512-c9s5iX0Ge15o00HKbuRuTqNndsJUbaXdiNsksnVH8H4gdc+zbLzr/UasOwNG6CTDpLFekVY4672eWdiiWu2GUg==",
            "requires": {
                "postcss": "^7.0.14"
            }
        },
        "postcss-custom-properties": {
            "version": "8.0.11",
            "resolved": "https://registry.npmjs.org/postcss-custom-properties/-/postcss-custom-properties-8.0.11.tgz",
            "integrity": "sha512-nm+o0eLdYqdnJ5abAJeXp4CEU1c1k+eB2yMCvhgzsds/e0umabFrN6HoTy/8Q4K5ilxERdl/JD1LO5ANoYBeMA==",
            "requires": {
                "postcss": "^7.0.17",
                "postcss-values-parser": "^2.0.1"
            }
        },
        "postcss-custom-selectors": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/postcss-custom-selectors/-/postcss-custom-selectors-5.1.2.tgz",
            "integrity": "sha512-DSGDhqinCqXqlS4R7KGxL1OSycd1lydugJ1ky4iRXPHdBRiozyMHrdu0H3o7qNOCiZwySZTUI5MV0T8QhCLu+w==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-selector-parser": "^5.0.0-rc.3"
            },
            "dependencies": {
                "cssesc": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
                    "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
                },
                "postcss-selector-parser": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
                    "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
                    "requires": {
                        "cssesc": "^2.0.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "postcss-dir-pseudo-class": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-dir-pseudo-class/-/postcss-dir-pseudo-class-5.0.0.tgz",
            "integrity": "sha512-3pm4oq8HYWMZePJY+5ANriPs3P07q+LW6FAdTlkFH2XqDdP4HeeJYMOzn0HYLhRSjBO3fhiqSwwU9xEULSrPgw==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-selector-parser": "^5.0.0-rc.3"
            },
            "dependencies": {
                "cssesc": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-2.0.0.tgz",
                    "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg=="
                },
                "postcss-selector-parser": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
                    "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
                    "requires": {
                        "cssesc": "^2.0.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "postcss-discard-comments": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
            "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-discard-duplicates": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
            "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-discard-empty": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
            "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-discard-overridden": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
            "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-double-position-gradients": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/postcss-double-position-gradients/-/postcss-double-position-gradients-1.0.0.tgz",
            "integrity": "sha512-G+nV8EnQq25fOI8CH/B6krEohGWnF5+3A6H/+JEpOncu5dCnkS1QQ6+ct3Jkaepw1NGVqqOZH6lqrm244mCftA==",
            "requires": {
                "postcss": "^7.0.5",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-env-function": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/postcss-env-function/-/postcss-env-function-2.0.2.tgz",
            "integrity": "sha512-rwac4BuZlITeUbiBq60h/xbLzXY43qOsIErngWa4l7Mt+RaSkT7QBjXVGTcBHupykkblHMDrBFh30zchYPaOUw==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-flexbugs-fixes": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/postcss-flexbugs-fixes/-/postcss-flexbugs-fixes-4.1.0.tgz",
            "integrity": "sha512-jr1LHxQvStNNAHlgco6PzY308zvLklh7SJVYuWUwyUQncofaAlD2l+P/gxKHOdqWKe7xJSkVLFF/2Tp+JqMSZA==",
            "requires": {
                "postcss": "^7.0.0"
            }
        },
        "postcss-focus-visible": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/postcss-focus-visible/-/postcss-focus-visible-4.0.0.tgz",
            "integrity": "sha512-Z5CkWBw0+idJHSV6+Bgf2peDOFf/x4o+vX/pwcNYrWpXFrSfTkQ3JQ1ojrq9yS+upnAlNRHeg8uEwFTgorjI8g==",
            "requires": {
                "postcss": "^7.0.2"
            }
        },
        "postcss-focus-within": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-focus-within/-/postcss-focus-within-3.0.0.tgz",
            "integrity": "sha512-W0APui8jQeBKbCGZudW37EeMCjDeVxKgiYfIIEo8Bdh5SpB9sxds/Iq8SEuzS0Q4YFOlG7EPFulbbxujpkrV2w==",
            "requires": {
                "postcss": "^7.0.2"
            }
        },
        "postcss-font-variant": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/postcss-font-variant/-/postcss-font-variant-4.0.0.tgz",
            "integrity": "sha512-M8BFYKOvCrI2aITzDad7kWuXXTm0YhGdP9Q8HanmN4EF1Hmcgs1KK5rSHylt/lUJe8yLxiSwWAHdScoEiIxztg==",
            "requires": {
                "postcss": "^7.0.2"
            }
        },
        "postcss-gap-properties": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/postcss-gap-properties/-/postcss-gap-properties-2.0.0.tgz",
            "integrity": "sha512-QZSqDaMgXCHuHTEzMsS2KfVDOq7ZFiknSpkrPJY6jmxbugUPTuSzs/vuE5I3zv0WAS+3vhrlqhijiprnuQfzmg==",
            "requires": {
                "postcss": "^7.0.2"
            }
        },
        "postcss-html": {
            "version": "0.36.0",
            "resolved": "https://registry.npmjs.org/postcss-html/-/postcss-html-0.36.0.tgz",
            "integrity": "sha512-HeiOxGcuwID0AFsNAL0ox3mW6MHH5cstWN1Z3Y+n6H+g12ih7LHdYxWwEA/QmrebctLjo79xz9ouK3MroHwOJw==",
            "requires": {
                "htmlparser2": "^3.10.0"
            }
        },
        "postcss-image-set-function": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/postcss-image-set-function/-/postcss-image-set-function-3.0.1.tgz",
            "integrity": "sha512-oPTcFFip5LZy8Y/whto91L9xdRHCWEMs3e1MdJxhgt4jy2WYXfhkng59fH5qLXSCPN8k4n94p1Czrfe5IOkKUw==",
            "requires": {
                "postcss": "^7.0.2",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-initial": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/postcss-initial/-/postcss-initial-3.0.2.tgz",
            "integrity": "sha512-ugA2wKonC0xeNHgirR4D3VWHs2JcU08WAi1KFLVcnb7IN89phID6Qtg2RIctWbnvp1TM2BOmDtX8GGLCKdR8YA==",
            "requires": {
                "lodash.template": "^4.5.0",
                "postcss": "^7.0.2"
            }
        },
        "postcss-jsx": {
            "version": "0.36.4",
            "resolved": "https://registry.npmjs.org/postcss-jsx/-/postcss-jsx-0.36.4.tgz",
            "integrity": "sha512-jwO/7qWUvYuWYnpOb0+4bIIgJt7003pgU3P6nETBLaOyBXuTD55ho21xnals5nBrlpTIFodyd3/jBi6UO3dHvA==",
            "requires": {
                "@babel/core": ">=7.2.2"
            }
        },
        "postcss-lab-function": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/postcss-lab-function/-/postcss-lab-function-2.0.1.tgz",
            "integrity": "sha512-whLy1IeZKY+3fYdqQFuDBf8Auw+qFuVnChWjmxm/UhHWqNHZx+B99EwxTvGYmUBqe3Fjxs4L1BoZTJmPu6usVg==",
            "requires": {
                "@csstools/convert-colors": "^1.4.0",
                "postcss": "^7.0.2",
                "postcss-values-parser": "^2.0.0"
            }
        },
        "postcss-less": {
            "version": "3.1.4",
            "resolved": "https://registry.npmjs.org/postcss-less/-/postcss-less-3.1.4.tgz",
            "integrity": "sha512-7TvleQWNM2QLcHqvudt3VYjULVB49uiW6XzEUFmvwHzvsOEF5MwBrIXZDJQvJNFGjJQTzSzZnDoCJ8h/ljyGXA==",
            "requires": {
                "postcss": "^7.0.14"
            }
        },
        "postcss-load-config": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-2.1.2.tgz",
            "integrity": "sha512-/rDeGV6vMUo3mwJZmeHfEDvwnTKKqQ0S7OHUi/kJvvtx3aWtyWG2/0ZWnzCt2keEclwN6Tf0DST2v9kITdOKYw==",
            "requires": {
                "cosmiconfig": "^5.0.0",
                "import-cwd": "^2.0.0"
            }
        },
        "postcss-loader": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-3.0.0.tgz",
            "integrity": "sha512-cLWoDEY5OwHcAjDnkyRQzAXfs2jrKjXpO/HQFcc5b5u/r7aa471wdmChmwfnv7x2u840iat/wi0lQ5nbRgSkUA==",
            "requires": {
                "loader-utils": "^1.1.0",
                "postcss": "^7.0.0",
                "postcss-load-config": "^2.0.0",
                "schema-utils": "^1.0.0"
            },
            "dependencies": {
                "schema-utils": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
                    "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
                    "requires": {
                        "ajv": "^6.1.0",
                        "ajv-errors": "^1.0.0",
                        "ajv-keywords": "^3.1.0"
                    }
                }
            }
        },
        "postcss-logical": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-logical/-/postcss-logical-3.0.0.tgz",
            "integrity": "sha512-1SUKdJc2vuMOmeItqGuNaC+N8MzBWFWEkAnRnLpFYj1tGGa7NqyVBujfRtgNa2gXR+6RkGUiB2O5Vmh7E2RmiA==",
            "requires": {
                "postcss": "^7.0.2"
            }
        },
        "postcss-markdown": {
            "version": "0.36.0",
            "resolved": "https://registry.npmjs.org/postcss-markdown/-/postcss-markdown-0.36.0.tgz",
            "integrity": "sha512-rl7fs1r/LNSB2bWRhyZ+lM/0bwKv9fhl38/06gF6mKMo/NPnp55+K1dSTosSVjFZc0e1ppBlu+WT91ba0PMBfQ==",
            "requires": {
                "remark": "^10.0.1",
                "unist-util-find-all-after": "^1.0.2"
            },
            "dependencies": {
                "is-buffer": {
                    "version": "2.0.4",
                    "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-2.0.4.tgz",
                    "integrity": "sha512-Kq1rokWXOPXWuaMAqZiJW4XxsmD9zGx9q4aePabbn3qCRGedtH7Cm+zV8WETitMfu1wdh+Rvd6w5egwSngUX2A=="
                },
                "markdown-table": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/markdown-table/-/markdown-table-1.1.3.tgz",
                    "integrity": "sha512-1RUZVgQlpJSPWYbFSpmudq5nHY1doEIv89gBtF0s4gW1GF2XorxcA/70M5vq7rLv0a6mhOUccRsqkwhwLCIQ2Q=="
                },
                "mdast-util-compact": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mdast-util-compact/-/mdast-util-compact-1.0.4.tgz",
                    "integrity": "sha512-3YDMQHI5vRiS2uygEFYaqckibpJtKq5Sj2c8JioeOQBU6INpKbdWzfyLqFFnDwEcEnRFIdMsguzs5pC1Jp4Isg==",
                    "requires": {
                        "unist-util-visit": "^1.1.0"
                    }
                },
                "parse-entities": {
                    "version": "1.2.2",
                    "resolved": "https://registry.npmjs.org/parse-entities/-/parse-entities-1.2.2.tgz",
                    "integrity": "sha512-NzfpbxW/NPrzZ/yYSoQxyqUZMZXIdCfE0OIN4ESsnptHJECoUk3FZktxNuzQf4tjt5UEopnxpYJbvYuxIFDdsg==",
                    "requires": {
                        "character-entities": "^1.0.0",
                        "character-entities-legacy": "^1.0.0",
                        "character-reference-invalid": "^1.0.0",
                        "is-alphanumerical": "^1.0.0",
                        "is-decimal": "^1.0.0",
                        "is-hexadecimal": "^1.0.0"
                    }
                },
                "remark": {
                    "version": "10.0.1",
                    "resolved": "https://registry.npmjs.org/remark/-/remark-10.0.1.tgz",
                    "integrity": "sha512-E6lMuoLIy2TyiokHprMjcWNJ5UxfGQjaMSMhV+f4idM625UjjK4j798+gPs5mfjzDE6vL0oFKVeZM6gZVSVrzQ==",
                    "requires": {
                        "remark-parse": "^6.0.0",
                        "remark-stringify": "^6.0.0",
                        "unified": "^7.0.0"
                    }
                },
                "remark-parse": {
                    "version": "6.0.3",
                    "resolved": "https://registry.npmjs.org/remark-parse/-/remark-parse-6.0.3.tgz",
                    "integrity": "sha512-QbDXWN4HfKTUC0hHa4teU463KclLAnwpn/FBn87j9cKYJWWawbiLgMfP2Q4XwhxxuuuOxHlw+pSN0OKuJwyVvg==",
                    "requires": {
                        "collapse-white-space": "^1.0.2",
                        "is-alphabetical": "^1.0.0",
                        "is-decimal": "^1.0.0",
                        "is-whitespace-character": "^1.0.0",
                        "is-word-character": "^1.0.0",
                        "markdown-escapes": "^1.0.0",
                        "parse-entities": "^1.1.0",
                        "repeat-string": "^1.5.4",
                        "state-toggle": "^1.0.0",
                        "trim": "0.0.1",
                        "trim-trailing-lines": "^1.0.0",
                        "unherit": "^1.0.4",
                        "unist-util-remove-position": "^1.0.0",
                        "vfile-location": "^2.0.0",
                        "xtend": "^4.0.1"
                    }
                },
                "remark-stringify": {
                    "version": "6.0.4",
                    "resolved": "https://registry.npmjs.org/remark-stringify/-/remark-stringify-6.0.4.tgz",
                    "integrity": "sha512-eRWGdEPMVudijE/psbIDNcnJLRVx3xhfuEsTDGgH4GsFF91dVhw5nhmnBppafJ7+NWINW6C7ZwWbi30ImJzqWg==",
                    "requires": {
                        "ccount": "^1.0.0",
                        "is-alphanumeric": "^1.0.0",
                        "is-decimal": "^1.0.0",
                        "is-whitespace-character": "^1.0.0",
                        "longest-streak": "^2.0.1",
                        "markdown-escapes": "^1.0.0",
                        "markdown-table": "^1.1.0",
                        "mdast-util-compact": "^1.0.0",
                        "parse-entities": "^1.0.2",
                        "repeat-string": "^1.5.4",
                        "state-toggle": "^1.0.0",
                        "stringify-entities": "^1.0.1",
                        "unherit": "^1.0.4",
                        "xtend": "^4.0.1"
                    }
                },
                "stringify-entities": {
                    "version": "1.3.2",
                    "resolved": "https://registry.npmjs.org/stringify-entities/-/stringify-entities-1.3.2.tgz",
                    "integrity": "sha512-nrBAQClJAPN2p+uGCVJRPIPakKeKWZ9GtBCmormE7pWOSlHat7+x5A8gx85M7HM5Dt0BP3pP5RhVW77WdbJJ3A==",
                    "requires": {
                        "character-entities-html4": "^1.0.0",
                        "character-entities-legacy": "^1.0.0",
                        "is-alphanumerical": "^1.0.0",
                        "is-hexadecimal": "^1.0.0"
                    }
                },
                "unified": {
                    "version": "7.1.0",
                    "resolved": "https://registry.npmjs.org/unified/-/unified-7.1.0.tgz",
                    "integrity": "sha512-lbk82UOIGuCEsZhPj8rNAkXSDXd6p0QLzIuSsCdxrqnqU56St4eyOB+AlXsVgVeRmetPTYydIuvFfpDIed8mqw==",
                    "requires": {
                        "@types/unist": "^2.0.0",
                        "@types/vfile": "^3.0.0",
                        "bail": "^1.0.0",
                        "extend": "^3.0.0",
                        "is-plain-obj": "^1.1.0",
                        "trough": "^1.0.0",
                        "vfile": "^3.0.0",
                        "x-is-string": "^0.1.0"
                    }
                },
                "unist-util-find-all-after": {
                    "version": "1.0.5",
                    "resolved": "https://registry.npmjs.org/unist-util-find-all-after/-/unist-util-find-all-after-1.0.5.tgz",
                    "integrity": "sha512-lWgIc3rrTMTlK1Y0hEuL+k+ApzFk78h+lsaa2gHf63Gp5Ww+mt11huDniuaoq1H+XMK2lIIjjPkncxXcDp3QDw==",
                    "requires": {
                        "unist-util-is": "^3.0.0"
                    }
                },
                "unist-util-is": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/unist-util-is/-/unist-util-is-3.0.0.tgz",
                    "integrity": "sha512-sVZZX3+kspVNmLWBPAB6r+7D9ZgAFPNWm66f7YNb420RlQSbn+n8rG8dGZSkrER7ZIXGQYNm5pqC3v3HopH24A=="
                },
                "unist-util-remove-position": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/unist-util-remove-position/-/unist-util-remove-position-1.1.4.tgz",
                    "integrity": "sha512-tLqd653ArxJIPnKII6LMZwH+mb5q+n/GtXQZo6S6csPRs5zB0u79Yw8ouR3wTw8wxvdJFhpP6Y7jorWdCgLO0A==",
                    "requires": {
                        "unist-util-visit": "^1.1.0"
                    }
                },
                "unist-util-stringify-position": {
                    "version": "1.1.2",
                    "resolved": "https://registry.npmjs.org/unist-util-stringify-position/-/unist-util-stringify-position-1.1.2.tgz",
                    "integrity": "sha512-pNCVrk64LZv1kElr0N1wPiHEUoXNVFERp+mlTg/s9R5Lwg87f9bM/3sQB99w+N9D/qnM9ar3+AKDBwo/gm/iQQ=="
                },
                "unist-util-visit": {
                    "version": "1.4.1",
                    "resolved": "https://registry.npmjs.org/unist-util-visit/-/unist-util-visit-1.4.1.tgz",
                    "integrity": "sha512-AvGNk7Bb//EmJZyhtRUnNMEpId/AZ5Ph/KUpTI09WHQuDZHKovQ1oEv3mfmKpWKtoMzyMC4GLBm1Zy5k12fjIw==",
                    "requires": {
                        "unist-util-visit-parents": "^2.0.0"
                    }
                },
                "unist-util-visit-parents": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/unist-util-visit-parents/-/unist-util-visit-parents-2.1.2.tgz",
                    "integrity": "sha512-DyN5vD4NE3aSeB+PXYNKxzGsfocxp6asDc2XXE3b0ekO2BaRUpBicbbUygfSvYfUz1IkmjFR1YF7dPklraMZ2g==",
                    "requires": {
                        "unist-util-is": "^3.0.0"
                    }
                },
                "vfile": {
                    "version": "3.0.1",
                    "resolved": "https://registry.npmjs.org/vfile/-/vfile-3.0.1.tgz",
                    "integrity": "sha512-y7Y3gH9BsUSdD4KzHsuMaCzRjglXN0W2EcMf0gpvu6+SbsGhMje7xDc8AEoeXy6mIwCKMI6BkjMsRjzQbhMEjQ==",
                    "requires": {
                        "is-buffer": "^2.0.0",
                        "replace-ext": "1.0.0",
                        "unist-util-stringify-position": "^1.0.0",
                        "vfile-message": "^1.0.0"
                    }
                },
                "vfile-location": {
                    "version": "2.0.6",
                    "resolved": "https://registry.npmjs.org/vfile-location/-/vfile-location-2.0.6.tgz",
                    "integrity": "sha512-sSFdyCP3G6Ka0CEmN83A2YCMKIieHx0EDaj5IDP4g1pa5ZJ4FJDvpO0WODLxo4LUX4oe52gmSCK7Jw4SBghqxA=="
                },
                "vfile-message": {
                    "version": "1.1.1",
                    "resolved": "https://registry.npmjs.org/vfile-message/-/vfile-message-1.1.1.tgz",
                    "integrity": "sha512-1WmsopSGhWt5laNir+633LszXvZ+Z/lxveBf6yhGsqnQIhlhzooZae7zV6YVM1Sdkw68dtAW3ow0pOdPANugvA==",
                    "requires": {
                        "unist-util-stringify-position": "^1.1.1"
                    }
                }
            }
        },
        "postcss-media-minmax": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/postcss-media-minmax/-/postcss-media-minmax-4.0.0.tgz",
            "integrity": "sha512-fo9moya6qyxsjbFAYl97qKO9gyre3qvbMnkOZeZwlsW6XYFsvs2DMGDlchVLfAd8LHPZDxivu/+qW2SMQeTHBw==",
            "requires": {
                "postcss": "^7.0.2"
            }
        },
        "postcss-media-query-parser": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/postcss-media-query-parser/-/postcss-media-query-parser-0.2.3.tgz",
            "integrity": "sha1-J7Ocb02U+Bsac7j3Y1HGCeXO8kQ="
        },
        "postcss-merge-longhand": {
            "version": "4.0.11",
            "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
            "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
            "requires": {
                "css-color-names": "0.0.4",
                "postcss": "^7.0.0",
                "postcss-value-parser": "^3.0.0",
                "stylehacks": "^4.0.0"
            },
            "dependencies": {
                "postcss-value-parser": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
                    "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ=="
                }
            }
        },
        "postcss-merge-rules": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
            "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
            "requires": {
                "browserslist": "^4.0.0",
                "caniuse-api": "^3.0.0",
                "cssnano-util-same-parent": "^4.0.0",
                "postcss": "^7.0.0",
                "postcss-selector-parser": "^3.0.0",
                "vendors": "^1.0.0"
            },
            "dependencies": {
                "postcss-selector-parser": {
                    "version": "3.1.2",
                    "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-3.1.2.tgz",
                    "integrity": "sha512-h7fJ/5uWuRVyOtkO45pnt1Ih40CEleeyCHzipqAZO2e5H20g25Y48uYnFUiShvY4rZWNJ/Bib/KVPmanaCtOhA==",
                    "requires": {
                        "dot-prop": "^5.2.0",
                        "indexes-of": "^1.0.1",
                        "uniq": "^1.0.1"
                    }
                }
            }
        },
        "postcss-minify-font-values": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
            "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
            "requires": {
