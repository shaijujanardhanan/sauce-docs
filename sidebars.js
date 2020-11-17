module.exports = {
  docs: {
  	"Home": [
        'overview',
        {
            type: 'category',
            label: 'Sauce Labs Basics',
            collapsed: true,
            items: [
                'sauce-basics',
                'configuration',
                'platform-support',
                'account-and-team-management',
                'data-centers',
            ],
        },
    ],
    "Secure Connections": [
        {
            type: 'category',
            label: 'Sauce Connect Proxy',
            collapsed: true,
            items: [
                'sauce-connect',
                'sauce-connect/requirements',
                'sauce-connect/setup',
                'sauce-connect/network',
                'sauce-connect/admin',
                'sauce-connect/troubleshooting',
            ],
        },
        {
            type: 'category',
            label: 'IPSec VPN',
            collapsed: true,
            items: [
                'ipsec',
                'ipsec/requirements',
                'ipsec/setup',
                'ipsec/network',
                'ipsec/admin',
                'ipsec/troubleshooting',
            ],
        },
    ],
    "Mobile Apps": [
        'mobile-apps',
        {
            type: 'category',
            label: 'Live Testing',
            collapsed: true,
            items: [
                'mobile-apps/live-testing',
                'mobile-apps/live-testing/application-storage',
                'mobile-apps/live-testing/real-devices',
                'mobile-apps/live-testing/virtual-devices',
            ],
        },
        {
            type: 'category',
            label: 'Automated Testing',
            collapsed: true,
            items: [
                'mobile-apps/automated-testing',
                'mobile-apps/automated-testing/appium',
                'mobile-apps/automated-testing/espresso',
                'mobile-apps/automated-testing/xcuitest',
                'mobile-apps/automated-testing/robotium',
                'mobile-apps/automated-testing/wdio',
            ],
        },
        {
            type: 'category',
            label: 'Testing Frameworks',
            collapsed: true,
            items: [
                'mobile-apps/testing-frameworks',
                'mobile-apps/testing-frameworks/native-frameworks',
            ],
        },
        {
            type: 'category',
            label: 'Native Frameworks',
            collapsed: true,
            items: [
                'mobile-apps/testing-frameworks/native-frameworks',
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-rdc',
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-vdc',
            ],
        },
        {
            type: 'category',
            label: 'Sauce Runner Using RDC',
            collapsed: true,
            items: [
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-rdc',
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-rdc/commands',
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-rdc/espresso-rdc',
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-rdc/xcuitest-rdc',


            ],
        },
        {
            type: 'category',
            label: 'Sauce Runner Using VDC',
            collapsed: true,
            items: [
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-vdc',
                'mobile-apps/testing-frameworks/native-frameworks/sauce-runner-vdc/espresso-vdc',
            ],
        },
    ],
    "Web Apps": [
        'web-apps',
        {
            type: 'category',
            label: 'Live Testing',
            collapsed: true,
            items: [
                'web-apps/live-testing',
                'web-apps/live-testing/desktop-browsers',
                'web-apps/live-testing/mobile-browsers',
                'web-apps/live-testing/troubleshooting',
            ],
        },
        {
            type: 'category',
            label: 'Automated Testing',
            collapsed: true,
            items: [
                'web-apps/automated-testing',
                'web-apps/automated-testing/selenium',
                'web-apps/automated-testing/wdio',
                'web-apps/automated-testing/js',
            ],
        },
    ],
    "CI/CD": [
        'ci',
        'ci/jenkins',
        'ci/bamboo',
        'ci/circleci',
        'ci/azure',
        'ci/github',
        'ci/gitlab',
    ],
    "Insights": [
        'insights',
        'insights/history',
        'insights/trends',
        'insights/filters',
        'insights/efficiency',
        'insights/failure-analysis',
        'insights/debugging',
    ],
    "Performance": [
        'performance',
        'performance/load',
        'performance/speedo',
        'performance/jankiness',
        'performance/troubleshooting',
    ],
    "Headless": [
        'headless',
        'headless/requirements',
        'headless/configuration',
        'headless/troubleshooting',
    ],
    "Visual": [
        'visual',
        'visual/requirements',
        'visual/configuration',
        'visual/workflows',
        'visual/history',
        'visual/advanced',
        'visual/troubleshooting',
    ],
    "Developer Resources": [
        'dev',
        {
            type: 'category',
            label: 'API Reference',
            collapsed: true,
            items: [
                'dev/api',
                'dev/api/access-key',
                'dev/api/account',
                'dev/api/activity',
                'dev/api/analytics',
                'dev/api/devices',
                'dev/api/info',
                'dev/api/jobs',
                'dev/api/js-tests',
                'dev/api/performance',
                'dev/api/sauce-storage',
                'dev/api/storage',
                'dev/api/tunnels',
                'dev/api/user',
            ],
        },
        {
            type: 'category',
            label: 'CLI Reference',
            collapsed: true,
            items: [
                'dev/cli',
                'dev/cli/ipsec-cli',
                'dev/cli/sc-cli',
                'dev/cli/saucectl',
            ]
        },
        {
            type: 'category',
            label: 'Sauce Bindings',
            collapsed: true,
            items: [
                'dev/sauce-bindings',
                'dev/sauce-bindings/configuration',
                'dev/sauce-bindings/integration',
                'dev/sauce-bindings/support',
            ],
        },
        {
            type: 'category',
            label: 'Testrunner Toolkit',
            collapsed: true,
            items: [
                'dev/testrunner-toolkit',
                'dev/testrunner-toolkit/installation',
                'dev/testrunner-toolkit/configuration',
                'dev/testrunner-toolkit/running-tests',
                'dev/testrunner-toolkit/integrations',
                'dev/testrunner-toolkit/typescript',
                'dev/testrunner-toolkit/faqs',
                'dev/testrunner-toolkit/support',
            ],
        },
    ],
    Contributing: [
        'contributing',
        'contributing/code-of-conduct',
    	{
    		type: 'category',
    		label: 'Style Guide',
    		items: [
    		    'contributing/style-guide',
    		    'contributing/style-guide/mkdwn-styles',
                'contributing/style-guide/adv-examples'
            ],
    	},
    ],
  },
};
